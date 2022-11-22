import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function GettersBtns({ setProposal, setAllProposals, setVoter, setWinner }) {
  const { state: { contract, accounts, web3 } } = useEth();
  const [inputAddress, setInputAddress] = useState("");
  const [inputId, setIdValue] = useState("");

  const handleIdChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
        setIdValue(e.target.value);
    }
  };

  const handleAddressChange = e => {
    setInputAddress(e.target.value);
  };

  const getWinner = async () => { 
    setProposal("");
    setVoter("");
    setAllProposals("");
    const i = await contract.methods.winningProposalID().call({ from: accounts[0] });
    const proposalWinner = await contract.methods.getOneProposal(i).call({ from: accounts[0] });
    setWinner(proposalWinner);
   };

  const readAllProposal = async () => {
     setProposal("");
     setVoter("");
     setWinner("");
      var proposals = [], i = 0, error = false;
        while ( error === false ) {
          ++i;
          try {
            const proposal = await contract.methods.getOneProposal(i).call({ from: accounts[0] });
            proposals.push(proposal);
            
          } catch (err) {
            error = true;
            break;
          }
        }
    setAllProposals(proposals);
  };

  const readOneProposal = async () => {
    setWinner("");
    setVoter("");
    setAllProposals("");
    if (inputId === "") {
        alert("Please enter an Id to write.");
        return;
      }

    const value = await contract.methods.getOneProposal(inputId).call({ from: accounts[0] });
    setProposal(value);
  };

  const getVoter = async () => {
    setProposal("");
    setWinner("");
    setAllProposals("");
    if (!web3.utils.isAddress(inputAddress)) {
      alert("invalid address")
    }
    
    const voter = await contract.methods.getVoter(inputAddress).call({ from: accounts[0] });
    setVoter(voter);
  };

  return (
    <div className="btns">
        <div className="btn-input">
          <input
              type="text"
              placeholder="idProposal"
              value={inputId}
              onChange={handleIdChange}
          />
          <button onClick={readOneProposal} className="input-btn">
              Get Proposal by Id
          </button>
          </div>
          <div className="btn-input">
          <input
            type="text"
            placeholder="address"
            value={inputAddress}
            onChange={handleAddressChange}
            />
          <button onClick={getVoter} className="input-btn">
              Get Voter
          </button>
        </div>
        <br/>
        <div className="btn">
          <button onClick={readAllProposal} className="input-btn">
              Get Proposal All 
          </button>
        <div/>
        <div className="btn"></div>
          <button onClick={getWinner} className="input-btn">
                get Winner
            </button>
        </div>
        <br/>
    </div>
  );
}

export default GettersBtns;
