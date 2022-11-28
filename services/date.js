export const uniqueDates = (tasks) => {
    const unique = []

    tasks.forEach((task) => {
        if(!unique.includes(task.fechaFormato)){
            unique.push(task.fechaFormato);
        }
    });

    return unique;
}

export const orderDates = (fechas) => {
    return fechas.sort((a, b) => {
        const firstDate = moment(a, "DD/MM/YYY");
        const secondDate = moment(b, "DD/MM/YYY");
        return firstDate - secondDate;
    })
}