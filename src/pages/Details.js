import {connect} from "react-redux";
import CountryForm from "../components/CountryForm";
import { Redirect } from 'react-router-dom';
import '../components/styles/templates/details.css'

function Details(state)
{
  if(state.selectedCountry.alpha3Code === undefined) {
    return (
      <Redirect to="/" />
    );
  }

  return (
    <div className="App">
        <div className="details">
          <img width="200" alt={state.selectedCountry.name} src={state.selectedCountry.flag.svgFile} />
          <h4 className="title">{state.selectedCountry.name}</h4>
          <ul className="list-info">
              <li>Capital: {state.selectedCountry.capital}</li>
              <li>População: {state.selectedCountry.population}</li>
              <li>Area: {state.selectedCountry.area} km<sup>2</sup></li>
              <li>
                  Domínios:
                  <ul>
                      {state.selectedCountry.topLevelDomains.map((item)=> <li key={item.name}>{item.name}</li>)}
                  </ul>
              </li>
          </ul>
        <CountryForm countryId={state.selectedCountry.alpha3Code} />
        </div>
     
    </div>
  )
}

export default  connect(state=> ({ selectedCountry : state.selectedCountry}))(Details) ;