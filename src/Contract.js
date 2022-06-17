import { useState } from "react";
import { useContractWrite } from "wagmi";
import NinfaERC721ABI from "./assets/NinfaERC721.abi.json";

const MARKETPLACE = "0xCf379150f4AbD485f9c7e24293E3b836Ee4b06F7";

const Contract = () => {
  const { isLoading, writeAsync } = useContractWrite(
    {
      addressOrName: "0x4b3F1b37D195D09f69b99175476E59759f2e9D2A",
      contractInterface: NinfaERC721ABI,
    },
    "setApprovalForAll",
    {
      args: [MARKETPLACE, true],
    }
  );

  const [isTxPending, setIsTxPending] = useState(false);
  const handleApprove = async () => {
    const res = await writeAsync();
    console.log({ res });
    setIsTxPending(true);

    const results = await res.wait();
    console.log({ results });
    setIsTxPending(false);
  };

  return (
    <>
      {isLoading ? (
        <div>loading....</div>
      ) : isTxPending ? (
        <h2> wait for transaction to complete</h2>
      ) : (
        <div>
          <h2> Approve Ninfa to manage your tokens</h2>
          <button className="button" onClick={handleApprove}>
            Approve for all
          </button>
        </div>
      )}
    </>
  );
};

export default Contract;
