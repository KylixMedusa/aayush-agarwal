function ajaxFunction(){
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
         
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var queryString = "name=" + name ;
 
    queryString +=  "&email=" + email + "&subject=" + subject + "&message=" + message;
    ajaxRequest.open("POST", "send_message.php", true);
    ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    console.log(queryString);
    ajaxRequest.send(queryString); 
 }