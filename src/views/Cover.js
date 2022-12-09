import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "./Cover.css";

import LineChart from "./../components/LineChart";

import Datepicker from "flowbite-datepicker/Datepicker";
import DateRangePicker from "flowbite-datepicker/DateRangePicker";
import { UserData } from "./../Data";
import {  Datasp } from "./../Datasp";
import { ColorData } from "./../Colordata";
import { lineHeight } from "@mui/system";
import { data } from "autoprefixer";


function Cover() {

  const [alldata, setAlldata] = useState([]);
  const [alldata2, setAlldata2] = useState([]);

  const getData = async () => {
    await axios.get("http://127.0.0.1:8000/api/v1/mainsp/").then((response) => {
      const data = response.data;
      console.log(data);
      setAlldata(data);
    });
  };


  const getData2 = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/v1/mainalp/ ")
      .then((response) => {
        const data = response.data;
        console.log(data);
        setAlldata2(data);
      });
  };

  useEffect(() => {
    getData();
    getData2()
  }, []);



  function updateConfigAsNewObject(chart) {
    chart.options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js'
            }
        },
        scales: {
            x: {
                display: true
            },
            y: {
                display: true
            }
        }
    };
    chart.update();
}

  // const [value, setValue] = React.useState(null);

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };

 
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        type: "line",
          label: 'Alphalytics',
        data: UserData,
        backgroundColor: "rgba(0,0,0,1)",
        borderColor: "rgba(0,0,0,1)",
       pointRadius:1,
        parsing:{
          xAxisKey:'date',
          yAxisKey: 'alp'
      }
      },
      {
        type: "line",
          label: 'SP 500',
        data: Datasp,
        backgroundColor: "rgba(128,128,128,1)",
        borderColor: "rgba(128,128,128,1)",
      pointRadius:1,
        parsing:{
               xAxisKey:'date',
               yAxisKey: 'sp'
           }
          }
      ,{
        label: '',
        data: ColorData,
        backgroundColor:

        context =>{
            const chart= context.chart;
          //   console.log(context.chart)
            const {ctx, chartArea, scales} = chart;
            if(!chartArea){return null};
            return getGradient(ctx, chartArea, scales)
        },
        borderColor:
        context =>{
            const chart= context.chart;
          //   console.log(context.chart)
            const {ctx, chartArea, scales} = chart;
            if(!chartArea){return null};
            return getGradient(ctx, chartArea, scales)
        },
        pointRadius:0,  
        normalized:true,
        parsing:{
            xAxisKey:'date',
            yAxisKey: 'top'
        },
        fill: true,
      }
    ],
  });




const colors =[{'index':1,'color':'rgba(255,209,127,1)'},{'index':10,'color':'rgba(255,209,127,1)'},{'index':15,'color':'rgba(255,209,127,1)'}]

  function getGradient(ctx, chartArea, scales) {
    const gradientBg = ctx.createLinearGradient(
      chartArea.left,
      0,
      chartArea.right,
      0
    );
    const percentage =
      (scales.x.getPixelForTick(3) - chartArea.left) / chartArea.width;
    gradientBg.addColorStop(0, "rgba(250, 242, 249, 1)");
    gradientBg.addColorStop(0.1, "rgba(250, 242, 249, 1)");
    gradientBg.addColorStop(0.1, "rgba(226, 234, 221, 1)");
    gradientBg.addColorStop(0.15, "rgba(226, 234, 221, 1)");
    gradientBg.addColorStop(0.15, "rgba(252, 233, 220, 1)");
    gradientBg.addColorStop(0.5, "rgba(252, 233, 220, 1)");
    gradientBg.addColorStop(0.5, "rgba(255, 130, 130, 1)");
    // gradientBg.addColorStop(percentage, 'rgba(252, 233, 220, 1)');
    // gradientBg.addColorStop(percentage, 'rgba(255, 130, 130, 1)');
    gradientBg.addColorStop(0.75, "rgba(255, 130, 130, 1)");
    gradientBg.addColorStop(0.75, "rgba(255, 235, 235, 1)");
    gradientBg.addColorStop(1, "rgba(255, 235, 235, 1)");
    gradientBg.addColorStop(1, "rgba(255, 255, 255, 1)");
    return gradientBg;
  }
  console.log(alldata);
  console.log(UserData);
  console.log(Datasp);
  return (
    <div className="page-cover flex items-center flex-col pb-32 pt-24">
      <div>
        <img
          style={{ width: 850}}
          className="h-auto  mb-8 block"
          src={require("./../assets/Imagen3.jpg")}
          alt="image description"
        ></img>
      </div>


      <h2 className="md:text-4xl text-2xl text-center mb-12  font-bold px-6 md:px-24">
        Es un portafolio de inversión dinámico que invierte en activos del
        mercado de EEUU, buscando maximizar la rentabilidad a través del ciclo
        económico americano
      </h2>

      <div className="grid md:grid-cols-12 gap-12 md:px-24 w-full px-6">

        <div className="md:col-span-7 md:w-full w-full" >
          <LineChart chartData={userData}  />
        </div>

        <div className="md:col-span-4 md:col-end-13 self-center flex flex-col items-center max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-2xl">

          <h3 className="text-3xl text-center mb-6 font-bold ">
            Entre enero de 2007 y noviembre 2022 , el portafolio algorítmico de
            Alphalytics obtendría un retorno total de 16.5% vs 11.2% del
            Standard & Poor’s 500
          </h3>

          <div className="flex w-full flex-wrap justify-around mb-6">
          
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5" type="date"></input>

            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5" type="date"></input>
          </div>
          
          <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">VER GRÁFICO</button>
        
        </div>

      </div>
    </div>
  );
}

export default Cover;
