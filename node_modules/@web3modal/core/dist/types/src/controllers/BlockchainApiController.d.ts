import type { BlockchainApiTransactionsRequest, BlockchainApiTransactionsResponse, BlockchainApiIdentityRequest, BlockchainApiIdentityResponse } from '../utils/TypeUtil.js';
export declare const BlockchainApiController: {
    fetchIdentity({ caipChainId, address }: BlockchainApiIdentityRequest): Promise<BlockchainApiIdentityResponse>;
    fetchTransactions({ account, projectId, cursor }: BlockchainApiTransactionsRequest): Promise<BlockchainApiTransactionsResponse>;
};
