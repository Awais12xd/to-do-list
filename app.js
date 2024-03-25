let inputBox = document.querySelector(".input-box");
let addBtn = document.querySelector(".input-data button");
let list = document.querySelector(".list-container ul")



let creatLi = () => {
    let  li = document.createElement("li");
    list.appendChild(li);
    li.innerHTML = inputBox.value;
    let span = document.createElement("span");
    li.appendChild(span);
    span.innerText = "+";

}

addBtn.addEventListener("click" , () => {
    if(inputBox.value === ""){
        alert("You must have to write something")
    }else {

        creatLi();
        
    }
    store();
    inputBox.value = "";
    
}) ;
let check = true;
list.addEventListener("click" , (e) => {
    console.log(e.target.tagName);
    
        if(e.target.tagName === "LI"){
            
            if(check === true){
                let li = e.target;
                li.setAttribute("class", "checked");
                check = false;
            }else if(check === false) {
                let li = e.target;
                li.removeAttribute("class", "checked");
                check = true;
            }
          store();
        } else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            store();
        }
        
});
let store = ()=>{

    localStorage.setItem( "DATA" , list.innerHTML);
}
let show = () => {
    list.innerHTML = localStorage.getItem("DATA");
}
show();
 
 