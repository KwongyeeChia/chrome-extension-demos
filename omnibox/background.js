function openTab(url) {
  chrome.tabs.create({
    url: url
  })
}

const booksUrl = [
  'http://www.ituring.com.cn/search?q=',
  'https://www.epubit.com/search?tag=',
  'http://www.broadview.com.cn/search?q='
]

chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    console.log('inputChanged: ' + text);
    suggest([
      {content: text + " one", description: "the first one"},
      {content: text + " number two", description: "the second entry"}
    ]);
  });

chrome.omnibox.onInputEntered.addListener(function(text) {
  booksUrl.forEach((bookUrl) => {
    const url = bookUrl + text
    openTab(url)
  })
});

