function batch(){
	var request = require("request");

	var options = { method: 'POST',
	  url: 'https://ibm-watson-ml.mybluemix.net/pm/v1/score/test2',
	  qs: { accesskey: '3pmpR/Rmw/E93jH25U9/dP6yciTZ Gth0O3gDIJnpUvMOoVIgpPvg2 v3QyZPPnfHxGxQ3pIogjgEOjN0TGDTcL0h32gVzPkwMbmHXNpi Hox Mvwa 7GQ8vHAZW3CihtzIPylVCeA53o1U3j5CUNs2WmPAxFgfEYJlcc/bkHVg=' },
	  headers:
	   { 'postman-token': 'bf8e22c1-4518-ff62-350b-d3c911383944',
	     'cache-control': 'no-cache',
	     'content-type': 'application/json;charset=UTF-8' },
	  body: '{\r\n"tablename":"Web新規申し込み", \r\n"header":["顧客番号","性別","年齢","職業区分","所有車区分","所有車メーカー","下取り","Web検索語スコア","Web滞在秒数","Web遷移スコア","Web遷移タイプ","検討度合","運転歴"], \r\n"data":[[9817297,"男性",24,"自営業","他社","外国車","ない",112,269,2,"タイプA",3,0]]\r\n}' };

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);

	  console.log(body);
	});
}