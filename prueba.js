const data = new Date()

const dataOptions = {
    /*weekend: 'long',*/
    year: 'numeric',
    month:'long',
    day: 'numeric'
}

const horarioOptions = {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit', 
    timeZone: 'America/Santiago'
}

console.log(data.toLocaleDateString('es-MX', dataOptions))

console.log(data.toLocaleTimeString('es-MX', horarioOptions))

console.log("holi")

console.log(data.toLocaleString('es-MX', {...dataOptions, ...horarioOptions}))

const formataData = new Intl.DateTimeFormat('es-MX', {
    ...dataOptions,
    ...horarioOptions
})

formataData.format(data)