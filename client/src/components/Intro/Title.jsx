import useEth from "../../contexts/EthContext/useEth";

function Title() {
  const { state: { accounts } } = useEth();

  return (
    <div className="welcome">
      <h1> Voting Dapp </h1>
      {accounts && accounts[0] && <pre>Address : {accounts[0]}</pre>}
    </div>
  );
}

export default Title;
