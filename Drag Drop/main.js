let box=document.getElementById("boxs")
let list=document.querySelectorAll(".list-group li")

let listElement
list.forEach(x=>x.ondragstart=function(event){
    listElement=this.innerHTML
    console.log(listElement)
})

box.ondragover=function(event){
    event.preventDefault()
}

box.ondrop=function(event){
    let p=document.createElement("p")
    p.innerHTML=listElement
    p.style.color="white";

    box.appendChild(p)
}