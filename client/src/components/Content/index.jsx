import {useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Status from "./Status";
import StatusBtns from "./StatusBtns";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";
import AddVoter from "./AddVoter";
import Voter from "./Voter";
import VoterBtns from "./VoterBtns";
import Proposal from "./Proposal";
import Proposals from "./Proposals";
import ProposalBtns from "./ProposalBtns";
import Winner from "./Winner";
import Getters from "./Getters";
import GettersBtns from "./GettersBtns";

function Content() {
  const { state: { contract, accounts } } = useEth();
  const { state } = useEth();
  const [proposal, setProposal] = useState("");
  const [voter, setVoter] = useState("");
  const [addingStatus, addCurrentStatus] = useState("");
  const [winner, setWinner] = useState("");
  const [proposals, setAllProposals] = useState("");
  const [isOwner, setIsOwner] = useState("");

  useEffect(() => {
    (async function () {
      if (contract) {
        const owner = await contract.methods.owner().call({ from: accounts[0] });
        const isOwner = owner === accounts[0] ? true : false;
        setIsOwner(isOwner);
        
        const currentStatus = await contract.methods.workflowStatus().call({ from: accounts[0] });
        addCurrentStatus(parseInt(currentStatus))
      }
    })();
  }, [contract, accounts, addCurrentStatus]);

  const content =
    <div className="containers">
    {
      isOwner ?
          <div className="admin-container">
            <h3>Admin Back Office</h3>
            <br/>
            <StatusBtns addingStatus = {addingStatus} addCurrentStatus = {addCurrentStatus} />
            <br/>
            <Status />
            <br/>
            <AddVoter addingStatus = {addingStatus} />
          </div> : <></>
    }
    {
      !isOwner ?
      <div className="voter-container">
        <div className="votes-session">
          { addingStatus === 1 ?
            <><h3>Adding Proposals</h3><br/><ProposalBtns setAllProposals = {setAllProposals}/><br/><Proposal /><hr/></> : <></>
          }
          { addingStatus === 3 ?
            <><h3>Voting</h3><br/><code><Proposals /></code><br/><VoterBtns setVoter={setVoter} /><br/><Voter voter={voter} /><br/><hr/></> : <></>
          }
          { addingStatus === 5 ?
            <><h3>The Winner with</h3><br/><Winner winner = {winner}/><hr/></> : <></>
          }
          <h3>Getting more informations</h3>
          <br/>
            <GettersBtns setProposal = {setProposal} setAllProposals = {setAllProposals} setVoter = {setVoter} setWinner = {setWinner} />
            <Getters proposal = {proposal} proposals = {proposals} voter = {voter} winner = {winner} />
        </div>
      </div> : <></>
    }
    </div>;

  return (
    <div className="demo">
      {
        !state.artifact ? <NoticeNoArtifact /> :
          !state.contract ? <NoticeWrongNetwork /> :
            content
      }
    </div>  
  );
}

export default Content;


