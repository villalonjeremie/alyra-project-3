import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
 
function VoterBtns() {
  const [inputId, setInputId] = useState("");
  const { state: { contract, accounts } } = useEth();

  const handleIdChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputId(e.target.value);
  }
  };

  const setVote = async () => {
    if (inputId === "") {
      alert("Please enter an Id to write.");
      return;
    }
    
    await contract.methods.setVote(inputId).call({ from: accounts[0] });
  };

  return (
    <div>
        <div className="btns">
            <input
                type="text"
                placeholder="id proposal for vote"
                value={inputId}
                onChange={handleIdChange}
            />
            <button onClick={setVote} className="input-btn">
                set Vote
            </button>
        </div>
    </div>
  );
}

export default VoterBtns;