import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import CountryDetail from "./pages/CountryDetail";
import { getAllCountries } from "./api/countryService";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setIsLoaded(false);
    getAllCountries().then((result) => {
      setIsLoaded(true);
      setCountries(result);
    });
  }, [setCountries]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home countries={countries} />
          </Route>
          <Route exact path="/:countryCode">
            <CountryDetail countries={countries} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
