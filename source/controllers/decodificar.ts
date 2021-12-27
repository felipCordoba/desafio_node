import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Decodificar {
    codigo: String;
}




// getting all posts
const getTexto = async (req: Request, res: Response, next: NextFunction) => {
    // get some posts
    let id: string = req.params.texto;
    let options = "1234567890!#$%&/()][{}=?¿~¡@°+*<>-_.:;¬^";
    var size = id.length;
    var filasAprox = 0;
    var columnas = 5;
    var respuesta = "";
    
    if(id.length > 0 || id!==""){
        for(var i = 0; i<id.length; i++){
            var randomInt = Math.random() * (options.length - 1) + 1;
            var caracterAleatorio = options.charAt(randomInt);
            var valorEntero =  Math.floor(Math.random()*(0-id.length+1)+id.length);
			id = id.substring(0, valorEntero) + caracterAleatorio +id.substring(valorEntero);

        }
    }

    filasAprox = Math.round(id.length/5)+1;
	

    var matriz = new Array(2);
    matriz[0] = new Array(filasAprox);
    matriz[1] = new Array(columnas);

			
			var aux = 0;
			//Creamos la matriz y empezamos a recorrer cada caracter de la cadena TEXTO, se añaden en la matriz por filas
			for(var y = 0; y<columnas; y++) {
				for(var x = 0; x <filasAprox; x++) {					
						matriz[x][y]=id.charAt(aux);
				}
				aux++;
			}
			
            aux = 0;
			//Al finalizar la creacion y el llenado de informacion a la matriz vamos a imprimirla en la variable respuesta recorriendo la matriz y agregando el salto de linea a los primeros 5 caracteres
			for(var i = 0; i<matriz.length;i++){
				for(var j= 0; j<columnas;j++) {
					aux++;
					respuesta += matriz[i][j];
					if(aux ==columnas) {
						aux=0;
						respuesta +="\r\n";
					}
				}
				
			}
			// Eliminamos el ultimo salto de linea a la respuesta 
			respuesta = respuesta.substring(0,respuesta.length-3);
    
    
    return res.status(200).json({
        message: respuesta
    });
};



export default { getTexto };