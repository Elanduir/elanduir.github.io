var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://graph.instagram.com/17841403737404666/media?access_token=IGQVJYNXpBWlhNOEhSVklpcDVTY3UtSkxQLU5XSjFpUnY5ajg5ZAjVXd2RueDFTZAmt1ZA3Q3RG4zWHhIQlY5ajgydkxxbnhmOXJ3S1FYSlFFcEJQOWJPUzF4MGwzZAWNjejZAVY1lwNWdn&fields=id,timestamp");

xhr.send();
var test = xhr.response;

test.forEach(element => console.log(element));

