function scrapeWikipediaTable() {
  var url = "https://en.wikipedia.org/wiki/List_of_ports_in_the_United_States";
  var response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  if (response.getResponseCode() !== 200) return;

  var html = response.getContentText();
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Ports");
  if (!sheet) sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Ports");
  else sheet.clear();

  var headers = ["Rank", "Port Name", "State", "Total trade", "Domestic total", "Foreign Total", "Foreign imports", "Foreign exports"];
  sheet.appendRow(headers);

  var table = html.match(/<table class="wikitable[\s\S]*?<\/table>/i);
  if (!table) return;

  var tbody = table[0].match(/<tbody>[\s\S]*?<\/tbody>/i);
  if (!tbody) return;

  var rows = tbody[0].match(/<tr>[\s\S]*?<\/tr>/g);
  if (!rows) return;

  for (var i = 1; i < rows.length; i++) {
    var rowHtml = rows[i];
    var cols = rowHtml.match(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g);
    if (!cols) continue;

    var rowData = [];
    for (var j = 0; j < cols.length; j++) {
      var colText = cols[j].replace(/<[^>]*>/g, '').trim();
      rowData.push(colText);
    }

    sheet.appendRow(rowData);
  }
}
