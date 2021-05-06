var posts = [];
var rootURL = "https://graph.instagram.com";
var accessToken = "IGQVJYNXpBWlhNOEhSVklpcDVTY3UtSkxQLU5XSjFpUnY5ajg5ZAjVXd2RueDFTZAmt1ZA3Q3RG4zWHhIQlY5ajgydkxxbnhmOXJ3S1FYSlFFcEJQOWJPUzF4MGwzZAWNjejZAVY1lwNWdn";
var media = new Map();

function main(){
  var url = rootURL + "/" + "17841403737404666" + "/" + "media?access_token=" + accessToken + "&fields=id,timestamp";
  var settings = {
    "url": url,
    "method": "GET",
    "dataType": 'JSON',
    "timeout": 0,
  };
  $.ajax(settings).done(function (response) {
    getData(response);
  });

}



function getData(res){
  res.data.forEach(function(item, index, array){posts.push(item)});
  getPosts(posts);
}

function getPosts(array){
  array.forEach(function(item, index, array){
    var url = rootURL + "/" + item.id + "?access_token=" + accessToken + "&fields=media_url,media_type";
    var settings = {
      "url": url,
      "method": "GET",
      "dataType": 'JSON',
      "timeout": 0,
    };
    $.ajax(settings).done(function (response) {
      media.set(response.id,{url: response.media_url, typ: response.media_type})
      media.forEach(element => console.log(element));
    });
  });
}

function getMediaURL(res){

}







main();

