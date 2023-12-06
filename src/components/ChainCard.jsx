import { useNetwork } from "wagmi";
import { useBalance, useAccount } from "wagmi";

import Dropdown from "./Dropdown";
import { useWeb3Modal } from "@web3modal/wagmi/react";
const ChainCard = () => {
  const { open, close } = useWeb3Modal();
  const { chain } = useNetwork();
  const { address } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address: address,
  });

  return (
    <div className="card  bg-base-100 shadow-sm">
      <div className="flex flex-row gap-1 items-center mt-2 ml-3 indicator-center ">
        <span className="indicator-item badge badge-accent badge-xs"></span>
        <h2 className="card-title  text-gray-600 text-base ">{chain.name}</h2>
        <Dropdown></Dropdown>
      </div>

      <div className="card-body -mt-8">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Balance</div>
            <div className="stat-value text-2xl">
              {parseFloat(data?.formatted).toFixed(6)} {data?.symbol}
            </div>
            <div className="stat-desc">价值$ --- USD</div>
          </div>
        </div>

        <div className="  flex items-center justify-center  gap-6  mt-1 -mb-6">
          <button
            className="btn btn-sm btn-outline btn-success"
            onClick={() => open({ view: "Networks" })}
          >
            切换网络
          </button>
          <button
            className="btn btn-sm btn-outline btn-warning w-auto "
            onClick={() => open({ view: "Account" })}
            // onClick={() => disconnect()}
          >
            打开账户
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChainCard;
