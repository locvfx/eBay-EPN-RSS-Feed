$(function () {
  var list = $('forsale');

  // fill out your search keywords, ignored keywords and eBay assigned campaign ID
  var keywords = "green hat" // your search query
  var keywordsIgnored = "nike" // provide an empty string "" if you wish not to ignore any keywords in your query
  var campaignid = 0; // your EPN created campaign ID - should be a 10 digit number

  var url = "/proxy.php?keywords=" + keywords + "&keywordsIgnored=" + keywordsIgnored + "&campaignid=" + campaignid;
  if ( list.length ) {
    $.ajax({  
      type: "GET",  
      url: url,  
      success: function(xml) {  
        console.log(xml, "xmls") 
        $(xml)
          .find('item')
          .each(function(index, element){
            var field = $(element)
            var title = field.find('title').text();
            var htmlBlob = field.find('description').text();
            list.append(title + htmlBlob);
        });
      }
    });
  }
});