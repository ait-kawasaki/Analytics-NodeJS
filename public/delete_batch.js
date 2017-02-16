function delete_batch(){
	var request = require("request");
	var options = { method: 'DELETE',
	  url: 'https://ibm-watson-ml.mybluemix.net/pm/v1/jobs/job03',
	  qs: { accesskey: 'N4LnXREVJ44YgZy4MCnIJaU7NCAxoihZBHpVqS6abjaubA3inBFJ/eM4ZBhB2AxLHxGxQ3pIogjgEOjN0TGDTcL0h32gVzPkwMbmHXNpi Et7TSlwLngbf 3XI66NrGzoVlIkEPrfJsLi9tdLYT4J2hgHmZgw6ZHGfMarLtgzVM=' },
	  headers:
	   { 'postman-token': '93674c1f-f698-ed17-d70c-0f2a636ba3e4',
	     'cache-control': 'no-cache',
	     'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
	  formData: { test: undefined } };

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);
	  var result = document.getElementById('result_div');
	  result.innerHTML = body;
	});
}