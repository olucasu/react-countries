

const GraphCountries = {
    fetch() {
       return fetch('https://countries-274616.ew.r.appspot.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: `
            query {
                Country(first:10) {
                    name,
                    capital,
                    flag {
                        emoji
                        emojiUnicode
                        svgFile
                    }
                }
            }
            ` }),
            })
            .then(res => res.json())
    },
}

export default GraphCountries;