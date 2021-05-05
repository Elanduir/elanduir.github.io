var settings = {
    "url": "https://graph.instagram.com/17841403737404666/media?access_token=IGQVJYNXpBWlhNOEhSVklpcDVTY3UtSkxQLU5XSjFpUnY5ajg5ZAjVXd2RueDFTZAmt1ZA3Q3RG4zWHhIQlY5ajgydkxxbnhmOXJ3S1FYSlFFcEJQOWJPUzF4MGwzZAWNjejZAVY1lwNWdn&fields=id,timestamp",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

