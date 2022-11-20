import {  useState, useEffect } from "react";
import useEth from "../../contexts/EthContext/useEth";

function Winner( {winner} ) {
    const { state: { contract, accounts } } = useEth();
    const [getWinner, setWinner] = useState("");

    useEffect(() => {
      (async function () {
            const i = await contract.methods.winningProposalID().call({ from: accounts[0] });
            const proposalWinner = await contract.methods.getOneProposal(i).call({ from: accounts[0] });
            setWinner(proposalWinner);
      })();
    }, [contract, accounts, setWinner]);


    return (
        <code>
          {` Proposal Winner is : `}
            {
              winner ? 
                <strong>{winner.description}</strong> : <strong>{getWinner.description}</strong>
            }
        </code>
      );
  }
  
  export default Winner;