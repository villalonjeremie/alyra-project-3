import useEth from "../../contexts/EthContext/useEth";
import { useEffect, useState } from "react";

function ContractBtns({ setStatus, addCurrentStatus }) {
  const { state: { contract, accounts } } = useEth();
  const [currentValue, setCurrentValue] = useState("");

  useEffect(() => {
    (async function () {
          const currentStatus = await contract.methods.workflowStatus().call({ from: accounts[0] });
          setCurrentValue(parseInt(currentStatus));
          addCurrentStatus(parseInt(currentStatus))
    })();
  }, [contract, accounts, addCurrentStatus  ]);
  
  const startProposalsRegistering = async () => {
    await contract.methods.startProposalsRegistering().send({ from: accounts[0] });
    const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
    setCurrentValue(parseInt(value));
    setStatus(value);
  };

  const endProposalsRegistering = async () => {
    await contract.methods.endProposalsRegistering().send({ from: accounts[0] });
    const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
    setCurrentValue(parseInt(value));
    setStatus(value);
  };

  const startVotingSession = async () => {
    await contract.methods.startVotingSession().send({ from: accounts[0] });
    const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
    setCurrentValue(parseInt(value));
    setStatus(value);
  };

  const endVotingSession = async () => {
    await contract.methods.endVotingSession().send({ from: accounts[0] });
    const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
    setCurrentValue(parseInt(value));
    setStatus(value);
  };

  const tallyVotes = async () => {
    await contract.methods.tallyVotes().send({ from: accounts[0] });
    const value = await contract.methods.workflowStatus().call({ from: accounts[0] });
    setCurrentValue(parseInt(value));
    setStatus(value);
  };


  return (
    <div className="btns">
      { 
       <><button onClick={startProposalsRegistering}>
          Start proposals registering
        </button><br/></> 
      }
      <br/>
      { currentValue === 1 ?
      <><button onClick={endProposalsRegistering}>
        End proposals registering
      </button><br/></>: <></>
      }
      { currentValue === 2 ?
      <><button onClick={startVotingSession}>
        Start voting session
      </button><br/></> : <></>
      }
      <br/>
      { currentValue === 3 ?
        <><button onClick={endVotingSession}>
          End voting session
        </button><br/></> : <></>
      }
      <br/>
      { currentValue === 4 ?
      <><button onClick={tallyVotes}>
        Tally votes
      </button><br/></> : <></>
      }
    </div>
  );
}

export default ContractBtns;
