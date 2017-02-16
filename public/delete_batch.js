function delete_batch(){
	var form = new FormData();
	form.append("test", "");

	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "https://ibm-watson-ml.mybluemix.net/pm/v1/jobs/job03?accesskey=N4LnXREVJ44YgZy4MCnIJaU7NCAxoihZBHpVqS6abjaubA3inBFJ/eM4ZBhB2AxLHxGxQ3pIogjgEOjN0TGDTcL0h32gVzPkwMbmHXNpi+Et7TSlwLngbf+3XI66NrGzoVlIkEPrfJsLi9tdLYT4J2hgHmZgw6ZHGfMarLtgzVM=",
	  "method": "DELETE",
	  "headers": {
	    "cache-control": "no-cache",
	    "postman-token": "050b03be-e317-db2a-91bd-46e5464340a7"
	  },
	  "processData": false,
	  "contentType": false,
	  "mimeType": "multipart/form-data",
	  "data": form
	}

	$.ajax(settings).done(function (response) {
	  console.log(response);
	  var result = document.getElementById('result_div');
	  result.innerHTML = response;
	});
}
