function Proposals({ proposals }) {
  return (
    <code>

      {` Proposals : `}
      {Object.values(proposals).map((value, index) => {
        return (
          <div key={index}>
            <strong>{value}</strong>
          </div>
        );
      })}
    </code>
  );
}

export default Proposals;
