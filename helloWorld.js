var test = [];

function main(){
  var settings = {
    "url": "https://graph.instagram.com/17841403737404666/media?access_token=IGQVJYNXpBWlhNOEhSVklpcDVTY3UtSkxQLU5XSjFpUnY5ajg5ZAjVXd2RueDFTZAmt1ZA3Q3RG4zWHhIQlY5ajgydkxxbnhmOXJ3S1FYSlFFcEJQOWJPUzF4MGwzZAWNjejZAVY1lwNWdn&fields=id,timestamp",
    "method": "GET",
    "dataType": 'JSON',
    "timeout": 0,
  };
  let test = [];
  $.ajax(settings).done(function (response) {
    printResponse(response);
  });

}



function printResponse(res){
  res.data.forEach(function(item, index, array){test.push(item)});
  printArray(test);
}

function printArray(array){
  console.log(array);
}







main();

