let inputTOdoElem = document.querySelector('.inputTOdo')
let btnSubmitTodoElem = document.querySelector('.btnSubmitTodo')
let counter = 0
let process = document.querySelector('.process')


process.addEventListener('click',()=>{
    console.log('in progress');

})


btnSubmitTodoElem.addEventListener('click',(e)=>{
    e.preventDefault()
    let formTodoPanelELEm = document.querySelector('.formTodoPanel')
    counter++
    formTodoPanelELEm.insertAdjacentHTML('beforeend', `
        <tbody>
          <tr>
            <th scope="row" class="counter">${counter}</th>
            <td class="my--todo">
              ${inputTOdoElem.value}
            </td>
            <td class="process">in-progress</td>
            <td class="removeBtn text-center" style="cursor: pointer">
              <i class="fa-solid fa-delete-left"></i>
            </td>
          </tr>
        </tbody>
    `)

    console.log(inputTOdoElem.value);
    inputTOdoElem.value = ''
})

