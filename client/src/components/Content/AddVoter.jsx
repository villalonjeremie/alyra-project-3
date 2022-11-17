import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
 
function AddVoter() {
  const [inputAddress, setInputAddress] = useState("");
  const [infoAddVoter, setInfoAddVoter] = useState("");
  const { state: { contract, accounts, web3 } } = useEth();

  const handleAddressChange = e => {
    setInputAddress(e.target.value);
  };

  const addVoter = async () => {
    if (!web3.utils.isAddress(inputAddress)) {
      alert("invalid address")
    }

    const infoAddVoter = await contract.methods.addVoter(inputAddress).send({ from: accounts[0] });
    setInfoAddVoter(infoAddVoter);
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
            <button onClick={addVoter} className="input-btn">
                add Voter
            </button>

            {infoAddVoter ?
                <code>
                    <pre>Status : {String(infoAddVoter.status)} </pre>
                    <pre>transactionHash : {String(infoAddVoter.transactionHash)}</pre>
                    <pre>gasUsed : {String(infoAddVoter.gasUsed)}</pre>
                </code>  : <></>
            }
        </div>
    </div>
  );
}

export default AddVoter;