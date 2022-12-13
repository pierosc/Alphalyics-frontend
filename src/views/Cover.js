import { useEffect, useRef, useState } from "react";
import React from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./Cover.css";
import { UserData } from "./../Data";
import Logosvg from "../components/logo";

function Cover() {
  // ChartJS.defaults.scale.gridLines.drawOnChartArea = false;
  const [alldata, setAlldata] = useState([]);
  const [alldata2, setAlldata2] = useState([]);
  const chartReference = useRef([])
  const [refresh, setRefresh] = useState(false)
  const [inidata, setInidata] = useState(true)
  const [color, setColor] = useState([])
  var sp500
  var alp
  var colors
  var size =[
    {
      "date": "Jul-2021",
      "size": 14
    },
    {
      "date": "Nov-2022",
      "size": 14
    }
  ]
  const fechainiRef = useRef('')
  const fechafinRef = useRef('')

  const getAllSP500 = async () => {
    await axios.get("https://alphalytics.pe/api/v1/mainsp/").then((response) => {
      const data = response.data;
      // console.log(data);
      setAlldata(data);
      sp500=data
    });
  };

  const getAllAlp = async () => {
    await axios
      .get("https://alphalytics.pe/api/v1/mainalp/ ")
      .then((response) => {
        const data = response.data;
        // console.log(data);
        setAlldata2(data);
        alp=data
      });
  };

  const getSP500 = async () => {
    const url='https://alphalytics.pe/api/v1/detailsp?start='+fechainiRef.current.value+'&end='+ fechafinRef.current.value
    await axios
      .get(url)
      .then((response) => {
        const data = response.data;
        // console.log(data);
        setAlldata(data);
        sp500=data
      });
  };

  const getAlp= async () => {
    const url='https://alphalytics.pe/api/v1/detailalp?start='+fechainiRef.current.value+'&end='+ fechafinRef.current.value
    await axios
      .get(url)
      .then((response) => {
        const data = response.data;
        // console.log(data);
        setAlldata2(data);
        alp=data
      });
  };

  const getColor = async () => {
    const url='https://alphalytics.pe/api/v1/detailcolor?start='+fechainiRef.current.value+'&end='+ fechafinRef.current.value
    await axios
      .get(url)
      .then((response) => {
        const data = response.data;
        // console.log(data);
        setColor(data);
        colors=data
      });
  };

  const getSize = async () => {
    const url='https://alphalytics.pe/api/v1/detaildcolor?start='+fechainiRef.current.value+'&end='+ fechafinRef.current.value
    await axios
      .get(url)
      .then((response) => {
        const data = response.data;
        // console.log(data);
        setColor(data);
        size=data
      });
  };

  const getAllColor = async () => {
    const url='https://alphalytics.pe/api/v1/maincolor'
    await axios
      .get(url)
      .then((response) => {
        const data = response.data;
        // console.log(data);
        setColor(data);
        colors=data
      });
  };

  useEffect(async () => {
    // await getAllSP500()
    await Promise.all([getAllSP500(), getAllAlp(), getAllColor()]);
    // await getAllSP500();
    // await getAllAlp();
    // await getAllColor();
    await updatedata()
    // setTimeout(() => {
    //   updatedata()
    // }, 3200);
  }, []);


async function updatedata(){
  
  // console.log(sp500)
  // console.log(alp)

setUserData(  
  {
    labels: sp500.map((data) => data.date),
    // {console.log(labels)},
    datasets: [
      {
        type: "line",
        data: alp,
        backgroundColor: "rgba(0,0,0,1)",
        borderColor: "rgba(0,0,0,1)",
       pointRadius:0,
       borderWidth:1,
        parsing:{
          xAxisKey:'date',
          yAxisKey: 'alp'
      },
      },
      {
        type: "line",
        data: sp500,
        backgroundColor: "rgba(107,114,128,1)",
        borderColor: "rgba(107,114,128,1)",
      pointRadius:0,
      borderWidth:1,
        parsing:{
               xAxisKey:'date',
               yAxisKey: 'sp'
           },
          }
      ,{
        type: "line",
        data:sp500.map(obj => {
          return {date:obj['date'], sp: size[0]['size']};
          }),
        backgroundColor:
        // "rgba(0,255,0,1)",

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
        borderWidth:1,
        pointRadius:0,  
        // parsing:false,
        normalized:true,
        parsing:{
            xAxisKey:'date',
            yAxisKey: 'sp'
        },
        fill: true,
      }
    ],
  })
    const chart = chartReference.current.config
            console.log(chartReference)
            // chartReference.current.config.data.datasets[0].data = alldata;
            chart.update();
            setRefresh(!refresh)
          }


 
const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        type: "line",
          label: 'Alphalytics',
        data: [],
        backgroundColor: "rgba(0,0,0,1)",
        borderColor: "rgba(0,0,0,1)",
       pointRadius:1,
        parsing:{
          xAxisKey:'date',
          yAxisKey: 'alp'
      },
      },
      {
        type: "line",
          label: 'SP 500',
        data: [],
        backgroundColor: "rgba(107,114,128,1)",
        borderColor: "rgba(107,114,128,1)",
      pointRadius:1,
        parsing:{
               xAxisKey:'date',
               yAxisKey: 'sp'
           },
          }
          
      ,{
        label: '',
        data: [],
        pointRadius:0,  
        normalized:true,
        parsing:false,
        fill: true,
      }
    ],
  });


  function getGradient(ctx, chartArea, scales) {
    const gradientBg = ctx.createLinearGradient(
      chartArea.left,
      0,
      chartArea.right,
      0
    );

      // console.log(color)
//100%/cantidad de datos*index del cambio de dato
//1/alldata.length

//cambia color e la data 0,105,870,1489,2546,2896,3625,3900,4006
//resultdos de porcentajes 0.026210 0.21717 0.37169 0.63554 0.72291 0.90489 0.97353 1
// console.log((1/alldata.length * 105).toFixed(2))


  if(sp500!==[]){

    // gradientBg.addColorStop(color[0].index, color[0].color);

    for (let x in colors) {
      // ccurs_codigo += selection[x]["CCURS_CODIGO"].concat(",");
      if (x!=0){
              gradientBg.addColorStop(colors[x].index, colors[x-1].color);
        gradientBg.addColorStop(colors[x].index, colors[x].color);}
    }


  };


    return gradientBg;
  }
  return (
    <div className="page-cover flex items-center flex-col pb-32 pt-24">
      <div style={{ width: 850}}>
        <Logosvg/>
      </div>


      <h2 className="md:text-2xl text-xl text-center mb-12  font-bold px-6 md:px-24">
        Es un portafolio de inversión dinámico que invierte en activos del
        mercado de EEUU, buscando maximizar la rentabilidad a través del ciclo
        económico americano
      </h2>

      <div className="grid md:grid-cols-12 gap-12 md:px-24 w-full px-6">

        <div className="md:col-span-7 md:w-full w-full" >
          <div>
            <div className="flex justify-center gap-4 mb-2">
              <h3 className="font-bold text-center md:text-lg text-base">Retornos totales del portafolio de Alphalytics vs SP500</h3>
            </div>
          {/* <LineChart ref={chartReference} chartData={userData}  /> */}
          <Line ref={chartReference} data={userData} options={{
    plugins: {
      title: {
        display: false,
      },

      legend: {
        display: false,
        onClick:()=>{}
      }
    },
    scales: {
      x: {
          grid: {
              display: false
          }
      },
      y: {
          grid: {
            display: false
          },
          title: {
            display: true,
            text: 'Múltiplo desde 2007',
            font: {
              size: 14
            }
          }
      }
  },
    // animation:false
  }}/>
              <div className="flex justify-center gap-4 mb-2">
              <h3 className="font-bold md:text-lg text-base">Alphalytics</h3>
              <h3 className="font-bold  md:text-lg text-base text-gray-500">SP500</h3>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 md:col-end-13 self-center flex flex-col items-center max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-2xl">

          <h3 className="md:text-lg text-base text-center mb-6 font-bold ">
            Entre enero de 2007 y noviembre 2022 , el portafolio algorítmico de
            Alphalytics obtendría un retorno total de 16.5% vs 11.2% del
            Standard & Poor’s 500
          </h3>

          <div className="flex w-full flex-wrap justify-around mb-6">
          
          <input ref={fechainiRef} defaultValue='2007-03-01' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5" type="date"></input>

            <input ref={fechafinRef} defaultValue='2022-11-22' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5" type="date"></input>
          </div>
          
          <button type="button" 
          onClick={
            async ()=>{
              // await getSP500();
              // await getAlp();
              // await getColor();
              // await getSize();
              await Promise.all([getSP500(), getAlp(), getColor(), getSize()]);
              await updatedata();
            }
          }
           className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
           >VER GRÁFICO</button>

          <button type="button" 
          onClick={
            async ()=>{
              await getAllSP500();
              await getAllAlp();
              await getAllColor();
              size =[
                {
                  "date": "Jul-2021",
                  "size": 14
                },
                {
                  "date": "Nov-2022",
                  "size": 14
                }
              ]
              await updatedata();
            }
          }
           className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
           >GRÁFICO GENERAL</button>
        </div>

      </div>
    </div>
  );
}

export default Cover;
