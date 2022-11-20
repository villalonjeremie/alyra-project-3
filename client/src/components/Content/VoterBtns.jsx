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

  const addVote = async () => {
    if (inputId === "") {
      alert("Please enter an Id to write.");
      return;
    }
    
    try {
      await contract.methods.setVote(inputId).send({ from: accounts[0] });
    } catch(err) {
      const endIndex = err.message.search('error msg')

      if (endIndex >= 0) {
        throw err.message.substring(0, endIndex)
      }
    }
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
            <button onClick={addVote} className="input-btn">
                Vote
            </button>
        </div>
    </div>
  );
}

export default VoterBtns;