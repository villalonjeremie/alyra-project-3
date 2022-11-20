import { useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
 
function Status() {
  const [newValue, setNewValue] = useState("");
  const { state: { contract } } = useEth("");
 
  useEffect(() => {
    (async function () {
        await contract.events.WorkflowStatusChange({fromBlock:"earliest"})
        .on('data', event => {
          const newStatus = event.returnValues.newStatus;
          setNewValue(getStatusName(parseInt(newStatus)));
        })          
        .on('changed', changed => console.log(changed))
        .on('error', err => console.log(err));
    })();
  }, [contract]);

  const getStatusName = (idEnumStatus) => {
    switch (idEnumStatus) {
        case 0:
          return "RegisteringVoters";
        case 1:
          return "ProposalsRegistrationStarted";
        case 2:
          return "ProposalsRegistrationEnded";
        case 3:
          return "VotingSessionStarted";
        case 4:
          return "VotingSessionEnded";
        case 5:
          return "VotesTallied";
        default:
          return "Undefined status";
    }
}

  return (
    <>
    { newValue.length !== 0 &&  newValue.length !== 0 ?
      <code>
        <span>Status changed to : {newValue}</span>
       </code> : <></>
    }
  </>
  );
}

export default Status;
