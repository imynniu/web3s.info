import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useSignMessage } from "wagmi";
import { useBalance } from "wagmi";
const WalletTest = () => {
  const { open, close } = useWeb3Modal();
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: "gm wagmi frens",
  });
  return (
    <div className="flex flex-col">
      <div>
        <button disabled={isLoading} onClick={() => signMessage()}>
          Sign message
        </button>
        {isSuccess && <div>Signature: {data}</div>}
        {isError && <div>Error signing message</div>}
      </div>
      <button
        onClick={() => {
          open({ view: "WhatIsAWallet" });
        }}
      >
        测试按钮-WhatIsAWallet
      </button>
      <button
        onClick={() => {
          open({ view: "Connect" });
        }}
      >
        测试按钮-Connect
      </button>
      <button
        onClick={() => {
          open({ view: "Account" });
        }}
      >
        测试按钮-Account
      </button>
      <button
        onClick={() => {
          open({ view: "All wallets" });
        }}
      >
        测试按钮-All wallets
      </button>
      <button
        onClick={() => {
          open({ view: "Networks" });
        }}
      >
        测试按钮-Networks
      </button>
      <button
        onClick={() => {
          open({ view: "WhatIsANetwork" });
        }}
      >
        测试按钮-WhatIsANetwork
      </button>
    </div>
  );
};
export default WalletTest;
