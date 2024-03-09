console.log("Connected")

function getFormData() {
    var price = document.getElementById("price");
    localStorage.setItem('price', price.value);
    var storage = localStorage.getItem("price");
    var element = document.createElement("p")
    element.appendChild(document.createTextNode(storage))
    document.body.appendChild(element)

}