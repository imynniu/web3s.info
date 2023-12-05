import { CiWallet } from "react-icons/ci";
import { useWeb3Modal } from "@web3modal/wagmi/react";
const LogoIn = () => {
  const { open, close } = useWeb3Modal();
  return (
    <div className="tooltip tooltip-bottom" data-tip="使用钱包登录">
      <button
        className="btn btn-ghost"
        onClick={() => open({ view: "Connect" })}
      >
        <CiWallet size={"full"} />
      </button>
    </div>
  );
};
export default LogoIn;
