let urlQuote = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

fetch(urlQuote)
  .then(function(response) {
      if (response.status !== 200) {
        console.log('Error, error code ' + response.status);
        return;
      }
      // parse response data
      response.json().then(data => {
        const btnChangeQuote = document.getElementById('btnNewQuote') 
        const textEl = document.getElementById('text')
        const authorEl = document.getElementById('author')
        const quoteSection = document.getElementsByClassName('quote-section')[0]
        const quoteBox = document.getElementsByClassName('quote-box')[0]

        btnChangeQuote.addEventListener('click', handleChangeQuote)
        function handleChangeQuote() {
            getQuote()
            getRandomColor()
        }
        function getQuote() {
            let randomQuote;
            randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
            textEl.innerHTML = randomQuote.quote
            authorEl.innerHTML = randomQuote.author
            // console.log(text, author)
        }
        function getRandomColor() {
            let randomColor = Math.floor(Math.random()*16777215).toString(16)
            console.log(randomColor)
            quoteSection.style.backgroundColor = '#' + randomColor
            quoteBox.style.color = '#' + randomColor
            btnChangeQuote.style.background = '#' + randomColor
        }
      })
    }
  )
  .catch(err => {
    console.log('Error :', err)
});

