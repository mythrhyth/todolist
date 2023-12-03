const inputField = document.querySelector(".input-field textarea");
let todoLists = document.querySelector(".todoLists"); 
let pendinNum = document.querySelector(".pending-nums");
let clearButton = document.querySelector(".clear-button");
//calling function on adding deleting checking and unchecking the todo list
function allTasks(){
    let tasks = document.querySelectorAll(".pending"); 
    console.log(tasks);
    pendinNum.textContent = tasks.length === 0? "no": tasks.length;
}


//add task while we put valye in text area
inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim();
    //if enter btn is clicked and the writtentext is greater than 0
    if(e.key === "Enter" && inputVal.length > 0){
        let liTag = `<li class = "list pending" onclick = "handleStatus(this)">
        <input type = "checkbox">
        <span class = "task">${inputVal}</span>
        <i class = "uil uil-trash trash-icon" onclick = "deleteTask(this)"></i>
    </li>`;
    todoLists.insertAdjacentHTML("beforeend", liTag); //inserting li tag inside the list
    inputField.value = "";
    allTasks();
    }
   
});
 //checking and unchecking checkbox
 function handleStatus(e){
    const checkbox = e.querySelector("input");
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}
//deleting all tasks when we click on clear button
clearButton.addEventListener("click", ()=>{
    todoLists.innerHTML = ""; 
    allTasks(); 
})
//deleting items when we click on delete button
function deleteTask(e){
    e.parentElement.remove();
    allTasks();
}