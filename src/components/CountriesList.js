
import GraphCountries from '../api/GraphCountries';
import React from "react";

class CountriesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listLoaded : false,
            countries : [],
        }
    }

    componentDidMount() {
        GraphCountries.fetch().then((response)=> {
            this.setState({countries : response.data.Country})
        })
    }
    
    render() {
        return (
            <ul>
                { this.state.countries.map((item) => <li key={item.name}>{item.flag.emoji} {item.name}</li>)  }
            </ul>
        )
    }
};


export default CountriesList;