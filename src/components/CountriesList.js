
import GraphCountries from '../api/GraphCountries';
import React from "react";
import {connect} from "react-redux";
import {
    Link
} from 'react-router-dom';
import './styles/organisms/countries-list.css';
import NotFound from './NotFound';

class CountriesList extends React.Component {
    componentDidMount() {
        const self = this;
        if(self.props.countries.length == 0) {
            GraphCountries.fetch().then((response)=> {
                self.props.dispatch({
                    type: 'get_countries',
                    payload: response.data.Country
                })
            })
        }
    }

    findCountry(payload) {
        return {
            'type':'find_country',
            'payload':payload
        }
    }

    render() {

        if(this.props.countries.length === 0 ) {
            return <NotFound text="Nenhum país encontrado" />
        }

        return (
            <ul className="countries-list">
                { this.props.countries.map((item) => <li key={item.alpha3Code}>
                    <Link onClick={()=> this.props.dispatch(this.findCountry(item.alpha3Code))} exact="true" to={ "/countries/"+item.alpha3Code}>{item.flag.emoji} {item.name}</Link>
                </li>)  }
            </ul>
        )
    }
};

export default  connect(state => ({countries : state.countries}))(CountriesList) ;