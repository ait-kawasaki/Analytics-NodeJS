function batch(){
	var request = require("request");

	var options = { method: 'POST',
	  url: 'https://ibm-watson-ml.mybluemix.net/pm/v1/jobs/job03',
	  qs: { accesskey: 'N4LnXREVJ44YgZy4MCnIJaU7NCAxoihZBHpVqS6abjaubA3inBFJ/eM4ZBhB2AxLHxGxQ3pIogjgEOjN0TGDTcL0h32gVzPkwMbmHXNpi Et7TSlwLngbf 3XI66NrGzoVlIkEPrfJsLi9tdLYT4J2hgHmZgw6ZHGfMarLtgzVM=' },
	  headers:
	   { 'postman-token': '3bea56df-554b-84d1-7967-8513c2324595',
	     'cache-control': 'no-cache',
	     'content-type': 'application/json;charset=UTF-8' },
	  body: '{\r\n    "action": "BATCH_SCORE",\r\n    "model": {\r\n        "id": "batch1",\r\n        "name": "attract_new_en2.str"\r\n    },\r\n    "dbDefinitions": {\r\n        "db": {\r\n            "type": "PostgreSQL",\r\n            "host": "echo-01.db.elephantsql.com",\r\n            "port": 5432,\r\n            "db": "bgurrocc",\r\n            "username": "bgurrocc",\r\n            "password": "8n_gJj3qo5bmIB4oPQUAtfvVRW93jv0e",\r\n            "options": ""\r\n        }\r\n    },\r\n    "setting": {\r\n        "inputs": [{\r\n            "odbc": {\r\n                "dbRef": "db",\r\n                "table": "input_data_tbl"\r\n            },\r\n            "node": "Web_input_en",\r\n            "attributes": []\r\n        }],\r\n        "exports": [{\r\n            "odbc": {\r\n                "dbRef": "db",\r\n                "table": "output_score_tbl",\r\n                "insertMode": "Drop"\r\n            },\r\n            "node": "Table",\r\n            "attributes": []\r\n        }]\r\n    }\r\n}' };

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);
	  var result = document.getElementById('result_div');
	  result.innerHTML = body;
	});

}