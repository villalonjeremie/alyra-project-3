import { useState, useEffect } from "react";
import useEth from "../../contexts/EthContext/useEth";
 
function Voter() {
  const [eventValue, setEventValue] = useState("");
  const { state: { contract } } = useEth();
 
  useEffect(() => {
    (async function () {
        await contract.events.Voted({fromBlock:"earliest"})
        .on('data', event => {
          let lesevents = event.returnValues.proposalId;
          setEventValue(parseInt(lesevents));
        })          
        .on('changed', changed => console.log(changed))
        .on('error', err => console.log(err))
        .on('connected', str => console.log(str))
    })();
  }, [contract]);
 

  return (
    <>
    { eventValue > 0 ?
      <code>
        Vote Done ! Proposal Id selected :  {eventValue}
      </code>:<></>
    }
    </>
  );
}

export default Voter;