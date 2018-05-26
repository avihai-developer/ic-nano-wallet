import {Injectable} from '@angular/core';

declare var nacl: any;

@Injectable({
    providedIn: 'root'
})

export class NanoService {

    private _seed;
    private _privateKey;
    private _publicKey;

    constructor() {
    }

    createNewWallet() {
        const wallet = {
            seed: '',
            privateKey: '',
            publicKey: ''
        };
        wallet.seed = this.getNewSeed();
        wallet.privateKey = this.getPrivateKeyFromSeed(wallet.seed);
        wallet.publicKey = this.getPublicKeyFromPrivateKey(wallet.privateKey);
        console.log('wallet', wallet);
        return wallet;
    }

    setWallet(seed, privateKey, publicKey) {
        this.seed = seed;
        this.privateKey = privateKey;
        this.publicKey = publicKey;
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

    getNewSeed() {
        return '';
    }

    getPrivateKeyFromSeed(seed) {
        return '';
    }

    getPublicKeyFromPrivateKey(privateKey) {
        return '';
    }

}
