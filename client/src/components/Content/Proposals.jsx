import { useEffect, useState } from "react";
import useEth from "../../contexts/EthContext/useEth";
 
function Proposals() {
  const { state: { contract, accounts } } = useEth();
  const [proposals, setProposals] = useState("");

  useEffect(() => {
    (async function () {
      let proposals = [], i = 0, error = false;
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

      setProposals(proposals);
    })();
  }, [contract, accounts]);

  return (
      <div className="proposals">
        <strong>Proposals : </strong>
        {Object.values(proposals).map((value, index) => {
          return (
            <div key={index + 1} >
              <span> {index + 1}. {value.description}</span>
            </div>
          );
        })}
      </div>
  );
}

export default Proposals;
