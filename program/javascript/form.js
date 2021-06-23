function validateform(){
	var fname = document.forms["myform"] ["firstname"].value;
	var lname = document.forms["myform"] ["lastname"].value;
	var email = document.forms["myform"] ["email"].value;
	var country = document.forms["myform"] ["country"].value;
	var subject = document.forms["myform"] ["subject"].value;



	if(fname==""|| lname==""|| email==""|| country==""|| subject==""){
		window.alert("please fill the form");
		return false;
	}else{
		window.alert(fname +" thanks for filling the form");
		return false;
	}
	
}