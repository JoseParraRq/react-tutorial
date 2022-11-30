
const button = document.getElementById("form");
button?.addEventListener("submit", function submitEvent(event){
  let type = document.getElementById("UserType").value;
  console.log(type);
  let typeJson = JSON.stringify(type);
  event.preventDefault ();

 let  id = fetch('http://localhost:3000/user').then(x=>x.json()).then(console.log);
}
)