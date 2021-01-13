const initialState = {
    countries: [],
    selectedCountry: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'get_countries': {
            return {
                ...state,
                countries: [
                    ...action.payload
                ],
                originalCountries: [
                    ...action.payload
                ]
            }
        };

        case 'search_countries': {
            let inputValue = action.payload;
            console.log(inputValue)

            if (inputValue.length == '') {
                return {
                    ...state,
                    countries: [
                        ...state.originalCountries
                    ]
                };
            } else {
                state.countries = state.originalCountries;
            }

            if (inputValue.length >= 3) {
                let filtered = state.countries.filter((item) => {
                    let criteria = item.name.toLowerCase().indexOf(inputValue.toLowerCase(), 0);
                    return criteria > -1;
                })
                return {
                    ...state,
                    countries: [
                        ...filtered
                    ]
                }
            }
        }

        case 'find_country': {
            let param = action.payload;

            let item = state.countries.find((item) => {
                let criteria = item.alpha3Code.toLowerCase().indexOf(param.toLowerCase(), 0);
                return criteria > -1;
            });

            return {
                ...state,
                selectedCountry: {
                    ...item
                }
            }
        }

        case 'update_country': {
            let payload = action.payload;
            let mutatedCountry = {};
            let mutatedCountries = state.countries.map((item) => {
                if (item.alpha3Code != payload.alpha3Code) {
                    return item;
                } else {
                    mutatedCountry = {
                        ...item,
                        ...payload
                    };
                }

                return {
                    ...item,
                    ...payload
                }
            });
            console.log("state", state.selectedCountry);
            console.log("mutated", mutatedCountry);


            return {
                ...state,
                countries: [
                    ...mutatedCountries
                ],
                originalCountries: [
                    ...mutatedCountries
                ],
                selectedCountry: {
                    ...mutatedCountry
                }
            }
            
        }


        default:
            return state;
    }
}
