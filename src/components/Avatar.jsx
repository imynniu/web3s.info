import Drawer from "../module/Drawer";

const Avatar = ({ dataTip }) => {
  return (
    <label
      className={`tooltip  tooltip-bottom `}
      htmlFor="my-drawer-4"
      data-tip={dataTip}
    >
      <div className="avatar ">
        <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ring-emerald-500 ">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </label>
  );
};
export default Avatar;
