window.fetch("https://api.cricapi.com/v1/cricScore?apikey=%APIKEY%")
	.then(result => result.json())
	.then(result => {
		console.log("We have the result",result);
	})
	.catch(err => {
		console.log("An error occured. Please check your code",err);
	});
