function Mode({setMode}) {

  return (
      <div className="btns">
        Mode :  
        <button onClick={() => setMode('Admin')} >
          Admin
        </button>
        
        <button onClick={() => setMode('Vote')} >
          Voters
        </button>
      </div>
  );
}

export default Mode;
