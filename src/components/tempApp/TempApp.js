const TempApp = () => {
  return (
    <>
      <div className="box">
        <h1> Weather APP</h1>
        <div className="inputData">
          <input
            type="search"
            placeholder="Enter city name"
            className="inputFeild"
          ></input>
        </div>
        <>
          <div className="info">
            <h2 className="location">
              <i className="fa-solid fa-street-view">Lahore</i>
            </h2>
            <h3 className="temp"></h3>
            <h4 className="tempmin_max">Min : 5.5°Cel | Max : 5.25° Cel</h4>
          </div>
        </>
      </div>
    </>
  );
};

export default TempApp;
