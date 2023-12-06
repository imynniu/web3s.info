import ThemeController from "../components/ThemeController";
import Avatar from "../components/Avatar.jsx";
import LogoIn from "../components/LogoIn.jsx";
import { useAccount } from "wagmi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { address, isConnecting, isDisconnected, isConnected } = useAccount();
  return (
    <div className="navbar bg-base-100 sticky top-0  glass">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" to={"/"}>
          wStar
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <div className="dropdown dropdown-hover  dropdown-bottom">
              <div tabIndex={0}>Project</div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"project/project1"}>Project 1</Link>
                </li>
                <li>
                  <Link to={"project/project2"}>Project 2</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to={"about"}>About us</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end  gap-4 mx-2">
        <ThemeController />
        {isConnected ? <Avatar dataTip={"查看账户信息"} /> : <LogoIn />}
      </div>
    </div>
  );
};
export default Navbar;
