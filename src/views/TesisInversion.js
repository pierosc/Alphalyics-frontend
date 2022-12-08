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
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      fill: {
        colors: ["#375DA1", "#A7B5DB", "#4472C4"],
      },
    },
  });

  return (
    <>
      <div className="flex page flex-col pt-16 pb-32 px-32">
        <div>
          <h1 class="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            La tesis de inversión de Alphalytics{" "}
          </h1>
          <h2 class="text-4xl mb-12 font-bold ">
            El portafolio tradicional “toda temporada” tiene una visión estática
            de la economía. No rebalancea los pesos de los activos a pesar de
            los cambios en el ciclo económico. Las ganancias de algunos activos
            deben contrarrestar la pérdida de otras.
          </h2>
        </div>
        <div className="flex justify-center flex-wrap gap-32 items-center">
          <div>
            <ReactApexChart
              options={state.options}
              series={state.series}
              type="pie"
              width={600}
            />
          </div>
          <div>
          <h2 class="text-4xl mb-8 font-bold ">
              Pero sabemos que:
            </h2>
            <ul class="space-y-1 text-2xl  max-w-md list-disc list-inside text-gray-500">
              <li>
                Las acciones caen +25% en recesiones y los treasuries son el
                refugio durante esta fase del ciclo económico, inclusive
                apreciándose.
              </li>
              <li>
                Los bonos corporativos rinden menos que las acciones durante
                fases de expansión y caen durante las desaceleraciones. Su
                efecto amortiguador del portafolio es marginal.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TesisInversion;
