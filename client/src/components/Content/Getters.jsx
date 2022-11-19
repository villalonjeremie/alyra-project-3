import { useRef } from "react";

function Getters({ proposal, proposals, voter, winner }) {
    const spanEle = useRef(null);

    return (
        <code>
          {` Proposal : `}
          <span className="secondary-color" ref={spanEle}>
            <strong>{proposal}</strong>
          </span>
          {` Proposals : `}
          <span className="secondary-color" ref={spanEle}>
            <strong>{proposals}</strong>
          </span>
          {` Voter : `}
          <span className="secondary-color" ref={spanEle}>
            <pre>hasVoted : {String(voter.hasVoted)} </pre>
            <pre>isRegistered : {String(voter.isRegistered)}</pre>
            <pre>votedProposalId : {String(voter.votedProposalId)}</pre>
          </span>
          {` Winner : `}
          <span className="secondary-color" ref={spanEle}>
            <strong>{winner}</strong>
          </span>
        </code>
      );
  }
  
  export default Getters;