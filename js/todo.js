const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos)); //json 사용해서 배열 형태로 저장함
}



function deleteToDo(event){
   const li = event.target.parentElement;// target은 html의 구성요소이고 parentelement를 통해서 구분가능
   li.remove();
   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));  ///!!!!!!!!!!!!!!!!! 지워줌 id값으로 
   saveToDos();
}

//화면에 출력
function paintTodo(newTodo) {
    const li = document.createElement("li"); //li생성
    const span = document.createElement("span"); //span 생성
    li.id = newTodo.id;
    //버튼생성
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    span.innerText = newTodo.text; //텍스트를 span안에 넣음
    li.appendChild(span);//span을 li에 넣음 append은 맨 마지막에 있어야함.
    li.appendChild(button);//버튼을 li안에 넣음.
    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = { //obj 생성. 텍스트대신 넣으려고
      text:newTodo,
      id: Date.now(), //id값을 주려고
  };
  toDos.push(newTodoObj); //배열에 저장
  paintTodo(newTodoObj);
  saveToDos();
}



toDoForm.addEventListener("submit", handleToDoSubmit);

/*
function sayHello(item){
    console.log("this is the turn off item", item);
}
*/
const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo); //foreach 함수는 paintTodo 함수를 parsedToDos배열의 요소마다 실행함 
}


