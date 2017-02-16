function delete_batch(){
	var data = new FormData();
	data.append("test", "");

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
	  if (this.readyState === 4) {
	    console.log(this.responseText);
	  }
	});

	xhr.open("DELETE", "https://ibm-watson-ml.mybluemix.net/pm/v1/jobs/job03?accesskey=N4LnXREVJ44YgZy4MCnIJaU7NCAxoihZBHpVqS6abjaubA3inBFJ%2FeM4ZBhB2AxLHxGxQ3pIogjgEOjN0TGDTcL0h32gVzPkwMbmHXNpi%20Et7TSlwLngbf%203XI66NrGzoVlIkEPrfJsLi9tdLYT4J2hgHmZgw6ZHGfMarLtgzVM%3D");
	xhr.setRequestHeader("cache-control", "no-cache");
	xhr.setRequestHeader("postman-token", "ee5c1a35-4477-dfd0-f15c-1a06674902d2");

	xhr.send(data);
}
