function loadjson(file,callback) {
 var xhr = new XMLHttpRequest();
 xhr.overrideMimeType("application/json");
 xhr.open("Get",file,true);
 xhr.onreadystatechange = function(){
   if(xhr.readyState === 4 && xhr.status == "200"){
     callback(xhr.responseText);
   }
 };
 xhr.send(null);
}
loadjson("data.json",function(text)
{
  var data = JSON.parse(text);
  console.log(data);
  details(data.basic);
  careerinfo(data.career);
  educationdetails(data.education);
  skillset(data.technical);
})

var left = document.querySelector(".leftchild");
function details(det) {
  var image = document.createElement("img");
  image.src = det.image;
  left.appendChild(image);

  var name = document.createElement("h1");
  name.textContent = det.name;
  left.appendChild(name);

  var email = document.createElement("a");
  email.href = "mailto:jaswanthi@gmail.com";
  email.textContent = det.email;
  left.appendChild(email);

  var number = document.createElement("h2");
  number.textContent = det.number;
  left.appendChild(number);

  var add = document.createElement("h1");
  add.textContent = "Address:";
  left.appendChild(add);

  var hr = document.createElement("hr");
  left.appendChild(hr);

  var Address = document.createElement("h2");
  Address.textContent = det.Address;
  left.appendChild(Address);

}
var right = document.querySelector(".rightchild");
function careerinfo(infodata) {
  var add = document.createElement("h1");
  add.textContent = "Career Ojective:";
  right.appendChild(add);

  var hr = document.createElement("hr");
  right.appendChild(hr);

  var info = document.createElement("h2");
  info.textContent = infodata.info;
  right.appendChild(info);

}
function educationdetails(edu) {
  var add = document.createElement("h1");
  add.textContent = "Educational Qualifications:";
  right.appendChild(add);

  var hr = document.createElement("hr");
  right.appendChild(hr);

  var table1 = document.createElement("table");
  table1.border="1";
  var tr1 = "<tr><th>institute</th><th>degree</th><th>passout</th></tr>";
  var tr2 = "";

  for(var i=0;i<edu.length;i++){
    tr2+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passout+"</td></tr>";

  }
   table1.innerHTML = tr1+tr2;
   right.appendChild(table1);

}
function skillset(skill) {
  var s1 = document.createElement("h1");
  s1.textContent = "Technical Skills:";
  right.appendChild(s1);

  var hr = document.createElement("hr");
  right.appendChild(hr);

  var ul = document.createElement("ul");
  for(var i=0;i<skill.length;i++){
    var li=document.createElement("li");
    li.textContent=skill[i].title+":"+skill[i].data;
    ul.appendChild(li);
  }
right.appendChild(ul);
}
