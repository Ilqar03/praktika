document.getElementById("mybtn").addEventListener("click",function() {
    let ul=document.createElement("ul")

    let li1=document.createElement("li")
    li1.innerText=document.getElementById("ad").value
    li1.style.color="red"
    let li2=document.createElement("li")
    li2.innerText=document.getElementById("soyad").value
    li2.style.color="blue"
    let li3=document.createElement("li")
    li3.innerText=document.getElementById("tarix").value
    li3 .style.color="green"
    ul.append(li1,li2,li3)
    document.getElementById("md").append(ul)
    ul.style="list-style: none;"
    
})

