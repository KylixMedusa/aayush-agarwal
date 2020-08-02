function ajaxFunction(){
   console.log("working");
    var ajaxRequest;  // The variable that makes Ajax possible!
    
    try {
       // Opera 8.0+, Firefox, Safari
       ajaxRequest = new XMLHttpRequest();
    }catch (e) {
       // Internet Explorer Browsers
       try {
          ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
       }catch (e) {
          try{
             ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
          }catch (e){
             // Something went wrong
             alert("Your browser broke!");
             return false;
          }
       }
    }
    
    // Create a function that will receive data 
    // sent from the server and will update
    // div section in the same page.
         
    ajaxRequest.onreadystatechange = function(){
       if(ajaxRequest.readyState == 4){
          var ajaxDisplay = document.getElementById('ajaxDiv');
          ajaxDisplay.innerHTML = ajaxRequest.responseText;
       }
    }
    
    // Now get the value from user and pass it to
    // server script.
         
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');
    
    var queryString = "name=" + name.value ;
 
    queryString +=  "&email=" + email.value + "&subject=" + subject.value + "&message=" + message.value;
    name.value=null;
    email.value=null;
    subject.value=null;
    message.value=null;
    ajaxRequest.open("POST", "send_message.php", true);
    ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    console.log(queryString);
    ajaxRequest.send(queryString); 
 }