/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ShopNFT, ShopNFTInterface } from "../ShopNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "freeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "endpoint",
        type: "string",
      },
    ],
    name: "setEndpoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
];

const _bytecode =
  "0x608060405260405180602001604052806000815250600990805190602001906200002b929190620001b8565b503480156200003957600080fd5b50604051620035873803806200358783398181016040528101906200005f9190620002da565b8181816000908051906020019062000079929190620001b8565b50806001908051906020019062000092929190620001b8565b505050620000b5620000a9620000d460201b60201c565b620000dc60201b60201c565b620000cc6008620001a260201b62000ef21760201c565b5050620004bd565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6001816000016000828254019250508190555050565b828054620001c690620003e2565b90600052602060002090601f016020900481019282620001ea576000855562000236565b82601f106200020557805160ff191683800117855562000236565b8280016001018555821562000236579182015b828111156200023557825182559160200191906001019062000218565b5b50905062000245919062000249565b5090565b5b80821115620002645760008160009055506001016200024a565b5090565b60006200027f620002798462000376565b6200034d565b9050828152602081018484840111156200029857600080fd5b620002a5848285620003ac565b509392505050565b600082601f830112620002bf57600080fd5b8151620002d184826020860162000268565b91505092915050565b60008060408385031215620002ee57600080fd5b600083015167ffffffffffffffff8111156200030957600080fd5b6200031785828601620002ad565b925050602083015167ffffffffffffffff8111156200033557600080fd5b6200034385828601620002ad565b9150509250929050565b6000620003596200036c565b905062000367828262000418565b919050565b6000604051905090565b600067ffffffffffffffff8211156200039457620003936200047d565b5b6200039f82620004ac565b9050602081019050919050565b60005b83811015620003cc578082015181840152602081019050620003af565b83811115620003dc576000848401525b50505050565b60006002820490506001821680620003fb57607f821691505b602082108114156200041257620004116200044e565b5b50919050565b6200042382620004ac565b810181811067ffffffffffffffff821117156200044557620004446200047d565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6130ba80620004cd6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063715018a6116100ad578063bc856b9811610071578063bc856b981461031b578063c87b56dd14610337578063e985e9c514610367578063f2fde38b14610397578063fa07ce1d146103b35761012c565b8063715018a61461029d5780638da5cb5b146102a757806395d89b41146102c5578063a22cb465146102e3578063b88d4fde146102ff5761012c565b806340d097c3116100f457806340d097c3146101e757806342842e0e146102035780635763440b1461021f5780636352211e1461023d57806370a082311461026d5761012c565b806301ffc9a71461013157806306fdde0314610161578063081812fc1461017f578063095ea7b3146101af57806323b872dd146101cb575b600080fd5b61014b600480360381019061014691906120ba565b6103cf565b6040516101589190612524565b60405180910390f35b6101696104b1565b604051610176919061253f565b60405180910390f35b6101996004803603810190610194919061214d565b610543565b6040516101a691906124bd565b60405180910390f35b6101c960048036038101906101c4919061207e565b6105c8565b005b6101e560048036038101906101e09190611f78565b6106e0565b005b61020160048036038101906101fc9190611f13565b610740565b005b61021d60048036038101906102189190611f78565b6107dc565b005b6102276107fc565b6040516102349190612781565b60405180910390f35b6102576004803603810190610252919061214d565b61080d565b60405161026491906124bd565b60405180910390f35b61028760048036038101906102829190611f13565b6108bf565b6040516102949190612781565b60405180910390f35b6102a5610977565b005b6102af6109ff565b6040516102bc91906124bd565b60405180910390f35b6102cd610a29565b6040516102da919061253f565b60405180910390f35b6102fd60048036038101906102f89190612042565b610abb565b005b61031960048036038101906103149190611fc7565b610c3c565b005b6103356004803603810190610330919061210c565b610c9e565b005b610351600480360381019061034c919061214d565b610d34565b60405161035e919061253f565b60405180910390f35b610381600480360381019061037c9190611f3c565b610d46565b60405161038e9190612524565b60405180910390f35b6103b160048036038101906103ac9190611f13565b610dda565b005b6103cd60048036038101906103c89190611f13565b610ed2565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061049a57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104aa57506104a982610f08565b5b9050919050565b6060600080546104c0906129d7565b80601f01602080910402602001604051908101604052809291908181526020018280546104ec906129d7565b80156105395780601f1061050e57610100808354040283529160200191610539565b820191906000526020600020905b81548152906001019060200180831161051c57829003601f168201915b5050505050905090565b600061054e82610f72565b61058d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610584906126c1565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105d38261080d565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610644576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063b90612741565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610663610fde565b73ffffffffffffffffffffffffffffffffffffffff16148061069257506106918161068c610fde565b610d46565b5b6106d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c890612621565b60405180910390fd5b6106db8383610fe6565b505050565b6106f16106eb610fde565b8261109f565b610730576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072790612761565b60405180910390fd5b61073b83838361117d565b505050565b610748610fde565b73ffffffffffffffffffffffffffffffffffffffff166107666109ff565b73ffffffffffffffffffffffffffffffffffffffff16146107bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b3906126e1565b60405180910390fd5b6107cf816107ca60086113d9565b6113e7565b6107d96008610ef2565b50565b6107f783838360405180602001604052806000815250610c3c565b505050565b600061080860086113d9565b905090565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ad90612661565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610930576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092790612641565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61097f610fde565b73ffffffffffffffffffffffffffffffffffffffff1661099d6109ff565b73ffffffffffffffffffffffffffffffffffffffff16146109f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ea906126e1565b60405180910390fd5b6109fd6000611405565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610a38906129d7565b80601f0160208091040260200160405190810160405280929190818152602001828054610a64906129d7565b8015610ab15780601f10610a8657610100808354040283529160200191610ab1565b820191906000526020600020905b815481529060010190602001808311610a9457829003601f168201915b5050505050905090565b610ac3610fde565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b28906125e1565b60405180910390fd5b8060056000610b3e610fde565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff16610beb610fde565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610c309190612524565b60405180910390a35050565b610c4d610c47610fde565b8361109f565b610c8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c8390612761565b60405180910390fd5b610c98848484846114cb565b50505050565b610ca6610fde565b73ffffffffffffffffffffffffffffffffffffffff16610cc46109ff565b73ffffffffffffffffffffffffffffffffffffffff1614610d1a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d11906126e1565b60405180910390fd5b8060099080519060200190610d30929190611d37565b5050565b6060610d3f82611527565b9050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610de2610fde565b73ffffffffffffffffffffffffffffffffffffffff16610e006109ff565b73ffffffffffffffffffffffffffffffffffffffff1614610e56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4d906126e1565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610ec6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebd90612581565b60405180910390fd5b610ecf81611405565b50565b610ee581610ee060086113d9565b6113e7565b610eef6008610ef2565b50565b6001816000016000828254019250508190555050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166110598361080d565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006110aa82610f72565b6110e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e090612601565b60405180910390fd5b60006110f48361080d565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061116357508373ffffffffffffffffffffffffffffffffffffffff1661114b84610543565b73ffffffffffffffffffffffffffffffffffffffff16145b8061117457506111738185610d46565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661119d8261080d565b73ffffffffffffffffffffffffffffffffffffffff16146111f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ea90612701565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611263576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161125a906125c1565b60405180910390fd5b61126e838383611679565b611279600082610fe6565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546112c991906128ed565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113209190612866565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600081600001549050919050565b61140182826040518060200160405280600081525061167e565b5050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6114d684848461117d565b6114e2848484846116d9565b611521576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151890612561565b60405180910390fd5b50505050565b606061153282610f72565b611571576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611568906126a1565b60405180910390fd5b6000600660008481526020019081526020016000208054611591906129d7565b80601f01602080910402602001604051908101604052809291908181526020018280546115bd906129d7565b801561160a5780601f106115df5761010080835404028352916020019161160a565b820191906000526020600020905b8154815290600101906020018083116115ed57829003601f168201915b50505050509050600061161b611870565b9050600081511415611631578192505050611674565b60008251111561166657808260405160200161164e929190612499565b60405160208183030381529060405292505050611674565b61166f84611902565b925050505b919050565b505050565b61168883836119a9565b61169560008484846116d9565b6116d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116cb90612561565b60405180910390fd5b505050565b60006116fa8473ffffffffffffffffffffffffffffffffffffffff16611b77565b15611863578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611723610fde565b8786866040518563ffffffff1660e01b815260040161174594939291906124d8565b602060405180830381600087803b15801561175f57600080fd5b505af192505050801561179057506040513d601f19601f8201168201806040525081019061178d91906120e3565b60015b611813573d80600081146117c0576040519150601f19603f3d011682016040523d82523d6000602084013e6117c5565b606091505b5060008151141561180b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161180290612561565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611868565b600190505b949350505050565b60606009805461187f906129d7565b80601f01602080910402602001604051908101604052809291908181526020018280546118ab906129d7565b80156118f85780601f106118cd576101008083540402835291602001916118f8565b820191906000526020600020905b8154815290600101906020018083116118db57829003601f168201915b5050505050905090565b606061190d82610f72565b61194c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161194390612721565b60405180910390fd5b6000611956611870565b9050600081511161197657604051806020016040528060008152506119a1565b8061198084611b8a565b604051602001611991929190612499565b6040516020818303038152906040525b915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611a19576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a1090612681565b60405180910390fd5b611a2281610f72565b15611a62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a59906125a1565b60405180910390fd5b611a6e60008383611679565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611abe9190612866565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080823b905060008111915050919050565b60606000821415611bd2576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611d32565b600082905060005b60008214611c04578080611bed90612a3a565b915050600a82611bfd91906128bc565b9150611bda565b60008167ffffffffffffffff811115611c46577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611c785781602001600182028036833780820191505090505b5090505b60008514611d2b57600182611c9191906128ed565b9150600a85611ca09190612a83565b6030611cac9190612866565b60f81b818381518110611ce8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611d2491906128bc565b9450611c7c565b8093505050505b919050565b828054611d43906129d7565b90600052602060002090601f016020900481019282611d655760008555611dac565b82601f10611d7e57805160ff1916838001178555611dac565b82800160010185558215611dac579182015b82811115611dab578251825591602001919060010190611d90565b5b509050611db99190611dbd565b5090565b5b80821115611dd6576000816000905550600101611dbe565b5090565b6000611ded611de8846127c1565b61279c565b905082815260208101848484011115611e0557600080fd5b611e10848285612995565b509392505050565b6000611e2b611e26846127f2565b61279c565b905082815260208101848484011115611e4357600080fd5b611e4e848285612995565b509392505050565b600081359050611e6581613028565b92915050565b600081359050611e7a8161303f565b92915050565b600081359050611e8f81613056565b92915050565b600081519050611ea481613056565b92915050565b600082601f830112611ebb57600080fd5b8135611ecb848260208601611dda565b91505092915050565b600082601f830112611ee557600080fd5b8135611ef5848260208601611e18565b91505092915050565b600081359050611f0d8161306d565b92915050565b600060208284031215611f2557600080fd5b6000611f3384828501611e56565b91505092915050565b60008060408385031215611f4f57600080fd5b6000611f5d85828601611e56565b9250506020611f6e85828601611e56565b9150509250929050565b600080600060608486031215611f8d57600080fd5b6000611f9b86828701611e56565b9350506020611fac86828701611e56565b9250506040611fbd86828701611efe565b9150509250925092565b60008060008060808587031215611fdd57600080fd5b6000611feb87828801611e56565b9450506020611ffc87828801611e56565b935050604061200d87828801611efe565b925050606085013567ffffffffffffffff81111561202a57600080fd5b61203687828801611eaa565b91505092959194509250565b6000806040838503121561205557600080fd5b600061206385828601611e56565b925050602061207485828601611e6b565b9150509250929050565b6000806040838503121561209157600080fd5b600061209f85828601611e56565b92505060206120b085828601611efe565b9150509250929050565b6000602082840312156120cc57600080fd5b60006120da84828501611e80565b91505092915050565b6000602082840312156120f557600080fd5b600061210384828501611e95565b91505092915050565b60006020828403121561211e57600080fd5b600082013567ffffffffffffffff81111561213857600080fd5b61214484828501611ed4565b91505092915050565b60006020828403121561215f57600080fd5b600061216d84828501611efe565b91505092915050565b61217f81612921565b82525050565b61218e81612933565b82525050565b600061219f82612823565b6121a98185612839565b93506121b98185602086016129a4565b6121c281612b70565b840191505092915050565b60006121d88261282e565b6121e2818561284a565b93506121f28185602086016129a4565b6121fb81612b70565b840191505092915050565b60006122118261282e565b61221b818561285b565b935061222b8185602086016129a4565b80840191505092915050565b600061224460328361284a565b915061224f82612b81565b604082019050919050565b600061226760268361284a565b915061227282612bd0565b604082019050919050565b600061228a601c8361284a565b915061229582612c1f565b602082019050919050565b60006122ad60248361284a565b91506122b882612c48565b604082019050919050565b60006122d060198361284a565b91506122db82612c97565b602082019050919050565b60006122f3602c8361284a565b91506122fe82612cc0565b604082019050919050565b600061231660388361284a565b915061232182612d0f565b604082019050919050565b6000612339602a8361284a565b915061234482612d5e565b604082019050919050565b600061235c60298361284a565b915061236782612dad565b604082019050919050565b600061237f60208361284a565b915061238a82612dfc565b602082019050919050565b60006123a260318361284a565b91506123ad82612e25565b604082019050919050565b60006123c5602c8361284a565b91506123d082612e74565b604082019050919050565b60006123e860208361284a565b91506123f382612ec3565b602082019050919050565b600061240b60298361284a565b915061241682612eec565b604082019050919050565b600061242e602f8361284a565b915061243982612f3b565b604082019050919050565b600061245160218361284a565b915061245c82612f8a565b604082019050919050565b600061247460318361284a565b915061247f82612fd9565b604082019050919050565b6124938161298b565b82525050565b60006124a58285612206565b91506124b18284612206565b91508190509392505050565b60006020820190506124d26000830184612176565b92915050565b60006080820190506124ed6000830187612176565b6124fa6020830186612176565b612507604083018561248a565b81810360608301526125198184612194565b905095945050505050565b60006020820190506125396000830184612185565b92915050565b6000602082019050818103600083015261255981846121cd565b905092915050565b6000602082019050818103600083015261257a81612237565b9050919050565b6000602082019050818103600083015261259a8161225a565b9050919050565b600060208201905081810360008301526125ba8161227d565b9050919050565b600060208201905081810360008301526125da816122a0565b9050919050565b600060208201905081810360008301526125fa816122c3565b9050919050565b6000602082019050818103600083015261261a816122e6565b9050919050565b6000602082019050818103600083015261263a81612309565b9050919050565b6000602082019050818103600083015261265a8161232c565b9050919050565b6000602082019050818103600083015261267a8161234f565b9050919050565b6000602082019050818103600083015261269a81612372565b9050919050565b600060208201905081810360008301526126ba81612395565b9050919050565b600060208201905081810360008301526126da816123b8565b9050919050565b600060208201905081810360008301526126fa816123db565b9050919050565b6000602082019050818103600083015261271a816123fe565b9050919050565b6000602082019050818103600083015261273a81612421565b9050919050565b6000602082019050818103600083015261275a81612444565b9050919050565b6000602082019050818103600083015261277a81612467565b9050919050565b6000602082019050612796600083018461248a565b92915050565b60006127a66127b7565b90506127b28282612a09565b919050565b6000604051905090565b600067ffffffffffffffff8211156127dc576127db612b41565b5b6127e582612b70565b9050602081019050919050565b600067ffffffffffffffff82111561280d5761280c612b41565b5b61281682612b70565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006128718261298b565b915061287c8361298b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156128b1576128b0612ab4565b5b828201905092915050565b60006128c78261298b565b91506128d28361298b565b9250826128e2576128e1612ae3565b5b828204905092915050565b60006128f88261298b565b91506129038361298b565b92508282101561291657612915612ab4565b5b828203905092915050565b600061292c8261296b565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156129c25780820151818401526020810190506129a7565b838111156129d1576000848401525b50505050565b600060028204905060018216806129ef57607f821691505b60208210811415612a0357612a02612b12565b5b50919050565b612a1282612b70565b810181811067ffffffffffffffff82111715612a3157612a30612b41565b5b80604052505050565b6000612a458261298b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612a7857612a77612ab4565b5b600182019050919050565b6000612a8e8261298b565b9150612a998361298b565b925082612aa957612aa8612ae3565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f45524337323155524953746f726167653a2055524920717565727920666f722060008201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008201527f73206e6f74206f776e0000000000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b61303181612921565b811461303c57600080fd5b50565b61304881612933565b811461305357600080fd5b50565b61305f8161293f565b811461306a57600080fd5b50565b6130768161298b565b811461308157600080fd5b5056fea26469706673582212204715b60ed94566306d89f40aa12d0feef836733f6a61de83780dfbfe429a05ba64736f6c63430008010033";

export class ShopNFT__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShopNFT> {
    return super.deploy(name, symbol, overrides || {}) as Promise<ShopNFT>;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  attach(address: string): ShopNFT {
    return super.attach(address) as ShopNFT;
  }
  connect(signer: Signer): ShopNFT__factory {
    return super.connect(signer) as ShopNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShopNFTInterface {
    return new utils.Interface(_abi) as ShopNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShopNFT {
    return new Contract(address, _abi, signerOrProvider) as ShopNFT;
  }
}
