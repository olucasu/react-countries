import { connect } from "react-redux";
import './styles/atoms/search-field.css';

const searchCountries = (event, dispatch) =>  {
    dispatch({
      type: 'search_countries',
      payload: event.target.value
    });
  }

const SearchField = ({dispatch}) => {
    return (
        <div className="search-field">
            <input placeholder="Buscar país" onChange={ (event) => searchCountries(event, dispatch)} type="text" />
        </div>
    )
}


export default connect((state) => ({dispatch: state.dispatch}))(SearchField)
