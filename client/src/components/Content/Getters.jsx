import Proposals from "./Proposals";
import Winner from "./Winner";

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
              <Proposals proposals={proposals} />
            </code> : <></>
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
              <Winner winner = {winner} />
            </code>: <></>
          }
        </>
      );
  }
  
  export default Getters;