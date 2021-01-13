import React from "react";
import { connect } from "react-redux";
import './styles/organisms/country-form.css';


class CountryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'Salvar',
            name: null,
            capital: null,
            area: null,
            population: null,
            alpha3Code: props.countryId,
            errors : {}
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        let value = target.value;

        let errors = this.state.errors;

        let fieldError = {
            [name] : ''
        };

        this.setState({
            [name]: value,
            errors: {
                ...errors,
                ...fieldError
            }
        })
    }

    handleSave() {
        let data = this.state;
        let self= this;

        if(this.formIsValid()) {
            self.setState({
                buttonText: 'Salvo!'
            })

            setTimeout(() => {
                self.setState({
                    buttonText: 'Salvar'
                })
            }, 3000)

            this.props.dispatch({
                type: 'update_country',
                payload: data,
            })
        }
    }

    formIsValid() {
        let formValid =  true;
        let fields = this.state;
        let errors = {};

        if(fields.population === null || fields.population === "") {
            errors['population'] = "População não pode ser vazio";
            formValid =  false;
        }

        if(fields.name === null || fields.name === "") {
            errors['name'] = "Nome não pode ser vazio";
            formValid =  false;
        }

        if(fields.area === null || fields.area === "") {
            errors['area'] = "Área não pode ser vazio";
            formValid =  false;
        }

        if(fields.capital === null || fields.capital === "") {
            errors['capital'] = "Capital não pode ser vazio";
            formValid =  false;
        }

        this.setState({errors:errors});
        return formValid;
    }

    render() {
        return (
            <form className="country-form">
                <legend>Editar País</legend>
                <hr />

                <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input onChange={this.handleInputChange.bind(this)} id="name" type="text" name="name" />
                    <small className="error">{this.state.errors["name"]}</small>
                </div>

                <div className="form-group">
                    <label htmlFor="capital">Capital</label>
                    <input required onChange={this.handleInputChange.bind(this)} id="capital" type="text" name="capital" />
                    <small className="error">{this.state.errors["capital"]}</small>
                </div>

                <div className="form-group">
                    <label htmlFor="area">Área</label>
                    <input required onChange={this.handleInputChange.bind(this)} id="area" type="text" name="area" />
                    <small className="error">{this.state.errors["area"]}</small>
                </div>
               
                <div className="form-group">
                    <label htmlFor="population">População</label>
                    <input required onChange={this.handleInputChange.bind(this)} id="population" type="number" name="population" />
                    <small className="error">{this.state.errors["population"]}</small>
                </div>
                <div className="form-group">
                    <button onClick={this.handleSave.bind(this)} type="button">{this.state.buttonText}</button>
                </div>
            </form>
        )
    }
}

export default connect(state => ( {dispatch:state.dispatch}))(CountryForm);