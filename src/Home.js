import { useConnect } from "wagmi";
import Contract from "./Contract";

const Home = () => {
  const { error, isConnecting, isConnected } = useConnect();

  return (
    <div className="home">
      {!isConnected && <div>Connect your Wallet </div>}
      {isConnecting && <div>connecting...</div>}
      {isConnected && <Contract />}
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default Home;
