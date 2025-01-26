function Spinner() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
        <div style={{
          width: "50px",
          height: "50px",
          border: "5px solid gray",
          borderTop: "5px solid blue",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}></div>
      </div>
    );
  }
  
  export default Spinner;