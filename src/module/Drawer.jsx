import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import ChainCard from "../components/ChainCard";
import UserInfoCard from "../components/UserInfoCard";
import { useAccount, useConnect } from "wagmi";
import { useDisconnect } from "wagmi";

const Drawer = () => {
  const { connector: activeConnector, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        {/* <label htmlFor="my-drawer-4">Open drawer</label> */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-2 py-6">
          {/* Sidebar content here */}
          <Avatar />
          {isConnected && <UserInfoCard />}
          {isConnected && <ChainCard />}
          {/* <li>
            <a>Sidebar Item 1</a>
          </li> */}

          <button
            className="btn btn-neutral btn-wide btn-sm"
            onClick={() => disconnect()}
            to={"home"}
          >
            {isConnected ? "退出登录" : "重新连接"}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Drawer;
