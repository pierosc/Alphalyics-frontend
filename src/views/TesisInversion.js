import React from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./TesisInversion.css";
function TesisInversion() {
  const [state, setState] = useState({
    series: [30, 15, 55],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Acciones", "Otros", "Bonos Corporativos"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 340,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      legend: {
        position: "bottom",
      },
      fill: {
        colors: ["#375DA1", "#A7B5DB", "#4472C4"],
      },
      colors:['#375DA1', '#A7B5DB', "#4472C4"]
    },
  });

  return (
    <>
      {/* <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
      <div className="container mx-auto"> */}
      <div className="flex bg-gray-200 flex-col pt-16 pb-32 md:px-32 px-6">
        <div>
          <h1  className="mb-8 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl ">
            La tesis de inversión de Alphalytics{" "}
          </h1>
          <h2  className="md:text-xl text-lg mb-12 font-bold ">
            El portafolio tradicional “toda temporada” tiene una visión estática
            de la economía. No rebalancea los pesos de los activos a pesar de
            los cambios en el ciclo económico. Las ganancias de algunos activos deben contrarrestar las pérdidas de otros.
          </h2>
        </div>
        <div className=" w-full md:grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 md:col-start-2 self-center items-center justify-center flex-col md:block flex ">
            <div className=" items-center ">
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="pie"
              // width={600}
            /></div>
          </div>
          <div  className="md:mt-0 mt-6 p-8 items-center md:col-span-5 md:col-start-8 bg-white border border-gray-200 rounded-3xl shadow-2xl self-center">
          <h2  className="md:text-lg text-base mb-4 md:mb-6 font-bold ">
              Pero sabemos que:
            </h2>
            <ul  className="space-y-1 text-base   list-disc list-inside text-gray-500">
              <li>
              Las acciones caen +25% en recesiones
              </li>
              <li>
              Los treasuries son el refugio durante esta fase del ciclo económico.
              </li>
              <li>
              Los bonos corporativos rinden menos que las acciones durante fases de expansión y caen durante las desaceleraciones.
              </li>
            </ul>
          </div>
        </div>
      {/* </div> */}
      </div>
      {/* </section>   */}
    </>
  );
}

export default TesisInversion;
