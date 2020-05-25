let btnAdd=document.getElementById("addbutn");

let tasklist=document.getElementById("tasklist");


let newTask=document.getElementById("newTask");



btnAdd.onclick=()=>
{
    //console.log(newTask.value);
  const newItem=document.createElement('li');
  //newItem.textContent=newTask.value;


  let xbtn=document.createElement('button');
  xbtn.innerText='x'
  xbtn.onclick=(event)=>
  {
    event.target.parentElement.remove();
  }

  let taskSpan=document.createElement('span');

  let upBtn=document.createElement("button");
  upBtn.innerText="⬆ ";

  taskSpan.innerText=newTask.value;

 upBtn.onclick=function(event)
 {
    event.target.parentElement.parentElement.insertBefore(
      event.target.parentElement,event.target.parentElement.previousElementSibling
    )
 }

 let downBtn=document.createElement("button")

 downBtn.innerText="⬇ ";
// event.target.parentElement  is the <li> tag
// event.target.parentElement.parentElement is the todolist:
 downBtn.onclick=function(event)
 {
   try
   {
     event.target.parentElement.parentElement.insertBefore(
    event.target.parentElement.nextElementSibling,
    event.target.parentElement
   )
    }
    catch(e)
    {
      //console.log(e);
      window.alert("last element pe nahi hoga bro");
      
    }
 }
  newItem.appendChild(upBtn);
  newItem.appendChild(downBtn);
  newItem.appendChild(xbtn);

  newItem.appendChild(taskSpan);
  tasklist.appendChild(newItem);













    // tasklist.innerHTML+='<li>'+newTask.value+ ' </li>'
    
}