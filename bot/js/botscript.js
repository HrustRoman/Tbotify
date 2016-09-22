 
      var request = new XMLHttpRequest();
      var URL = "https://api.telegram.org/bot";
      var Token = document.getElementById("token");
      var Methody = "sendMessage";
      var chat_id = document.getElementById("ChatId");
      var message = document.getElementById("Message");
      function fadeout(id){
            document.getElementById(id).style.visibility="hidden";
      }
      function Send(){
         if(Token.value==""){
         Materialize.toast('Перед отправкой введи токен!!', 4000);
         }
         
         request.open('GET',URL+Token.value+"/"+Methody+"?chat_id="+chat_id.value+"&text="+message.value, false);
         request.send(); 

         if (JSON.parse(request.responseText)["ok"] != true) {
         Materialize.toast(+request.status+' '+request.statusText,4000); 
         if(chat_id.value==""){
         Materialize.toast('Перед отправкой введи ID чата или Username канала!!', 4000)
         if(message.value==""){
         Materialize.toast("Перед отправкой введи сообщение!!",4000);
         }
         }
         
         } else {
         Materialize.toast('Сообщение отправлено', 4000);
         message.value="";
      }
  }   
        document.getElementById("sbmt").addEventListener("click", Send);
         function getMe(){
         var request2 = new XMLHttpRequest();
         request2.open('GET',URL+Token.value+"/"+"getMe", false);
         request2.send();
         document.getElementById("logo-container").innerHTML="Username: @"+JSON.parse(request2.responseText).result.username+"; Имя: "+JSON.parse(request2.responseText).result.first_name;
         //document.getElementById("result_info").style.visibility="visible";
         }
          document.getElementById("get_data").addEventListener("click", getMe);
  
  function upload(file) {
  if(file != "undefined"){
  var xhr = new XMLHttpRequest();

  // обработчик для закачки
  xhr.upload.onprogress = function(event) {
    log(event.loaded + ' / ' + event.total);
  }

  // обработчики успеха и ошибки
  // если status == 200, то это успех, иначе ошибка
  xhr.onload = xhr.onerror = function() {
    if (this.status == 200) {
      log("success");
    } else {
      log("error " + this.status);
    }
  };

  xhr.open("POST", "", true);
  xhr.send(file);
  }
}
   var file = document.getElementById("").files[0]