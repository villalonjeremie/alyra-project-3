function Getters({ proposal, proposals, voter, winner }) {
    return (
        <>
          { proposal.length !== 0  ?
            <code>
              <div className="proposal-getters">
                <strong>Proposal: </strong>
                <span>{proposal.description}</span>
              </div>
            </code>: <></>
          }
          { proposals.length !== 0 ?
            <code>
                <div className="proposals">
                <strong>Proposals : </strong>
                {Object.values(proposals).map((value, index) => {
                  return (
                    <div key={index + 1} >
                      <span> {index + 1}. {value.description}</span>
                    </div>
                  );
                  })}
                </div>
            </code>
            : <></>
          }
          { voter.length !== 0 ?
            <code>
              <div className="proposal-getters">
                <strong>Voter: </strong>
                  <div className="has-voted">
                    <span> hasVoted: {String(voter.hasVoted)}</span>
                  </div>
                  <div className="is-registered" >
                    <span> isRegistered: {String(voter.isRegistered)}</span>
                  </div>
                  <div className="voted-proposal-id">
                    <span> votedProposalId: {String(voter.votedProposalId)}</span>
                  </div>
                </div>
              </code>: <></>
          }
          { winner.length !== 0 ?
              <code>
                {` Proposal Winner is : `}
                      <strong>{winner.description}</strong>
              </code>:<></>
          }
        </>
      );
  }
  
  export default Getters;