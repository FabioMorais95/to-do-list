const btnAdd = document.querySelector('#add').addEventListener('click', addTask)
input.focus()
function addTask(){
    if(input.value == ''){
        alert('Digite alguma tarefa no campo!')
    }else{
        const input = document.querySelector('#input').value
        const ul = document.querySelector('.list')
        const taskLi = document.createElement('li')
        taskLi.innerHTML = input
        document.querySelector('#input').value = ''
        ul.appendChild(taskLi)

        const checkButton = document.createElement('button')
        checkButton.type = 'button'
        checkButton.innerHTML = '<i class="fa-solid fa-check"></i>'
        checkButton.id = 'checkBtn'

        taskLi.appendChild(checkButton)

        checkButton.addEventListener('click',()=>{
            taskLi.style.textDecoration = 'line-through'
            checkButton.style.display = 'none'
            taskLi.style.color = '#6A888C'
            taskLi.style.fontStyle = 'italic'
        })
        const removeButton = document.createElement('button')
        removeButton.type = 'button'
        removeButton.id = 'removeBtn'
        removeButton.innerText = 'Remover'
        removeButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>'

        taskLi.appendChild(removeButton)
        removeButton.addEventListener('click', ()=>{
            taskLi.remove()
        })
    }
    
}
