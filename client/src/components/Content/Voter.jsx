//import { useState } from "react";
//import useEth from "../../contexts/EthContext/useEth";
 
function Voter({ voter }) {
  //const spanEle = useRef(null);
 // const [EventValue, setEventValue] = useState("");
 // const [oldEvents, setOldEvents] = useState();
//  const { state: { contract } } = useEth();
 
  /*
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
 */

  return (
    <code>
    
        <code>
            <pre>hasVoted : {String(voter.hasVoted)} </pre>
            <pre>isRegistered : {String(voter.isRegistered)}</pre>
            <pre>votedProposalId : {String(voter.votedProposalId)}</pre>
        </code> 
    
    </code>
  );
}

export default Voter;