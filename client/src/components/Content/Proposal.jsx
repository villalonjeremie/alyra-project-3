import {useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
 
function Proposal() {
  const [eventValue, setEventValue] = useState("");
  const { state: { contract } } = useEth();
 
  useEffect(() => {
    (async function () {
        await contract.events.ProposalRegistered({fromBlock:"earliest"})
        .on('data', event => {
          const eventId = event.returnValues.proposalId;
          setEventValue(eventId);
        })          
        .on('changed', changed => console.log(changed))
        .on('error', err => console.log(err))
        .on('connected', str => console.log(str))
    })();
  }, [contract, setEventValue])

  return (
    <>
    { eventValue.length !== 0 ?
      <code>
        <div className="proposal">
          <span> ProposalId Added: {eventValue}</span> 
        </div>
      </code> : <></>
    }
    </>
  );
}

export default Proposal;
