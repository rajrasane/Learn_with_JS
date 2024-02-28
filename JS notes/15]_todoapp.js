// A small practice project of creation of todo app which lets you -

// list - to show all todos
// add - to add a todo 
// delete - to delete a task 
// quit - to exit a todo 

let todo = [];

let enter = prompt("Pls Enter Your Request : ");

while(true){
    if((enter=="Quit") || (enter=="quit")){
        console.log("Quitting App...");
        break;
    }

    if((enter=="List") || (enter == "list")) {
        console.log("----------");
        for(let i = 0;i<=todo.length-1;i++){
            console.log(i , todo[i]);
        }
        console.log("----------");
    }
    
    else if((enter == "Add") || (enter=="add") ){
        let task = prompt("pls enter task you want to add");
        todo.push(task);
        console.log("Task Added")
    }

    else if((enter=="Delete") || (enter=="delete")){
        let inx = prompt("Pls Enter task index you want to remove!");
        todo.splice(inx , 1);
        console.log("task Deleted!");
    }
    else{
        console.log("Wrong Request!");
    }
    enter = prompt("Pls Enter Your Request : ");
}