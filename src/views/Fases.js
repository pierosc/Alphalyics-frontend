import React from "react";
import "./Fases.css";
function Fases() {

  return (
    <div className=" pd-8 md:pb-32 pt-16 px-6 md:px-32">
      <h1 className="mb-8 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
        El algoritmo determina la fase del ciclo usando variables
        fundamentales y estratégicas
      </h1>
      <h2 className="text-2xl md:text-4xl md:mb-36 mb-6 font-bold  text-gray-900 ">
        Porcentaje de los días de trading
      </h2>

      <div className="grid md:grid-cols-4 gap-12">

        <div className="flex flex-col verdeclaro items-center max-w-sm border p-6 border-gray-200 rounded-2xl shadow-2xl">
          <h1 className="mb-4 text-6xl font-extrabold tracking-tight leading-none text-gray-900 md:text-8xl  ">
            4.4%
          </h1>
          <h5 className="mb-2 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 ">
            El patrón de cambios en el Leading Economic Index (LEI) indica que
            la economía toco fondo y comienza a salir de la recesión
          </h5>
        </div>

        <div className="flex flex-col verdeoscuro items-center max-w-sm border p-6 border-gray-200 rounded-2xl shadow-2xl">
          <h1 className="mb-4 text-6xl font-extrabold tracking-tight leading-none text-gray-900 md:text-8xl ">
            69.4%
          </h1>
          <h5 className="mb-2 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 ">
            El patrón de cambios en el LEI indican que la economía está en plena
            expansión
          </h5>
        </div>

        <div className="flex flex-col amarillo items-center max-w-sm border p-6 border-gray-200 rounded-2xl shadow-2xl">
          <h1 className="mb-4 text-6xl font-extrabold tracking-tight leading-none text-gray-900 md:text-8xl  ">
            13.4%
          </h1>
          <h5 className="mb-2 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 ">
            Los cambios negativos en el LEI o el nivel de expectativas del
            consumidor indican que la economía se está desacelerando
          </h5>
        </div>

        <div className="flex flex-col rosado items-center max-w-sm border p-6 border-gray-200 rounded-2xl shadow-2xl">
          <h1 className="mb-4 text-6xl font-extrabold tracking-tight leading-none text-gray-900 md:text-8xl  ">
            12.8%
          </h1>
          <h5 className="mb-2 text-2xl md:text-3xl font-bold tracking-tight text-gray-900 ">
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
