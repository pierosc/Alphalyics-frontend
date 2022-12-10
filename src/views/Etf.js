import React from 'react'

function Etf() {
  return (
    <div className='md:pb-32 pb-8 bg-white md:pt-16 pt-8 md:px-48 px-6'>
      <h1 className="md:mb-16 mb-6 text-3xl font-extrabold tracking-tight leading-none  text-gray-900 md:text-5xl ">
    ¿Qué es un ETF?
  </h1>
  <div className='md:grid md:grid-cols-2 flex flex-col'>
  <div>
        <img
          
          className="h-auto hidden md:block w-full"
          src={require("./../assets/finanza1.jpeg")}
          alt="image description"
        ></img>
      </div>
      <h2  className="md:text-4xl text-2xl self-center md:px-32 px-6 py-4 font-bold ">
      Los ETF (Exchange-traded funds) son fondos de inversión pasivo que buscan replicar la performance de un índice comprando los valores que lo componen, en la misma proporción. 
 
        </h2>


        <h2  className="md:text-4xl text-2xl self-center md:px-32 px-6 py-4 font-bold ">
        El investment manager vende participaciones del ETF,  las que se cotizan en bolsa de manera similar a las acciones. 
        </h2>


        <div>
        <img
          className="h-auto md:w-full w-1/2 hidden md:block"
          src={require("./../assets/finanza2.jpeg")}
          alt="image description"
        ></img>
      </div>


        <div>
        <img
          className="h-auto md:w-full hidden md:block"
          src={require("./../assets/finanza3.jpeg")}
          alt="image description"
        ></img>
      </div>



        <h2  className="md:text-4xl text-2xl self-center md:px-32 px-6 py-4 font-bold ">
        Por ejemplo, comprar el IVV sería similar a comprar acciones de las 500 compañías en la proporción en la que participan en el índice S&P500.
        </h2>

        <h2  className="md:text-4xl text-2xl self-center md:px-32 px-6 py-4 font-bold ">
        Los ETF cobran menos comisiones que los fondos de inversión activos y pagan los dividendos o cupones correspondientes a los activos subyacentes, al igual que una acción o bono. 
        </h2>

        <div>
        <img
          className="h-auto w-full hidden mb-8 md:block"
          src={require("./../assets/finanza4.jpeg")}
          alt="image description"
        ></img>
      </div>


    </div></div>
  )
}

export default Etf