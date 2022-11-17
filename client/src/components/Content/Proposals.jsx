import { useRef, useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
 
function Proposals({ proposals }) {
  const spanEle = useRef(null);
  const [EventValue, setEventValue] = useState("");
  const [oldEvents, setOldEvents] = useState();
  const { state: { contract } } = useEth();
 
  useEffect(() => {
    (async function () {
       let oldEvents= await contract.getPastEvents('ProposalRegistered', {
          fromBlock: 0,
          toBlock: 'latest'
        });
        let oldies=[];
        oldEvents.forEach(event => {
            oldies.push(event.returnValues._val);
        });
        setOldEvents(oldies);
 
        await contract.events.ProposalRegistered({fromBlock:"earliest"})
        .on('data', event => {
          let lesevents = event.returnValues._val;
          setEventValue(lesevents);
        })          
        .on('changed', changed => console.log(changed))
        .on('error', err => console.log(err))
        .on('connected', str => console.log(str))
    })();
  }, [contract])
 

  return (
    <code>
      {` Proposals : `}
      <span className="secondary-color" ref={spanEle}>
        <strong>{proposals}</strong>
      </span>
     {`  Events arriving: `} {EventValue} {`
    
     Old events: `} {oldEvents}
    </code>
  );
}

export default Proposals;
