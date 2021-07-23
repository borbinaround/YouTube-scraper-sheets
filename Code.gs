function YouTubeScraper() {
  var sh1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  //change cell to whatever you'd like to fetch search results from
  var keyword = sh1.getRange("B1").getValue();
  
  var results = YouTube.Search.list('id,snippet', {q:keyword, maxResults:50});
  var items = results.items.map(function(e){
    return [e.id.videoId, 
            e.snippet.publishedAt,
            e.snippet.channelId,
            e.snippet.title,
            e.snippet.description,
            e.snippet.thumbnails["default"].url,
            e.snippet.channelTitle]
  })
   sh1.getRange(4, 1, items.length, items[0].length).setValues(items)       
        
}
