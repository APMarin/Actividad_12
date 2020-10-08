const activity =(tarea,duracion,callback) => {
    //console.log(tarea);
    setTimeout(()=>{
        callback(tarea)
    },duracion)
    
}

activity("1. Comprar Bicicleta",5000,(tarea)=> {
    console.log("Tarea: " + tarea)
    activity("2. Comprar Casco",1000,(tarea)=> {
        console.log("Tarea: " + tarea)
        activity("3. Comprar guantes",2000,(tarea)=> {
            console.log("Tarea: " + tarea)
            activity("4. Ir de paseo en bici",8000,(tarea)=> {
                console.log("Tarea: " + tarea)
            })
        })
    })
    
})