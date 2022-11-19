import {useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
 
function Proposal() {
  const [EventValue, setEventValue] = useState("");
  const { state: { contract } } = useEth();
 
  useEffect(() => {
    (async function () {
        await contract.events.ProposalRegistered({fromBlock:"earliest"})
        .on('data', event => {
          let lesevents = event.returnValues.proposalId;
          setEventValue(lesevents);
        })          
        .on('changed', changed => console.log(changed))
        .on('error', err => console.log(err))
        .on('connected', str => console.log(str))
    })();
  }, [contract])

  return (
    <code>
     {`  ProposalId Added: `} {EventValue}
    </code>
  );
}

export default Proposal;
