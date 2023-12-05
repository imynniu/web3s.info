import { useAccount, useConnect } from "wagmi";
import Address from "./Address";

const UserInfoCard = () => {
  const { address, isConnecting, isDisconnected } = useAccount(); //获取账户地址
  // const { data, isError, isLoading } = useBalance({
  //   address: address,
  // });
  return (
    <div>
      <Address address={address} />
      {/* {data} */}
    </div>
  );
};
export default UserInfoCard;
