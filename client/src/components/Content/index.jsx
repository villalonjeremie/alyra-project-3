import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
import Mode from "./Mode";
import Status from "./Status";
import StatusBtns from "./StatusBtns";
import NoticeNoArtifact from "./NoticeNoArtifact";
import NoticeWrongNetwork from "./NoticeWrongNetwork";
import AddVoter from "./AddVoter";
import Votes from "./Votes";
import Proposals from "./Proposals";


function Content() {
  const { state } = useEth();
  const [mode, setMode] = useState("Admin");
  const [proposals, setProposals] = useState("");


  const content =
    <div className="containers">
      <Mode setMode = {setMode} />
      <br/>
    {
      mode === "Admin" ?
          <div className="admin-container">
            <h3>Admin Back Office</h3>
            <br/>
            <StatusBtns />
            <Status />
            <AddVoter />
          </div> : <></>

    }
    {
      mode === "Vote" ?
      <div className="voter-container">
        <div className="votes-session">
          <h3>Voting session</h3>
          <Proposals proposals = {proposals} />
          <ProposalsBtns setProposals = {setProposals} />

          <Votes />
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


