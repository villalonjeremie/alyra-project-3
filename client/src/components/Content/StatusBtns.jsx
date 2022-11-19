import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setStatus }) {
  const { state: { contract, accounts } } = useEth();

  
  const startProposalsRegistering = async () => {
    await contract.methods.startProposalsRegistering().send({ from: accounts[0] });
    const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
    setStatus(value);
  };

  const endProposalsRegistering = async () => {
    await contract.methods.endProposalsRegistering().send({ from: accounts[0] });
    const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
    setStatus(value);
  };

  const startVotingSession = async () => {
    await contract.methods.startVotingSession().send({ from: accounts[0] });
    const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
    setStatus(value);
  };

  const endVotingSession = async () => {
    await contract.methods.endVotingSession().send({ from: accounts[0] });
    const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
    setStatus(value);
  };

  const tallyVotes = async () => {
    await contract.methods.tallyVotes().send({ from: accounts[0] });
    const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
    setStatus(value);
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
