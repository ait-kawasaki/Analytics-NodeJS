function batch(){
	var data = "{\r\n    \"action\": \"BATCH_SCORE\",\r\n    \"model\": {\r\n        \"id\": \"batch1\",\r\n        \"name\": \"attract_new_en2.str\"\r\n    },\r\n    \"dbDefinitions\": {\r\n        \"db\": {\r\n            \"type\": \"PostgreSQL\",\r\n            \"host\": \"echo-01.db.elephantsql.com\",\r\n            \"port\": 5432,\r\n            \"db\": \"bgurrocc\",\r\n            \"username\": \"bgurrocc\",\r\n            \"password\": \"8n_gJj3qo5bmIB4oPQUAtfvVRW93jv0e\",\r\n            \"options\": \"\"\r\n        }\r\n    },\r\n    \"setting\": {\r\n        \"inputs\": [{\r\n            \"odbc\": {\r\n                \"dbRef\": \"db\",\r\n                \"table\": \"input_data_tbl\"\r\n            },\r\n            \"node\": \"Web_input_en\",\r\n            \"attributes\": []\r\n        }],\r\n        \"exports\": [{\r\n            \"odbc\": {\r\n                \"dbRef\": \"db\",\r\n                \"table\": \"output_score_tbl\",\r\n                \"insertMode\": \"Drop\"\r\n            },\r\n            \"node\": \"Table\",\r\n            \"attributes\": []\r\n        }]\r\n    }\r\n}";

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === 4) {
	    console.log(this.responseText);
	  }
	});

	xhr.open("POST", "https://ibm-watson-ml.mybluemix.net/pm/v1/jobs/job03?accesskey=N4LnXREVJ44YgZy4MCnIJaU7NCAxoihZBHpVqS6abjaubA3inBFJ%2FeM4ZBhB2AxLHxGxQ3pIogjgEOjN0TGDTcL0h32gVzPkwMbmHXNpi%20Et7TSlwLngbf%203XI66NrGzoVlIkEPrfJsLi9tdLYT4J2hgHmZgw6ZHGfMarLtgzVM%3D");
	xhr.setRequestHeader("content-type", "application/json;charset=UTF-8");
	xhr.setRequestHeader("cache-control", "no-cache");
	xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
	xhr.setRequestHeader("postman-token", "d655eabe-493c-69ec-a49f-7a8fc63859de");

	xhr.send(data);
}