const selectElement = document.getElementById("color");
const resultElement = document.getElementById("result");
selectElement.addEventListener("change",()=>{
	resultElement.textContent = selectElement.value
})