import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

export const addTask = (evento) => {
    evento.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendario = document.querySelector('[data-form-date]');

    const value = input.value;
    const fecha = calendario.value;
    const fechaFormato = moment(fecha).format('DD/MM/YYYY');

    if( value == "" || fecha == ""){
        return;
    }
    
    input.value = '';
    calendario.value = "";

    const completado = false;

    const taskObj = {
        value,
        fechaFormato,
        completado,
        id: uuid.v4()
    }

    list.innerHTML = "";

    const taskLista = JSON.parse(localStorage.getItem("tasks")) || [];
    taskLista.push(taskObj);
    localStorage.setItem("tasks", JSON.stringify(taskLista));

    displayTasks();
};
  
  
export const createTask = ({value, fechaFormato, completado, id}) => {
    const task = document.createElement('li');
    task.classList.add('card');
    
    const taskContent = document.createElement('div');
    const check = checkComplete(id);

    if(completado){
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }

    const titleTask = document.createElement('span');
    titleTask.classList.add('task');
    titleTask.innerText = value;
    taskContent.appendChild(check);
    taskContent.appendChild(titleTask);
    
    const fechaElemento = document.createElement("span");
    fechaElemento.innerHTML = fechaFormato;
    task.appendChild(taskContent);
    task.appendChild(fechaElemento)
    task.appendChild(deleteIcon(id));
    
    return task;
  };