const boton = document.getElementById("boton");
boton.addEventListener("click", addData);

function addData(){
let array = [];
let name = document.getElementById("name").value;
let surname = document.getElementById("surname").value;
let DNI = document.getElementById("DNI").value
let workingStatus = document.getElementById("workingStatus").value;
let hobbys=document.getElementsByName("hobbie");
let hobbie;
let birthdate = document.getElementById("birthdate").value;
let checkbox = "Terminos rechazados"
let textArea = document.getElementById("hiddenArea");


for (var i = 0, length = hobbys.length; i < length; i++) {
		if (hobbys[i].checked) {
		   hobbie = hobbys[i].value;
		   break;
		}
	}
	if (document.getElementById("checkbox").checked) {
		checkbox = "Terminos aceptados"
	}
	array.push(name,surname,DNI,workingStatus,hobbie,birthdate,checkbox);
	textArea.innerHTML =name+" "+surname+" "+DNI+" "+workingStatus+" "+hobbie+" "+birthdate+" "+checkbox;
	showArea();
		console.log(array);
}


function showArea() {
	const area = document.getElementById("hidden");
	area.className = "show";
}

