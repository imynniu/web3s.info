import { useEffect } from "react";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet } from "viem/chains";

import { themeChange } from "theme-change";

import Drawer from "./module/Drawer.jsx";
import Router from "./router.jsx/index.jsx";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "5bee67266ed902fd9d745ddc96495e2d";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  // url: "https://web3modal.com",
  // icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <WagmiConfig config={wagmiConfig}>
      <Router />

      <Drawer></Drawer>
      {/* <w3m-button label="钱包" /> */}
    </WagmiConfig>
  );
}

export default App;
