let tasks = JSON.parse(localStorage.getItem('tasks')) || []
const wrappedTasks = document.querySelector('.list')
const buttonAdd = document.querySelector('#add').addEventListener("click", addTask)
const showBtn = document.querySelector('#showBtn').addEventListener('click', showTasks)
const input = document.querySelector('#input')
showTasks()
function showTasks() {
        wrappedTasks.textContent = ''
        tasks.forEach((element) => {
            const tasksLi = document.createElement('li')
            tasksLi.innerText = element
            wrappedTasks.appendChild(tasksLi)
    
            const checkButton = document.createElement('button')
            checkButton.type = 'button'
            checkButton.innerHTML = '<i class="fa-solid fa-check"></i>'
            checkButton.id = 'checkBtn'
            checkButton.addEventListener('click', () => {
                tasksLi.style.textDecoration = 'line-through'
                checkButton.style.display = 'none'
                tasksLi.style.color = '#6A888C'
                tasksLi.style.fontStyle = 'italic'
            })
            tasksLi.appendChild(checkButton)
    
            const removeButton = document.createElement('button')
            removeButton.type = 'button'
            removeButton.id = 'removeBtn'
            removeButton.innerText = 'Remover'
            removeButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    
            tasksLi.appendChild(removeButton)
            removeButton.addEventListener('click', () => {
                tasksLi.remove()
                tasks.splice(tasks.length -1, 1)
                localStorage.setItem('tasks', JSON.stringify(tasks))
            })
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    
function addTask() {
    if(input.value == ''){
        alert('Preencha o campo com alguma tarefa!')
    }else{
    tasks.push(input.value)
    input.value = ''
    input.focus()
}
}
