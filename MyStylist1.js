n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = "Today is: "+ m + "/" + d + "/" + y;


function Additem() {
  location.href ="Additem.html"
}