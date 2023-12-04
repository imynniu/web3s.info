import {
  useAccount,
  useTransaction,
  useWaitForTransaction,
  useEnsName,
} from "wagmi";
const HooksTest = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  //   const { data, isError, isLoading } = useBalance({
  //     address: "0xA0Cf798816D4b9b9866b5330EEa46a18382f251e",
  //   });
  const { data, isError, isLoading } = useWaitForTransaction({
    hash: "0x5c504ed432cb51138bcf09aa5e8a410dd4a1e204ef84bfed1be16dfba1b22060",
  });

  if (isLoading) return <div>Processing…</div>;
  if (isError) return <div>Transaction error</div>;

  return (
    <div className="flex flex-col">
      <div>{address}</div>
      <div>Transaction: {JSON.stringify(data)}</div>
    </div>
  );
};
export default HooksTest;
