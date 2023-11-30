import type { WcWallet } from './TypeUtil.js';
export declare const StorageUtil: {
    setWalletConnectDeepLink({ href, name }: {
        href: string;
        name: string;
    }): void;
    getWalletConnectDeepLink(): any;
    deleteWalletConnectDeepLink(): void;
    setWeb3ModalRecent(wallet: WcWallet): void;
    getRecentWallets(): WcWallet[];
    setConnectedWalletImageUrl(imageUrl: string): void;
    getConnectedWalletImageUrl(): string | null | undefined;
};
