import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
 
function AddVoter({ addingStatus }) {
  const [inputAddress, setInputAddress] = useState("");
  const [infoAddVoter, setInfoAddVoter] = useState("");
  const { state: { contract, accounts, web3 } } = useEth();

  const handleAddressChange = e => {
    setInputAddress(e.target.value);
  };

  const addVoter = async () => {
    if (!web3.utils.isAddress(inputAddress)) {
      alert("Invalid Address")
    }

    try {
        const infoAddVoter = await contract.methods.addVoter(inputAddress).send({ from: accounts[0] });
        setInfoAddVoter(infoAddVoter);
    } catch(err) {
        const endIndex = err.message.search('error msg')
  
        if (endIndex >= 0) {
          throw err.message.substring(0, endIndex)
        }
    }
  };

  return (
    <>
    { addingStatus === 0 ? 
        
        <div className="btns">
            <div className="btn-inout">
                <input
                    type="text"
                    placeholder="address"
                    value={inputAddress}
                    onChange={handleAddressChange}
                />
                <button onClick={addVoter} className="input-btn">
                    Add Voter
                </button>
            </div>
            <br/>
            {
            infoAddVoter.status === true ?
                <code>
                    <span> Voter added in blockchain </span>
                    <pre> Transaction Hash: </pre>
                    <pre> {infoAddVoter.transactionHash} </pre>
                </code>:<></>
            }
        </div>:<></>
    }
    </>
  );
}

export default AddVoter;