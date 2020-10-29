let todo="";

const handleOnChange=(e)=>{
    todo=e.target.value
}

const handleAddTodo=()=>{
    document.getElementById('main').innerHTML += `<h3 id>${todo}</h3>`   
}
