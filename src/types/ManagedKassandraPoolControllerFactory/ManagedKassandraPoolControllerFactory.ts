// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class KassandraPoolCreated extends ethereum.Event {
  get params(): KassandraPoolCreated__Params {
    return new KassandraPoolCreated__Params(this);
  }
}

export class KassandraPoolCreated__Params {
  _event: KassandraPoolCreated;

  constructor(event: KassandraPoolCreated) {
    this._event = event;
  }

  get caller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get vaultPoolId(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get pool(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get poolController(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get whitelist(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get isPrivatePool(): boolean {
    return this._event.parameters[5].value.toBoolean();
  }
}

export class KassandraPoolCreatedTokens extends ethereum.Event {
  get params(): KassandraPoolCreatedTokens__Params {
    return new KassandraPoolCreatedTokens__Params(this);
  }
}

export class KassandraPoolCreatedTokens__Params {
  _event: KassandraPoolCreatedTokens;

  constructor(event: KassandraPoolCreatedTokens) {
    this._event = event;
  }

  get vaultPoolId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get tokenName(): string {
    return this._event.parameters[1].value.toString();
  }

  get tokenSymbol(): string {
    return this._event.parameters[2].value.toString();
  }

  get tokens(): Array<Address> {
    return this._event.parameters[3].value.toAddressArray();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ManagedKassandraPoolControllerFactory extends ethereum.SmartContract {
  static bind(address: Address): ManagedKassandraPoolControllerFactory {
    return new ManagedKassandraPoolControllerFactory(
      "ManagedKassandraPoolControllerFactory",
      address,
    );
  }

  getAssetManager(): Address {
    let result = super.call(
      "getAssetManager",
      "getAssetManager():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_getAssetManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getAssetManager",
      "getAssetManager():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAuthorizedManagers(): Address {
    let result = super.call(
      "getAuthorizedManagers",
      "getAuthorizedManagers():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_getAuthorizedManagers(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getAuthorizedManagers",
      "getAuthorizedManagers():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getKassandraRules(): Address {
    let result = super.call(
      "getKassandraRules",
      "getKassandraRules():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_getKassandraRules(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getKassandraRules",
      "getKassandraRules():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getManagedPoolFactory(): Address {
    let result = super.call(
      "getManagedPoolFactory",
      "getManagedPoolFactory():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_getManagedPoolFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getManagedPoolFactory",
      "getManagedPoolFactory():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPrivateInvestors(): Address {
    let result = super.call(
      "getPrivateInvestors",
      "getPrivateInvestors():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_getPrivateInvestors(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getPrivateInvestors",
      "getPrivateInvestors():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getProxyInvest(): Address {
    let result = super.call("getProxyInvest", "getProxyInvest():(address)", []);

    return result[0].toAddress();
  }

  try_getProxyInvest(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getProxyInvest",
      "getProxyInvest():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getProxyProviderTransfer(): Address {
    let result = super.call(
      "getProxyProviderTransfer",
      "getProxyProviderTransfer():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_getProxyProviderTransfer(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getProxyProviderTransfer",
      "getProxyProviderTransfer():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getSwapProvider(): Address {
    let result = super.call(
      "getSwapProvider",
      "getSwapProvider():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_getSwapProvider(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getSwapProvider",
      "getSwapProvider():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getVault(): Address {
    let result = super.call("getVault", "getVault():(address)", []);

    return result[0].toAddress();
  }

  try_getVault(): ethereum.CallResult<Address> {
    let result = super.tryCall("getVault", "getVault():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getWETH(): Address {
    let result = super.call("getWETH", "getWETH():(address)", []);

    return result[0].toAddress();
  }

  try_getWETH(): ethereum.CallResult<Address> {
    let result = super.tryCall("getWETH", "getWETH():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isPoolFromFactory(pool: Address): boolean {
    let result = super.call(
      "isPoolFromFactory",
      "isPoolFromFactory(address):(bool)",
      [ethereum.Value.fromAddress(pool)],
    );

    return result[0].toBoolean();
  }

  try_isPoolFromFactory(pool: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isPoolFromFactory",
      "isPoolFromFactory(address):(bool)",
      [ethereum.Value.fromAddress(pool)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  kassandraAumFeePercentage(): BigInt {
    let result = super.call(
      "kassandraAumFeePercentage",
      "kassandraAumFeePercentage():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_kassandraAumFeePercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "kassandraAumFeePercentage",
      "kassandraAumFeePercentage():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CreateCall extends ethereum.Call {
  get inputs(): CreateCall__Inputs {
    return new CreateCall__Inputs(this);
  }

  get outputs(): CreateCall__Outputs {
    return new CreateCall__Outputs(this);
  }
}

export class CreateCall__Inputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get poolParams(): CreateCallPoolParamsStruct {
    return changetype<CreateCallPoolParamsStruct>(
      this._call.inputValues[0].value.toTuple(),
    );
  }

  get settingsParams(): CreateCallSettingsParamsStruct {
    return changetype<CreateCallSettingsParamsStruct>(
      this._call.inputValues[1].value.toTuple(),
    );
  }

  get feesSettings(): CreateCallFeesSettingsStruct {
    return changetype<CreateCallFeesSettingsStruct>(
      this._call.inputValues[2].value.toTuple(),
    );
  }

  get joinParams(): CreateCallJoinParamsStruct {
    return changetype<CreateCallJoinParamsStruct>(
      this._call.inputValues[3].value.toTuple(),
    );
  }

  get salt(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class CreateCall__Outputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get pool(): Address {
    return this._call.outputValues[0].value.toAddress();
  }

  get poolController(): Address {
    return this._call.outputValues[1].value.toAddress();
  }
}

export class CreateCallPoolParamsStruct extends ethereum.Tuple {
  get name(): string {
    return this[0].toString();
  }

  get symbol(): string {
    return this[1].toString();
  }

  get isPrivatePool(): boolean {
    return this[2].toBoolean();
  }

  get whitelist(): Address {
    return this[3].toAddress();
  }

  get amountsIn(): Array<BigInt> {
    return this[4].toBigIntArray();
  }
}

export class CreateCallSettingsParamsStruct extends ethereum.Tuple {
  get tokens(): Array<Address> {
    return this[0].toAddressArray();
  }

  get normalizedWeights(): Array<BigInt> {
    return this[1].toBigIntArray();
  }

  get swapFeePercentage(): BigInt {
    return this[2].toBigInt();
  }

  get swapEnabledOnStart(): boolean {
    return this[3].toBoolean();
  }

  get mustAllowlistLPs(): boolean {
    return this[4].toBoolean();
  }

  get managementAumFeePercentage(): BigInt {
    return this[5].toBigInt();
  }

  get aumFeeId(): BigInt {
    return this[6].toBigInt();
  }
}

export class CreateCallFeesSettingsStruct extends ethereum.Tuple {
  get feesToManager(): BigInt {
    return this[0].toBigInt();
  }

  get feesToReferral(): BigInt {
    return this[1].toBigInt();
  }
}

export class CreateCallJoinParamsStruct extends ethereum.Tuple {
  get tokenIn(): Address {
    return this[0].toAddress();
  }

  get amountIn(): BigInt {
    return this[1].toBigInt();
  }

  get datas(): Array<Bytes> {
    return this[2].toBytesArray();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get factory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get privateInvestors(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get authorizationContract(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get vault(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get rules(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get assetManagerAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get proxyInvest(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get swapProvider(): Address {
    return this._call.inputValues[7].value.toAddress();
  }

  get proxyProviderTransfer(): Address {
    return this._call.inputValues[8].value.toAddress();
  }

  get weth(): Address {
    return this._call.inputValues[9].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}