let elDone = document.querySelector("#done");
let elInput = document.querySelector("#input");
let elErorText = document.querySelector("p")  

let arrLogins = [1234, 8855, 4433, 5566, 2700, 8833, 8822, 4568, 2001, 2211];


elDone.addEventListener("click", function (e) {
  e.preventDefault()
  
  let elInputVal = Number(elInput.value)
  let elInputValLen = elInput.value.length

  if (arrLogins.includes(elInputVal) && elInputVal == Number(elInput.value) && elInputValLen == 4) {
    console.log("togri");
    elErorText.style.display = "none";
    elInput.style.borderColor = "black";
    window.open("main.html")

  }
  else {
    elInput.style.borderColor = "red";
    elInput.value = "";
    elErorText.style.display = "block";
    
  }
 

})