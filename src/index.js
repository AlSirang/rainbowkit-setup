import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "@rainbow-me/rainbowkit/styles.css";

import {
  apiProvider,
  configureChains,
  // connectorsForWallets,
  getDefaultWallets,
  // wallet,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, createClient, WagmiProvider } from "wagmi";

const { chains, provider } = configureChains(
  [chain.rinkeby],
  [
    apiProvider.alchemy(process.env.REACT_APP_ALCHEMY_ID),
    apiProvider.infura(process.env.REACT_APP_INFURA_ID),

    apiProvider.fallback(),
  ]
);

console.log(chains);

const { connectors } = getDefaultWallets({
  appName: "Ninfa-Test",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiProvider client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <App />
      </RainbowKitProvider>
    </WagmiProvider>
  </React.StrictMode>
);
