import { useEffect, useState } from "react";

const TempApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("karachi");
  useEffect(() => {
    const fetchAPI = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f7ea5c9eeb557102fa954c3b547d5230`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchAPI();
  }, [search]);
  return (
    <>
      <div className="box">
        <h1> Weather APP</h1>
        <div className="inputData">
          <input
            type="search"
            placeholder="Enter City Name"
            className="inputFeild"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
        </div>
        <>
          {!city ? (
            <p className="errorMessage">
              <strong>No Data Found</strong> <br /> {search}is not a city
            </p>
          ) : (
            <div className="info">
              <h2 className="location">
                <i className="fa-solid fa-street-view">{search} </i>
              </h2>
              <h3 className="temp">{city.temp}°Cel</h3>
              <h4 className="tempmin_max">
                Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
              </h4>
              <p className="copyRight">
                &copy; 2024 Hamza Shabir. All rights reserved.
              </p>
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default TempApp;
