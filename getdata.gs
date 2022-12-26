function doGet(request){
 // Change Spread Sheet url
 var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1OuKr0pD0FosACTw3z2xPujq-FTpdkExgFHXhQY--7Vk/edit?usp=sharing");
 var customer_id = request.parameter.customer_id
 var customer_name = request.parameter.customer_name
 var content = request.parameter.content
 var sheet = ss.getActiveSheet();
 var today = new Date();
 var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 var dateTime = date+' '+time;
 sheet.appendRow([dateTime,customer_id, customer_name,content]);
 var result = {}
 result.result = 'added'
//  console.log(result)
 var result = JSON.stringify(result);
 return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON); 
}
