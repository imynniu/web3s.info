import { Link } from "react-router-dom";
import img1 from "../assets/images/001.jpg";
import img2 from "../assets/images/002.jpg";
const NotFund = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <img alt="daisy" src={img1} />
          </div>
          <div className="diff-item-2">
            <img alt="daisy" src={img2} />
          </div>
          <div className="diff-resizer"></div>
        </div>

        {/*  */}
        <div>
          <h1 className="text-5xl font-bold">Lost Direction!</h1>
          <p className="py-6 text-justify text-gray-600 indent-6">
            In a world illuminated by sunlight, there always exist dark corners.
            In the darkness, some children lose their way, parents lose their
            children, and the children lose their future. We need more people to
            light the way for these children to find their way home in an
            anonymous world.
          </p>
          <Link className="btn btn-primary" to={"home"}>
            go back & help{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFund;
