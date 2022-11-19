import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Mode from "./Mode";
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
  const { state } = useEth();
  const [mode, setMode] = useState("Admin");
  const [proposal, setProposal] = useState("");
  const [voter, setVoter] = useState("");
  const [status, setStatus] = useState("");
  const [winner, setWinner] = useState("");
  const [proposals, setAllProposals] = useState("");


  const content =
    <div className="containers">
      <Mode setMode = {setMode} />
      <br/>
    {
      mode === "Admin" ?
          <div className="admin-container">
            <h3>Admin Back Office</h3>
            <br/>
            <StatusBtns setStatus = {setStatus} />
            <Status status = {status} />
            <AddVoter />
          </div> : <></>

    }
    {
      mode === "Vote" ?
      <div className="voter-container">
        <div className="votes-session">
          <h3>Voter interface</h3>
          <ProposalBtns setAllProposals = {setAllProposals}/>
          <Proposal  />
          <Proposals  proposals = {proposals}/>
          <hr/>
          <VoterBtns setVoter = {setVoter} />
          <Voter voter = {voter} />
          <hr/>
          <Winner />
          <hr/>
          <GettersBtns setProposal = {setProposal} setAllProposals = {setAllProposals} setVoter = {setVoter} setWinner = {setWinner}  />
          <Getters proposal = {proposal} proposals = {proposals} voter = {voter} winner = {winner}  />
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


