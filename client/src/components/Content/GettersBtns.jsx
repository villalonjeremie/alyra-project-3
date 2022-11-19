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
    const winnerId = await contract.methods.winningProposalID().call({ from: accounts[0] });
    setWinner(winnerId);
   };

  const readAllProposal = async () => {
    const values = await contract.methods.getProposals().call({ from: accounts[0] });
    console.log(values);
    setAllProposals(values);
  };

  const readOneProposal = async () => {
    if (inputId === "") {
        alert("Please enter an Id to write.");
        return;
      }

    const value = await contract.methods.getOneProposal(inputId).call({ from: accounts[0] });
    setProposal(value);
  };

  const getVoter = async () => {
    if (!web3.utils.isAddress(inputAddress)) {
      alert("invalid address")
    }
    
    const voter = await contract.methods.getVoter(inputAddress).call({ from: accounts[0] });
    setVoter(voter);
  };

  return (
    <div className="btns">
        <input
            type="text"
            placeholder="idProposal"
            value={inputId}
            onChange={handleIdChange}
        />
        <button onClick={readOneProposal} className="input-btn">
            Get Proposal by Id
        </button>
        <button onClick={readAllProposal} className="input-btn">
            Get Proposal All 
        </button>
        <input
            type="text"
            placeholder="address"
            value={inputAddress}
            onChange={handleAddressChange}
            />
        <button onClick={getVoter} className="input-btn">
            Get Voter
        </button>
        <div>
        <div className="btns">
            <button onClick={getWinner} className="input-btn">
                get Winner
            </button>
        </div>
    </div>
    </div>
  );
}

export default GettersBtns;
