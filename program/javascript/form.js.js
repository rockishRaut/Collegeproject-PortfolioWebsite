function validateform(){
	var fname = document.forms["myform"] ["First name"].value;
	var lname = document.forms["myform"] ["Last name"].value;
	var email = document.forms["myform"] ["Email"].value;
	var country = document.forms["myform"] ["country"].value;
	var subject = document.forms["myform"] ["subject"].value;



	if(Fname==""|| Lname==""|| email==""|| country==""|| subject==""){
		window.alert("please fill the form");
		return false;
	}else{
		window.alert(Fname+ "thanks for filling the form");
		return false;
	}
	
}