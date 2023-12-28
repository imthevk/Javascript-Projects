const quote = document.querySelector("#quote");
const quoteContainer = document.querySelector("#quote-container");
const author = document.querySelector("#author");
const tweetBtn = document.querySelector(".twitter-button");
const newQuoteBtn = document.querySelector("#new-quote");
const loader = document.querySelector("#loader");

//get data from quote api
async function getQuote() {
  showLoadingSpinner();

  //avoid cors error by using allow-cors chrome extension
  const apiUrl = `https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    //if author is blank in data, add "unknown"
    if (data.quoteAuthor === "") {
      author.textContent = "Unknown";
    } else {
      author.textContent = data.quoteAuthor;
    }
    //if quoteText is long, reduce font size by adding class "long-quote"
    if (data.quoteText.length > 120) {
      quote.classList.add("long-quote");
    } else {
      quote.classList.remove("long-quote");
    }
    quote.textContent = data.quoteText;
    removeLoadingSpinner();
  } catch (err) {
    console.log(err);
  }
}

function showLoadingSpinner() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoadingSpinner() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

function tweetQuote() {
  const text = quote.textContent;
  const authorText = author.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${text}- ${authorText}`;
  window.open(twitterUrl, "_blank");
}

//Event listeners
tweetBtn.addEventListener("click", tweetQuote);
newQuoteBtn.addEventListener("click", getQuote);

// on page load
getQuote();
