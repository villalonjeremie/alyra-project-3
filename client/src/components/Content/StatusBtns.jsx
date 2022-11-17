import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setValue }) {
  const { state: { contract, accounts } } = useEth();

  const startProposalsRegistering = async () => {
    await contract.methods.startProposalsRegistering().call({ from: accounts[0] });
  };

  const endProposalsRegistering = async () => {
    await contract.methods.endProposalsRegistering().call({ from: accounts[0] });
  };

  const startVotingSession = async () => {
    await contract.methods.startVotingSession().call({ from: accounts[0] });
  };

  const endVotingSession = async () => {
    await contract.methods.endVotingSession().call({ from: accounts[0] });
  };

  const tallyVotes = async () => {
    await contract.methods.tallyVotes().call({ from: accounts[0] });
  };


  return (
    <div className="btns">
      <button onClick={startProposalsRegistering}>
        startProposalsRegistering()
      </button>
      <br/>
      <button onClick={endProposalsRegistering}>
        endProposalsRegistering()
      </button>
      <br/>
      <button onClick={startVotingSession}>
        startVotingSession()
      </button>
      <br/>
      <button onClick={endVotingSession}>
        endVotingSession()
      </button>
      <br/>
      <button onClick={tallyVotes}>
        tallyVotes()
      </button>

    </div>
  );
}

export default ContractBtns;
