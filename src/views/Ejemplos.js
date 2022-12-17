import React from 'react'

function Ejemplos() {
  return (
    <div className='md:pb-12 pb-8 bg-white md:pt-16 pt-8 md:px-48 px-6'>
      <h1 className="md:mb-16 mb-6 text-2xl font-extrabold tracking-tight leading-none  text-gray-900 md:text-4xl ">
            El algoritmo detecta una desaceleración en la economía y la volatilidad en el mercado, pasándose de acciones a treasuries 
        </h1>

        <div className='md:grid md:grid-cols-2 flex flex-col items-center'>
        <div>
        <img
          
          className="h-auto block w-full"
          src={require("./../assets/fechainicial.png")}
          alt="image description"
        ></img>
      </div>
      <div>
      <h2  className="md:text-2xl text-base self-center md:px-32 px-6 py-4 font-bold ">
      Como resultado, Alphalytics evita la pérdida durante el periodo de contracción y comienza el periodo de expansión desde una base más alta  
        </h2>
        <h2  className="md:text-2xl text-base self-center md:px-32 px-6 py-4 font-bold ">
        En el 2007, el algoritmo prevé la desaceleración y contracción, evitando la pérdida de +50% que se dio durante La Gran Recesión 

        </h2></div>



        </div>
        
        <h1 className="md:mb-16 md:mt-20 mb-6 text-2xl font-extrabold tracking-tight leading-none  text-gray-900 md:text-4xl ">
        El algoritmo detecta una desaceleración en la economía y la volatilidad en el mercado, pasándose de acciones a treasuries 
        </h1>
        <div className='md:grid md:grid-cols-2 flex flex-col items-center'>
        <h2  className="md:text-2xl text-base self-center md:px-32 px-6 py-4 font-bold ">
        La volatilidad extrema de los primeros días de la pandemia gatilla el cambio a una posición defensiva, evitando la pérdida de +25%

        </h2>

        <div>
        <img
          className="h-auto w-full block"
          src={require("./../assets/fechafinal.png")}
          alt="image description"
        ></img>
      </div></div>
    
    
    
    
    </div>
  )
}

export default Ejemplos