import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ProposalBtns({ setAllProposals }) {
  const { state: { contract, accounts } } = useEth();
  const [inputString, setStringValue] = useState("");

  const handleStringChange = e => {
    setStringValue(e.target.value);
  };

  const writeProposal = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputString === "") {
      alert("Please enter a string to write.");
      return;
    }

    try {
      await contract.methods.addProposal(inputString).send({ from: accounts[0] });
      let proposals = [], i = 0, error = false;
      while ( error === false ) {
          ++i;
          try {
            const proposal = await contract.methods.getOneProposal(i).call({ from: accounts[0] });
            console.log(proposal);
            proposals.push(proposal);
          } catch (err) {
            error = true;
            break;
          }
      }
      setAllProposals(proposals);
    } catch (err) {
      const endIndex = err.message.search('error msg')
  
      if (endIndex >= 0) {
        throw err.message.substring(0, endIndex)
      }
  }
  };

  return (
    <div className="btns">
        <input
            type="text"
            placeholder="text proposal"
            value={inputString}
            onChange={handleStringChange}
        />
        <button onClick={writeProposal} className="input-btn">
            Add Proposal
        </button>
    </div>
  );
}

export default ProposalBtns;
