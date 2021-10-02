import { OnEvent } from '@nestjs/event-emitter';
import { JwtService } from '@nestjs/jwt';
import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { NestGateway } from '@nestjs/websockets/interfaces/nest-gateway.interface';
import { Socket, Server } from 'socket.io';
import { futureEvent } from 'src/modules/shared/constants/event.constant';
import BetResultEvent from 'src/modules/shared/events/betting.event';

@WebSocketGateway({ namespace: '/future', cors: true })
export default class FutureGateway implements NestGateway {
  constructor(private jwtService: JwtService) {}

  @WebSocketServer() server: Server;

  public afterInit(server: Server): void {}

  @SubscribeMessage('authorization')
  public authorization(client: Socket, token: string): void {
    const isAuth = this.jwtService.verify(token);
    if (!isAuth) {
      return;
    }
    const user = this.jwtService.decode(token) as any;
    client.handshake.auth.user = user;
    client.join(user.id);
    process.nextTick(async () => {
      client.emit('future:auth', user);
    });
  }

  @SubscribeMessage('mirror')
  public mirror(client: Socket, msg: string): void {
    const isVerified = IsVerified(client);
    if (!isVerified) return;
    client.to(getMyRoom(client)).emit('mirror', msg);
  }

  public handleDisconnect(client: Socket<any>): void {
    // return this.logger.log(`Client disconnected: ${client.id}`);
  }

  public handleConnection(client: Socket): void {
    // return this.logger.log(`Client connected: ${client.id}`);
  }

  public handleEmitBetResult(payload: BetResultEvent) {
    return this.server.to(payload.userId).emit('future:bet-results', payload);
  }

  @OnEvent(futureEvent.BET_RESULT)
  handleEmitBetResultEvent(payload: BetResultEvent) {
    this.handleEmitBetResult(payload);
  }
}

function IsVerified(client: Socket) {
  return !!client.handshake.auth.user;
}

function getMyRoom(client: Socket) {
  return client.handshake.auth.user.id;
}
