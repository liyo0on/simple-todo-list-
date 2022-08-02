let inputTOdoElem = document.querySelector('.inputTOdo')
let btnSubmitTodoElem = document.querySelector('.btnSubmitTodo')
let counter = 0



btnSubmitTodoElem.addEventListener('click',(e)=>{
  e.preventDefault()
  let formTodoPanelELEm = document.querySelector('.formTodoPanel')
  if(inputTOdoElem.value === '') alert('need enter todo')
  else{
    counter++
    formTodoPanelELEm.insertAdjacentHTML('beforeend', `
    <tbody>
    <tr>
    <th scope="row" class="counter">${counter}</th>
    <td class="my--todo">
    ${inputTOdoElem.value}
    </td>
    <td style="cursor: pointer;">
              <h6 class="process ">
                in-progress
              </h6>
            </td>
    <td class="removeBtn text-center" style="cursor: pointer">
    <i class="fa-solid fa-delete-left"></i>
    </td>
    </tr>
    </tbody>
    `)
  }
  
  let removeElem = document.querySelectorAll('.fa-delete-left')
  
  // console.log(inputTOdoElem.value);
  inputTOdoElem.value = ''

  removeElem.forEach((e) => {
    e.addEventListener('click',(e)=>{
      e.target.parentElement.parentElement.remove()
      
    })
  });


  
  let process = document.querySelectorAll('.process')
  
  
  console.log(process);
  process.forEach((e)=>{

    e.addEventListener('click', (e)=>{
     e.target.innerHtml = "kire khar";
    })
  })

})
  
