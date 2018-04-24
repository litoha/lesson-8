var button = document.getElementsByTagName('button');
var block = document.getElementsByClassName('block');

button.addEventListener('click', getUsers, false); 

function getUsers(){  

var xhr = new XMLHttpRequest();
xhr.open('GET','https://reqres.in/api/users?page=2',true);
xhr.onload = function(){
    var usersData = JSON.parse(this.response).data;
    localStorage.setItem('usersData', usersData);
  }
xhr.onerror = function() {
  showError();
}
xhr.send();  
}
function showError(){
  block.innerHTML = '<div class="error">'ERROR'</div>';
}

block.innerHTML = '<div class="tabs"></div><div class="info-block"></div>';  
var tabs = block.getElementsByClassName('tabs');
var infoBlock = block.getElementsByClassName('info-block');

usersData.forEach(function(user,i)){
  tabs.innerHTML += '<div class="tab"+id="'+i+'">'+'user'+i+'</div>'
  infoBlock.innerHTML += '<div class="info">'+'<img src="'+avatar+'">'+'<p>'+'FirstName'+first_name+'</p>'+'<p>'+'LastName'+last_name+'</p>'+'</div>';           
                  
}


