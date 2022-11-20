import useEth from "../../contexts/EthContext/useEth";
import { useState } from "react";

function ContractBtns({ addingStatus, addCurrentStatus }) {
  const { state: { contract, accounts } } = useEth();
  const [currentValue, setCurrentValue] = useState("");

  const startProposalsRegistering = async () => {
    try {
      await contract.methods.startProposalsRegistering().send({ from: accounts[0] });
      const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
      setCurrentValue(parseInt(value));
      console.log(parseInt(value));
      addCurrentStatus(parseInt(value));
    } catch(err) {
      const endIndex = err.message.search('error msg')

      if (endIndex >= 0) {
        throw err.message.substring(0, endIndex)
      }
    }
  };

  const endProposalsRegistering = async () => {
    try {
      await contract.methods.endProposalsRegistering().send({ from: accounts[0] });
      const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
      setCurrentValue(parseInt(value));
      addCurrentStatus(parseInt(value));
    } catch(err) {
        const endIndex = err.message.search('error msg')

        if (endIndex >= 0) {
          throw err.message.substring(0, endIndex)
        }
    }
  };

  const startVotingSession = async () => {
    try {
      await contract.methods.startVotingSession().send({ from: accounts[0] });
      const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
      setCurrentValue(parseInt(value));
      addCurrentStatus(parseInt(value));
    } catch(err) {
      const endIndex = err.message.search('error msg')

      if (endIndex >= 0) {
        throw err.message.substring(0, endIndex)
      }
    }
  };

  const endVotingSession = async () => {
    try {
      await contract.methods.endVotingSession().send({ from: accounts[0] });
      const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
      setCurrentValue(parseInt(value));
      addCurrentStatus(parseInt(value));
    } catch(err) {
      const endIndex = err.message.search('error msg')

      if (endIndex >= 0) {
        throw err.message.substring(0, endIndex)
      }
    }
  };

  const tallyVotes = async () => {
    try {
      await contract.methods.tallyVotes().send({ from: accounts[0] });
      const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
      setCurrentValue(parseInt(value));
      addCurrentStatus(parseInt(value));
    } catch(err) {
      const endIndex = err.message.search('error msg')

      if (endIndex >= 0) {
        throw err.message.substring(0, endIndex)
      }
    }
  };


  return (
    <div className="btns">
      { 
       currentValue === 0 || addingStatus === 0 ?
       <>
       <span>Change Status: </span>
       <button onClick={startProposalsRegistering}>
          Start proposals registering
        </button><br/></>
        : <></>
      }
      { currentValue === 1 || addingStatus === 1 ?
      <>
      <span>Change Status: </span>
      <button onClick={endProposalsRegistering}>
        End proposals registering
      </button><br/></>: <></>
      }
      { currentValue === 2 || addingStatus === 2 ?
      <>
      <span>Change Status: </span>
      <button onClick={startVotingSession}>
        Start voting session
      </button><br/></> : <></>
      }
      { currentValue === 3 || addingStatus === 3 ?
        <>
        <span>Change Status: </span>
        <button onClick={endVotingSession}>
          End voting session
        </button><br/></> : <></>
      }
      { currentValue === 4 || addingStatus === 4 ?
      <>
      <span>Change Status: </span>
      <button onClick={tallyVotes}>
        Tally votes
      </button><br/></> : <></>
      }
    </div>
  );
}

export default ContractBtns;
