import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates, orderDates } from "../services/date.js";

export const displayTasks = () => {
    const list = document.querySelector('[data-list]');
    console.log(list);
    
    const tasksList = JSON.parse(localStorage.getItem('tasks')) || [];
    const fechas = uniqueDates(tasksList);
    const order = orderDates(fechas);

    fechas.forEach((fecha) => {
        const dateMoment = moment(fecha, "DD/MM/YYYY");
        list.appendChild(dateElement(fecha));

        tasksList.forEach((task) => {
            const taskDate = moment(task.fechaFormato, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate);
            
            if(diff == 0){
                list.appendChild(createTask(task));
            }
        });
    });
}