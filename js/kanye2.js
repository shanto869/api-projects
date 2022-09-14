// load kanye quote
const loadQuote = () => {
    const url = `https://api.kanye.rest`
    fetch(url)
        .then(res => res.json())
        .then(data => displayQuote(data.quote))

}

// display kanye quote
const displayQuote = (quote) => {
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerText = quote;
}

