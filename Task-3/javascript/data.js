var EmployeeData = function(){
	var name,id,dob,doj,position;
	return {
		setname:setName,
		setid: setId,
		setdob:setDob,
		setdoj:setDoj,
		setposition:setPosition,
		getid:getId,
		getname:getName,
		getdob:getDob,
		getdoj:getDoj,
		getposition:getPosition
	}
}

function setId(i) {
	id = i;
}
function setName(n) {
	name = n;
}
function setDob(d) {
	dob = d;
}
function setDoj(d) {
	doj = d;
}
function setPosition(p) {
	position = p;
}

function getId() {
	return id;
}
function getName() {
	return name;
}
function getDob() {
	return dob;
}
function getDoj() {
	return doj;
}
function getPosition() {
	return position;
}

function getEmployees(callback) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	    // document.getElementById("demo").innerHTML = this.responseText;
	    	callback(xhttp.responseText);
	 	}
	};
	xhttp.open("GET", "employees.json", true);
	xhttp.send();
}

var employee = function(){
	getEmployees(function(response) {
		//window.emplist = [];
		var list = JSON.parse(response);
		//console.log(list);

		var newlist = [];
		var table = document.getElementsByClassName("empTable");
		for(var i = 0; i < list.length; i ++) {
			var emp = new EmployeeData();
		 	var row = table[0].insertRow(i+1);
		 	row.addEventListener('click',rowClick);
		 	var index = 0;
			for(var key in list[i]) {
				//console.log(key + "      " + list[i][key]);
				var col = row.insertCell(index);
				col.innerHTML = list[i][key];
				col.className = key;
				index++;
			}
		}
	});

	function rowClick() {
		var disp = document.getElementsByClassName("display");
		var details = this.children;
		var str = "";
		for (var i = 0; i < details.length; i++) {
			str += "<p>"+details[i].className+" : "+ details[i].innerText +"</p>";
		};
		disp[0].innerHTML = str;


	}
}