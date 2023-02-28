    
    //Función para rescatar los datos cargados en el form del html de realTimeProducts    
    function Agregar () {                    
        let muestratitle = document.getElementById("idtitle").value;
        let muestradescription = document.getElementById("iddescription").value;
        let muestracode = document.getElementById("idcode").value;
        let muestraprice = document.getElementById("idprice").value;
        let muestrastatus = document.getElementById("idstatus").value;
        let muestrastock = document.getElementById("idstock").value;
        let muestracategory = document.getElementById("idcategory").value;
        let muestrathumbnail = document.getElementById("idthumbnail").value;
    
        // carga de datos a enviar al servidor.
        let envProd = {title: muestratitle, 
            description: muestradescription,  
            code: muestracode, 
            price: muestraprice,      
            status: muestrastatus,
            stock: muestrastock, 
            category: muestracategory,
            thumbnail: muestrathumbnail
        }                     
                  
        // enviando datos al servidor
        const socket = io()
            socket.emit('mensaje', "hola me estoy conectando")    
            socket.emit('mi-envio',         
            envProd    
        )
        
        Cancelar()        
    }        

    function Cancelar() {
        document.getElementById("idtitle").value = "";
        document.getElementById("iddescription").value = "";
        document.getElementById("idcode").value = "";
        document.getElementById("idprice").value = "";
        document.getElementById("idstatus").value = "";
        document.getElementById("idstock").value = "";
        document.getElementById("idcategory").value = "";
        document.getElementById("idthumbnail").value = "";
    }