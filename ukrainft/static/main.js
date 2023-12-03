import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { useAccount } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '395f24eb3bbe08fb85180e3cbf491080'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

const App = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ConnectButton />
    </WagmiConfig>
  )
}
export default App;

export function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal();

  return (
    <>
    <h1>Connect</h1>
      <button onClick={() => open()}>Open Connect Modal</button>;
      <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button>;
    </>
  )
}
