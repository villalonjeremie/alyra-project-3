import { useEffect, useRef, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function Winner() {
    const spanEle = useRef(null);
    const { state: { contract, accounts } } = useEth();
    const [winner, setWinner] = useState("");

    useEffect(() => {
      (async function () {
            const values = await contract.methods.winningProposalID().call({ from: accounts[0] });
            setWinner(values);
      })();
    }, [contract, accounts, setWinner]);
  

    return (
        <code><section></section>
          {` Winner : `}
          <span className="secondary-color" ref={spanEle}>
            <strong>{winner}</strong>
          </span>
        </code>
      );
  }
  
  export default Winner;