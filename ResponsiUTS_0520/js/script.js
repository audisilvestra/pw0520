function afunc(){
	var a = document.getElementById('uang').value;
	var x = document.getElementByName('currency');

	if(x[0].checked){
		var hasil = a*13500;
		alert("Rp," + hasil);
		document.getElementById('z').innerHTML = "Rp," + Math.round(hasil * 100)/100;
	}

	else if(x[1].checked){
		var hasil = a/13500;
		alert("$") + hasil);
		document.getElementById('z').innerHTML = '$' + Math.round(hasil * 100)/100;
	}
}