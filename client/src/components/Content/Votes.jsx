import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
 
function Votes() {
  const [inputAddress, setInputAddress] = useState("");
  const [voter, setVoter] = useState("");
  const { state: { contract, accounts, web3 } } = useEth();

  const handleAddressChange = e => {
    setInputAddress(e.target.value);
  };

  const getVoter = async () => {
    if (!web3.utils.isAddress(inputAddress)) {
      alert("invalid address")
    }

    const voter = await contract.methods.getVoter(inputAddress).call({ from: accounts[0] });
    setVoter(voter);
  };

  return (
    <div>
        <div className="btns">
            <input
                type="text"
                placeholder="address"
                value={inputAddress}
                onChange={handleAddressChange}
            />

            <button onClick={getVoter} className="input-btn">
                get Voter
            </button>

            {voter ?
                <code>
                    <pre>hasVoted : {String(voter.hasVoted)} </pre>
                    <pre>isRegistered : {String(voter.isRegistered)}</pre>
                    <pre>votedProposalId : {String(voter.votedProposalId)}</pre>
                </code> : <></>
            }
        </div>
    </div>
  );
}

export default Votes;