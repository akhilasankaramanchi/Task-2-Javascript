$(document).ready(function() {
	$.getJSON("employees.json",function(data) {
		console.log(data);
		populateTable(data);
	});

	function populateTable(data) {
		for (var i = 0; i < data.length; i++) {
			var row = "<tr class = 'eachRow'>";
			for(var key in data[i]) {
				row += "<td class = '" + key + "'>" +  data[i][key]+"</td>";
			}
			row += "</tr>";
			$(".empTable").append(row);
		};
		addListener();
	}

	function addListener() {
		$(".eachRow").click(function() {
			var cell = $(this).children();
			var str = "";
			for (var i = 0; i < cell.length; i++) {
				str += "<p>"+cell[i].className+" : "+ cell[i].innerText +"</p>";
			};
			$(".display").html(str);

		})

	} 

}) 