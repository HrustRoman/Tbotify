//176855388
 var request = new XMLHttpRequest();
      var URL = "https://api.telegram.org/bot";
      var Token = document.getElementById("token");

      var Method = "getUpdates";
      var Logger = document.getElementById("log");
function SendReq(){
    Logger.innerHTML='';
    if(Token.value==""){Materialize.toast("Введи токен!", 4000)}else{
    request.open('GET',URL+Token.value+"/"+Method, false);
    request.send();
    Materialize.toast('Успех!', 4000)}
    var data = JSON.parse(request.responseText)["result"];
    var Abort = false;
    function lastname(index){
        if(data[index].message.from.last_name !== undefined)return data[i].message.from.last_name;
        else return "";
    }
     function Replace(ii){
         ChatId.value="";
          
        if(data[ii].message.chat.type == "supergroup" || data[ii].message.chat.type == "group"){
           ChatId.value = "@"+data[ii].message.chat.username; 
        }else{
           ChatId.value = data[ii].message.from.id;
        }
        
    }
    function from(){
        if(data[i].message.chat.type == "supergroup" || data[i].message.chat.type == "group" || data[i].message.chat.type == "channel"){return data[i].message.chat.title}else{return "приват"}
    }
    function reply(){
        if(data[i].message.reply_to_message !== undefined&&data[i].message.reply_to_message !== "undefined"){return data[i].message.reply_to_message.text}else
        {return "<b>без ответа</b>"}
    }
    function User_name(){
        if(data[i].message.from.username !== undefined)return "@"+ data[i].message.from.username;
        else return "нет";
    }
    function GetQuery(){
        var BR = "<br>";
        var Name = "<b>Имя:</b> "+data[i].message.from.first_name+" "+lastname(i);
        var Username= "<b>Username:</b> "+User_name();
        var ID = "<b>ID:</b> "+data[i].message.from.id;
        var Msg = "<b>Сообщение:</b> "+data[i].message.text;
        var Reply_From="<b>Ответ на:</b> "+reply();
        var From =  "<b>Источник:</b> "+from();
        var Chat =  data[i].message.chat.username;
        return "Нажми для копирования ChatId или Username"+BR+
               Name+BR+
               Username+" "+ID+
               BR+BR+
               From+" @"+Chat+BR+
               Reply_From+BR+
               Msg;
    }


    for(var i = 0;i<data.length-1;i++){
        if(data[i].message.text === undefined){
           continue;
        }
      for(var i2=0;i2<i;i2++){
            if(data[i2].message.text==data[i].message.text) Abort= true;
        }
        if(Abort)continue;
       
        var ListItem = document.createElement("li");
        ListItem.className="collection-item";
        ListItem.setAttribute("usid",data[i].message.from.id);
        var LinkConstruction = "<a href=\"javascript: document.getElementById(\"ChatId\").value=\""+data[i].message.from.id+"\">"+data[i].message.from.id+"</a>";
        ListItem.innerHTML=GetQuery();
        ListItem.addEventListener("click",Replace.bind(null,i));
        Logger.appendChild(ListItem);
       
    }
  
    document.getElementById('get_data').innerHTML="Обновить";
    
    
}     
    
    document.getElementById('get_data').addEventListener("click", SendReq);
      
   
      function RetryRequest(updTime, Stop){
          setTimeout(updTime,SendReq);
          if(Stop)break; 
          alert("sended"+updTime);
          RetryRequest();
      }
      
 