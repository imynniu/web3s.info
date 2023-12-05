const Dorpdown = () => {
  return (
    <div className="dropdown dropdown-end ">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-circle btn-ghost btn-xs text-info"
      >
        <svg
          tabIndex={0}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-4 h-4 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <div
        tabIndex={0}
        className="card compact dropdown-content  z-[1] shadow bg-base-100 rounded-box w-48"
      >
        <div tabIndex={0} className="card-body">
          <p>目前支持的网络有限，余额查询可能不准确</p>
        </div>
      </div>
    </div>
  );
};
export default Dorpdown;
