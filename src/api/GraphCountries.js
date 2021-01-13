const GraphCountries = {
    fetch() {
       return fetch('https://countries-274616.ew.r.appspot.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: `
            query {
                Country {
                    flag {
                        emoji
                        emojiUnicode
                        svgFile
                    },
                    name,
                    capital,
                    area,
                    population,
                    topLevelDomains {
                        name
                    },
                    alpha3Code,
                }
            }
            ` }),
            })
            .then(res => res.json())
    },
}

export default GraphCountries;