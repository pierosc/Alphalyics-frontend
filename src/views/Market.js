import React from 'react'

function Market() {
  return (
    <div className='flex flex-col items-center pt-8 bg-gray-400'>      
    {/* <h1  className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
MARKET
  </h1> */}
  <div  className="w-4/6 bg-white border border-gray-200 rounded-3xl shadow-2xl p-16 m-16">

          <h2  className="text-4xl mb-8 font-bold ">
          Incorporación de un socio gestor. La empresa está valorizada en US$ 85k. Se necesita un aporte de capital para: 
            </h2>
            <ul  className="space-y-1 text-2xl mb-8 list-disc list-inside text-gray-500">
              <li>
              Gastos legales de constitución de empresa gestora y patrimonio autónomo:  US$ 6k
              </li>
              <li>
              Alquiler de oficina, desarrollo de web y gastos de venta x 6 meses: US$ 24k (hasta seed round)
              </li>
            </ul>

          <h2  className="text-4xl mb-8 font-bold ">
          El mercado de salida será Perú
            </h2>
            <ul  className="space-y-1 text-2xl   list-disc mb-8 list-inside text-gray-500">
              <li>
              I Trim-2023: crear gestora de fondos de inversión e incorporar inversiones de Friends/Family al patrimonio autónomo
              </li>
              <li>
              II Trim -2023: ronda seed a una valorización mínima de US$ 1mm. Mínimo US$ 150k
              </li>
              <li>
              III Trim-2023: transformar a SAFI y desarrollará un aplicativo para inversionistas retail
              </li>
            </ul>

            <h2  className="text-4xl mb-8 font-bold ">
            Alphalytics usa productos registrados en todas las bolsas de MILA. Por tanto, el mercado en mediano plazo suma Chile, Colombia y México. 
            </h2>
            <ul  className="space-y-1 text-2xl   list-disc mb-8 list-inside text-gray-500">
              <li>
              Noviembre 2023, postular al Startup Chile. Abrir aplicativo en Chile en III trim 2024
              </li>
              <li>
              Noviembre 2023, postular a YCombinator y 500 Startups
              </li>
              <li>
              Migrar la empresa a EEUU
              </li>
            </ul>

            <h2  className="text-4xl mb-8 font-bold ">
            Recibir serie A en II trim 2024 en EEUU 
            </h2>
            <ul  className="space-y-1 text-2xl   list-disc mb-8 list-inside text-gray-500">
              <li>
              Abrir operaciones en México III Trim 2022
              </li>
              <li>
              Abrir operaciones en EEUU en III Trim 2025
              </li>
            </ul>

            <h2  className="text-4xl mb-8 font-bold ">
            Venta de la empresa en el IV Trim 2026. Mínima valorización US$ 50mm. Esperando US$ 150 mm. 

            </h2>

          </div>
</div>
  )
}

export default Market