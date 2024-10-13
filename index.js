const getInputFieldValue=()=>{
    const inputField = document.getElementById("inputField");
    const inputFieldValue = inputField.value;
   
    displayTodoData(inputFieldValue);
     
}

const deleteTodo=(event)=>{
    event.target.parentNode.classList.add("hidden")

}

const displayTodoData=(inputFieldValue)=>{

    if(inputFieldValue===""){
        alert("please enter something:");
        return
    }
    const todoContainer = document.getElementById("todo-container");
    const div=document.createElement("div");
    todoContainer.innerHTML += `
        <div class="bg-gray-500 flex justify-between items-center p-2 rounded-xl">
                <h2 class="text-white font-bold text-[18px]">${inputFieldValue}</h2>
                 <button  onclick="deleteTodo(event)" class="btn">Delete</button>
            </div>
    `
    document.getElementById("inputField").value = ""
}