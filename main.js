console.log("main.js!!");

const URL = "https://www.jma.go.jp/bosai/forecast/data/forecast/210000.json";

/*const WEATHER = {
	"100": {"icon": "./images/xxx.png"},
	"101": {"icon": "./images/xxx.png"},
}*/

$(document).ready(()=>{
	console.log("Ready!!");

	// Axios
	const option = {responseType: "blob"};
	axios.get(URL, option).then(res=>{
		// 通信が成功した場合
		res.data.text().then(str=>{
			let arr = JSON.parse(str);
			console.log(arr);
			$("#area_1").append(arr[0]["timeSeries"][0]["areas"][0]["area"]["name"] + "の天気"); // 地名の表示
			axios.get('./data.json',option).then(res=>{
				res.data.text().then(str2=>{
					let arr2 = JSON.parse(str2);
					console.log(arr2);
					$('#mino').append(`<img src="images_mark/` + arr2[arr[0]["timeSeries"][0]["areas"][0]["weatherCodes"][0]][0] + `">`);
				})
			})
		});
	}).catch(err=>{
		// 通信が失敗した場合
		console.log(err);
	});
});
//weathercodes = (arr[0]["timeSeries"][0]["areas"][0]["weatherCodes"][1]); 