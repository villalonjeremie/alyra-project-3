import { useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
 
function Status({ status }) {
  const [previousStatus, setPreviousValue] = useState("");
  const [newValue, setNewValue] = useState("");
  const { state: { contract } } = useEth("");
 
  useEffect(() => {
    (async function () {
        await contract.events.WorkflowStatusChange({fromBlock:"earliest"})
        .on('data', event => {
          let previousStatus = event.returnValues.previousStatus;
          let newStatus = event.returnValues.newStatus;
          setPreviousValue(getStatusName(previousStatus));
          setNewValue(getStatusName(newStatus));

        })          
        .on('changed', changed => console.log(changed))
        .on('error', err => console.log(err))
        .on('connected', str => console.log(str))
    })();
  }, [contract]);

  const getStatusName = (idEnumStatus) => {
    switch (idEnumStatus) {
        case "0":
          return "RegisteringVoters";
        case "1":
          return "ProposalsRegistrationStarted";
        case "2":
          return "ProposalsRegistrationEnded";
        case "3":
          return "VotingSessionStarted";
        case "4":
          return "VotingSessionEnded";
        case "5":
          return "VotesTallied";
        default:
          return "Undefined status";
    }
}

  return (
    <>
    { newValue.length !== 0 &&  newValue.length !== 0 ?
            <code>
            {`  Status changed to : `} {newValue}
           <br/>
            {`  Old States : `} {previousStatus}
          </code> : <></>
    }
  </>
  );
}

export default Status;
