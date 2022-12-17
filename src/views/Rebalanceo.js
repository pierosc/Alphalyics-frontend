import React from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./Rebalanceo.css";
function Rebalanceo() {
  const [state, setState] = useState({
    series: [30, 70],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Treasuries", "Acciones"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
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
        colors: ["#77a759", "#accb9d"],
      },
      colors:['#77a759', '#accb9d']
    },
  });
  const [state2, setState2] = useState({  
    series: [100, 0],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Acciones", "Treasuries"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
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
        colors: ["#a1c490"],
      },
      colors:['#a1c490','#ffffff']
    },
  });
  const [state3, setState3] = useState({
    series: [50, 50],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Acciones", "Treasuries"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
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
        colors: ["#e2aa00", "#ffd184"],
      },
      colors:['#e2aa00', '#ffd184']
    },
  });
  const [state4, setState4] = useState({
    series: [100, 0],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Treasuries", "Acciones"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
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
        colors: ["#d26e2a"],
      },
      colors:['#d26e2a','#ffffff']
    },
  });

  return (
    <> <div className="md:px-32 px-6 pt-16 bg-white">
      <h1  className="mb-8 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl ">
      Alphalytics rebalancea los pesos de los activos de su portafolio durante la evolución del ciclo económico. 
      </h1>
      <h2  className="md:text-2xl text-xl md:mb-16 mb-6 font-bold ">
      Así evita las caídas de las acciones durante recesiones y maximiza la rentabilidad durante la fase de expansión.
      </h2>

      <div className="grid md:grid-cols-3 md:gap-32 gap-6 md:pb-32 pb-6">

        {/* <div  className="flex flex-col items-center  bg-white border border-gray-200 rounded-2xl shadow-md ">
          <div className="verdeclaro  flex flex-col items-center w-full pb-8 border border-gray-200 rounded-t-2xl">
            <div  className="p-5">
              <h4  className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900 ">
                Recuperación
              </h4>
            </div>
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="pie"
              width={320}
            />
          </div>
          <div  className="p-5 ">
            <h5  className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900 ">
            Modo expectante:

            </h5>
            <h5  className="mb-2 md:text-2xl text-base font-bold tracking-tight text-gray-900 ">
Reingresa a acciones a precios descontados

            </h5>
          </div>
        </div> */}

        <div  className="justify-self-center md:w-3/4  flex flex-col items-center  bg-white border border-gray-200 rounded-2xl shadow-md ">

          <div className="verdeoscuro flex flex-col items-center  w-full pb-8 border border-gray-200 rounded-t-2xl">
            <div  className="p-5">
              <h4  className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900  ">
                Expansión
              </h4>
            </div>
            <ReactApexChart
              options={state2.options}
              series={state2.series}
              type="pie"
              width={320}
            />
          </div>
          <div  className="p-5">
            <h5  className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900  ">
              Modo ofensivo:
            </h5>
            <h5  className="mb-2 md:text-2xl text-base font-bold tracking-tight text-gray-900  ">
  Maximiza el crecimiento del portafolio
            </h5>
          </div>
        </div>

        <div  className="justify-self-center flex md:w-3/4  flex-col items-center  bg-white border border-gray-200 rounded-2xl shadow-md ">
          <div className="amarillo flex flex-col items-center w-full pb-8 border border-gray-200 rounded-t-2xl">
            <div  className="p-5">
              <h4  className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900  ">
              Desaceleración
              </h4>
            </div>
            <ReactApexChart
              options={state3.options}
              series={state3.series}
              type="pie"
              width={320}
            />
          </div>
          <div  className="p-5">
            <h5  className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900  ">
            Modo neutro: 
            </h5>
            <h5  className="mb-2 md:text-2xl text-base font-bold tracking-tight text-gray-900  ">
Reduce volatilidad ante incertidumbre
            </h5>
          </div>
        </div>

        <div  className="justify-self-center md:w-3/4 flex flex-col items-center  bg-white border border-gray-200 rounded-2xl shadow-md ">
          <div className="rosado flex flex-col items-center w-full pb-8 border border-gray-200 rounded-t-2xl">
            <div  className="p-5">
              <h4  className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900  ">
              Contracción
              </h4>
            </div>
            <ReactApexChart
              options={state4.options}
              series={state4.series}
              type="pie"
              width={320}
            />
          </div>
          <div  className="p-5">
            <h5  className="mb-2 md:text-2xl text-xl font-bold tracking-tight text-gray-900  ">
            Modo defensivo: 

            </h5>
            <h5  className="mb-2 md:text-2xl text-base font-bold tracking-tight text-gray-900  ">
Evita perder dinero en acciones 

            </h5>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Rebalanceo;
