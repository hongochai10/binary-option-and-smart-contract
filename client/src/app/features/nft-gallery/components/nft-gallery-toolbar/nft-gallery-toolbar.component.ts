import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { NftService } from 'src/app/@core/services/nft.service';
import { WalletConnectService } from 'src/app/@core/services/wallet-connect.service';

interface NFT {}
@Component({
  selector: 'app-nft-gallery-toolbar',
  templateUrl: './nft-gallery-toolbar.component.html',
  styleUrls: ['./nft-gallery-toolbar.component.scss'],
})
export class NftGalleryToolbarComponent implements OnInit {
  assets = '';

  nftForm = this.fb.group({
    assets: ['', [Validators.required]],
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  address = this.walletService.address;

  isConnected = this.walletService.isWalletConnected;

  constructor(
    private dialogService: NbDialogService,
    private fb: FormBuilder,
    private nftService: NftService,
    private walletService: WalletConnectService,
  ) {}

  ngOnInit() {
    // this.nftService.$nft.getValue().setEndpoint('http://localhost');
  }

  openMintDialog(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      // context: {
      //   title: 'This is a title passed to the dialog component',
      // },
    });
  }

  connectWalletPressed() {
    this.walletService.connectWallet();
  }

  async newNftItem() {
    if (!this.nftForm.valid) return;
    const assets = this.nftForm.get('assets')!.value;
    const name = this.nftForm.get('name')!.value;
    const description = this.nftForm.get('description')!.value;
    const nftSvc = this.nftService.nft.getValue();
    try {
      const tx = await nftSvc.freeMint(this.address.getValue());
      console.log({ tx });
      const txDone = await tx.wait();
      console.log({ txDone });
    } catch (error) {
      console.log(error);
    }
    console.log({
      assets,
      name,
      description,
    });
  }
}