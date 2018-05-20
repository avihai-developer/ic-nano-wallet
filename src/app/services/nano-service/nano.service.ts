import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NanoService {

  private _seed;
  private _privateKey;
  private _publicKey;

  constructor() { }

    createNewWallet() {

    }

    getTransactionsList() {

    }

    getTransaction() {

    }

    sendTransaction() {

    }

    get seed() {
        return this._seed;
    }

    set seed(value) {
        this._seed = value;
    }

    get privateKey() {
        return this._privateKey;
    }

    set privateKey(value) {
        this._privateKey = value;
    }

    get publicKey() {
        return this._publicKey;
    }

    set publicKey(value) {
        this._publicKey = value;
    }
}
