import { useState } from "react";

import { MdCopyAll } from "react-icons/md";
import { IoCheckmarkDone } from "react-icons/io5";

const Address = ({ address }) => {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div
      className="flex flex-row items-center justify-center gap-2 bg-gray-300 rounded-md mx-10 cursor-pointer tooltip  tooltip-bottom"
      data-tip={isCopied ? "copied" : "copy"}
      onClick={() => {
        setIsCopied(true);
        navigator.clipboard.writeText(address);
      }}
    >
      <p className=" text-sm text-gray-900 tracking-wider ">{`${address.slice(
        0,
        6
      )}......${address.slice(-6)}`}</p>
      {isCopied ? <IoCheckmarkDone size={"18"} /> : <MdCopyAll size={"18"} />}
    </div>
  );
};
export default Address;
