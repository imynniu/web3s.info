import { Link } from "react-router-dom";
import bg from "../assets/images/index_bg.png";
import { GiBatMask } from "react-icons/gi";
const Index = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl  ">
            <div className="indicator">
              <h1 className="mb-5 indicator text-5xl font-bold flex flex-row items-center justify-center ">
                你好 陌生人{" "}
              </h1>
              <GiBatMask size={24} className="text-rose-600 indicator-item" />
            </div>

            <p className="mb-5 text-justify indent-8  ">
              阳光一直照耀着这个地球，但是这个世界依然存在黑暗的角落。迫于某些原因，我们无法割舍当前的身份信息去改变它，因此我们需要匿名世界去保护我们的信息，让我们放手去照亮这些黑暗的角落。或许，区块链正是我们需要的武器，区块链的世界严格遵循我们共识的法则，使我们有了可以信任的规则，而不是一些人的承若。
            </p>

            <p className="mb-5 text-justify indent-8 tracking-tight leading-tight">
              The sunshine has been shining on this earth, but there are still
              dark corners in this world. Due to certain reasons, we cannot
              abandon our current identity information to change it. Therefore,
              we need an anonymous world to protect our information and let us
              let go to illuminate these dark corners. Perhaps blockchain is the
              weapon we need, and the world of blockchain strictly follows the
              principles of our consensus, giving us trustworthy rules rather
              than the promises of some people.
            </p>
            <Link
              className="btn btn-primary skeleton bg-indigo-600"
              to={"home"}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
