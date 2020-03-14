function display(form){
	if (form.uname.value=="root") { 
		if (form.psw.value=="root") {         
				alert ("Login successfully");
				window.location = "record.html";
				return false;
			} else {
				alert("Invalid Password");
			}
	} else {  
		alert("Invalid Username");
	}
}
