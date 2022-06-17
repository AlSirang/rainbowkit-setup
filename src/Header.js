import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  return (
    <div className="nav">
      <div style={{ padding: 10, display: "flex", justifyContent: "flex-end" }}>
        <div>
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
