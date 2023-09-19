const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const newQuoteBtn = document.querySelector(".twitter-button");

//get data from quote api
async function getQuote() {
  const proxyUrl = "https://corsproxy.io/?";
  const apiUrl = `${proxyUrl}https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`;
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
  } catch (err) {
    getQuote();
    console.log(err);
  }
}

function tweetQuote() {
  const text = quote.textContent;
  const authorText = author.textContent;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${text}- ${authorText}`;
  window.open(twitterUrl, "_blank");
}

newQuoteBtn.addEventListener("click", tweetQuote);
// on load
getQuote();
