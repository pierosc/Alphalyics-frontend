import React from "react";

function Fases() {
  return (
    <div className="mb-32">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        El algoritmo para determinar la fase del ciclo usa variables
        fundamentales y estratégicas
      </h1>
      <h2 className="text-4xl mb-36 font-bold dark:text-white">
        Porcentaje de los días de trading
      </h2>

      <div className="flex justify-around">
        <div className="flex flex-col items-center max-w-sm ">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-9xl lg:text-9xl ">
            4.4%
          </h1>
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 ">
            El patrón de cambios en el Leading Economic Index (LEI) indica que
            la economía toco fondo y comienza a salir de la recesión
          </h5>
        </div>

        <div className="flex flex-col items-center max-w-sm ">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-9xl lg:text-9xl ">
            69.4%
          </h1>
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 ">
            El patrón de cambios en el LEI indican que la economía está en plena
            expansión
          </h5>
        </div>

        <div className="flex flex-col items-center max-w-sm ">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-9xl lg:text-9xl ">
            13.4%
          </h1>
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 ">
            Los cambios negativos en el LEI o el nivel de expectativas del
            consumidor indican que la economía se está desacelerando
          </h5>
        </div>

        <div className="flex flex-col items-center max-w-sm ">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-9xl lg:text-9xl ">
            12.8%
          </h1>
          <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 ">
            La magnitud de los cambios negativos en el LEI indican la llegada de
            la recesión. Los niveles altos del VIX indican extrema volatilidad
            en el mercado de acciones
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Fases;
