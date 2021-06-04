function myFunction() 
{
	alert("Registered successfully!");
	return true;
}

function na()
{
//radio button salutation
var radios = document.getElementsByName("salutation");
var formValid = false;
var i = 0;
while (!formValid && i < radios.length) 
{
	if (radios[i].checked) 
		formValid = true;
	i++;        
}
if (!formValid) 
  alert("Fill out the previous fields first");
}

function usr()
{
	//name
	var x = document.getElementById("fname").value;
    var regex=/^[A-Z]\s[a-zA-Z]+\s?[a-zA-Z]*$/;
    if(x=="")
    	alert("Fill out the previous fields first");
	else if(regex.test(x) == false)
	  alert("Wrong format of name");
}

function password()
{
//username
var x = document.getElementById("user").value;
var regex=/^[A-Za-z]*$/;
if(x=="")
    	alert("Fill out the previous fields first");
	else if(regex.test(x) == false)
	  alert("Wrong format of username");
}

function email()
{

//password
var x = document.getElementById("pw").value;
var regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
if(x=="")
    	alert("Fill out the previous fields first");
else if(regex.test(x) == false)
	  alert("Wrong format of password");
}


function date_b()
{
//email
var x = document.getElementById("em").value;
var regex=/^.+@.+\.(org|net|com|in)$/;
if(x=="")
    	alert("Fill out the previous fields first");
else if(regex.test(x) == false)
	  alert("Wrong format of email ID");
}

function sel_img()
{
//dob
var dob = new Date(document.getElementById("dob").value); 
var yr = new Date(Date.now());
var diff=yr.getFullYear()-dob.getFullYear();
if( diff<18 )
	{
	alert("Age should be between 18 and 35");
	}
}

function additional()
{
//languages known
var checks = document.getElementsByName("lk");
var i = 0;
var count=0;
while (i < checks.length) 
{
	if (checks[i].checked) 
		count++;
	i++;        
}
if(count<2)
{
  alert("select atleast 2 languages");
  return false;
}
}

