import { useEffect, useRef, useState } from "react";
import React from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./Cover.css";
import { UserData } from "./../Data";


function Cover() {

  const [alldata, setAlldata] = useState([]);
  const [alldata2, setAlldata2] = useState([]);
  const chartReference = useRef([])
  const [refresh, setRefresh] = useState(false)
  const [inidata, setInidata] = useState(true)
  const [colorsize, setColorsize] = useState([])
  const [sp500, setSp500] = useState([])
  const [alp, setAlp] = useState([])
const fechainiRef = useRef('')
const fechafinRef = useRef('')

  const getAllSP500 = async () => {
    await axios.get("http://127.0.0.1:8000/api/v1/mainsp/").then((response) => {
      const data = response.data;
      console.log(data);
      setAlldata(data);
      // setTimeout(() => {
      //   updatedata()
      // }, 1500);
      
    });
  };

  const getAllAlp = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/v1/mainalp/ ")
      .then((response) => {
        const data = response.data;
        console.log(data);
        setAlldata2(data);
      });
  };

  const getColorSize = async () => {
    await axios
    const url='http://127.0.0.1:8000/api/v1/detaildcolor?start='+fechainiRef.current.value+'&end='+ fechafinRef.current.value
      .get(url)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setColorsize(data);
      });
  };

  const getSP500 = async () => {
    const url='http://127.0.0.1:8000/api/v1/detailsp?start='+fechainiRef.current.value+'&end='+ fechafinRef.current.value
    await axios
      .get(url)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setAlldata(data);
      });
  };

  const getAlp= async () => {
    const url='http://127.0.0.1:8000/api/v1/detailalp?start='+fechainiRef.current.value+'&end='+ fechafinRef.current.value
    await axios
      .get(url)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setAlldata2(data);
      });
  };



  useEffect(() => {
    // getAllSP500();
    // getAllAlp();
    // getColorSize();
  }, []);

function toDateFormat(date){
  const words = date.split('-');
  console.log(words[0]);
  console.log(words[1]);
  // console.log(words[2]);
  const month = 
  words[1]==='01'?('Jan'):
  words[1]==='02'?('Feb'):
  words[1]==='03'?('Mar'):
  words[1]==='04'?('Apr'):
  words[1]==='05'?('May'):
  words[1]==='06'?('Jun'):
  words[1]==='07'?('Jul'):
  words[1]==='08'?('Aug'):
  words[1]==='09'?('Sep'):
  words[1]==='10'?('Oct'):
  words[1]==='11'?('Nov'):
  ('Dec')

  const newdate= month + '-'+ words[0]
    console.log(newdate);
    return newdate
}



function updatedata(){
  
  console.log(alldata)
  console.log(alldata2)
  // console.log(alldata[0]['date'])
  // console.log(alldata[alldata.length-1]['date'])
setUserData(  
  {
    labels: alldata.map((data) => data.date),
    // {console.log(labels)},
    datasets: [
      {
        type: "line",
        data: alldata2,
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
        data: alldata,
        backgroundColor: "rgba(107,114,128,1)",
        borderColor: "rgba(107,114,128,1)",
      pointRadius:1,
        parsing:{
               xAxisKey:'date',
               yAxisKey: 'sp'
           }
          }
      ,{
        type: "line",
        // data:[{date:  alldata[0]['date'], colortop: 14}, {date: alldata[alldata.length-1]['date'], colortop: 14}],
        data:alldata.map(obj => {
          
          return {date:obj['date'], sp: 14};

          }),
        backgroundColor:"rgba(0,255,0,1)",

        // context =>{
        //     const chart= context.chart;
        //   //   console.log(context.chart)
        //     const {ctx, chartArea, scales} = chart;
        //     if(!chartArea){return null};
        //     return getGradient(ctx, chartArea, scales)
        // },
        // borderColor:
        // context =>{
        //     const chart= context.chart;
        //   //   console.log(context.chart)
        //     const {ctx, chartArea, scales} = chart;
        //     if(!chartArea){return null};
        //     return getGradient(ctx, chartArea, scales) 
        // },
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
      }
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
           }
          }
      ,{
        label: '',
        data: [],
        // backgroundColor:

        // context =>{
        //     const chart= context.chart;
        //     console.log(context.chart)
        //     const {ctx, chartArea, scales} = chart;
        //     if(!chartArea){return null};
        //     return getGradient(ctx, chartArea, scales)
        // },
        // borderColor:
        // context =>{
        //     const chart= context.chart;
        //   //   console.log(context.chart)
        //     const {ctx, chartArea, scales} = chart;
        //     if(!chartArea){return null};
        //     return getGradient(ctx, chartArea, scales)
        // },
        pointRadius:0,  
        normalized:true,
        parsing:false,
        // parsing:{
        //     xAxisKey:'date',
        //     yAxisKey: 'alp'
        // },
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
    const percentage =
      (scales.x.getPixelForTick(1) - chartArea.left) / chartArea.width;
      const percentage2 =
      (scales.x.getPixelForTick(20) - chartArea.left) / chartArea.width;
      const percentage3 =
      (scales.x.getPixelForTick(38) - chartArea.left) / chartArea.width;

//100%/cantidad de datos*index del cambio de dato
//1/alldata.length

//cambia color e la data 0,105,870,1489,2546,2896,3625,3900,4006
//resultdos de porcentajes 0.026210 0.21717 0.37169 0.63554 0.72291 0.90489 0.97353 1
// console.log((1/alldata.length * 105).toFixed(2))
  if(alldata!==[]){
    // gradientBg.addColorStop(0, "rgba(250, 242, 249, 1)");
    // gradientBg.addColorStop((1/alldata.length * 105).toFixed(2), "rgba(250, 242, 249, 1)");
    // gradientBg.addColorStop((1/alldata.length * 105).toFixed(2), "rgba(110, 110, 110, 1)");
    // gradientBg.addColorStop((1/alldata.length * 1489).toFixed(2), "rgba(110, 110, 110, 1)");
    // gradientBg.addColorStop((1/alldata.length * 1489).toFixed(2), "rgba(252, 0, 0, 1)");
    // gradientBg.addColorStop((1/alldata.length * 3625).toFixed(2), "rgba(252, 0, 0, 1)");
    // gradientBg.addColorStop((1/alldata.length * 3625).toFixed(2), "rgba(0, 0, 221, 1)");

  };


    return gradientBg;
  }


  // console.log(alldata.length);
  // console.log(UserData.length);
  // console.log(Datasp);
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
          <div>
            <div className="flex justify-center gap-4 mb-2">
              <h3 className="font-bold text-lg">Alphalytics</h3>
              <h3 className="font-bold  text-lg text-gray-500">SP500</h3>
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
    // animation:false
  }}/>
          </div>
        </div>

        <div className="md:col-span-4 md:col-end-13 self-center flex flex-col items-center max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-2xl">

          <h3 className="text-3xl text-center mb-6 font-bold ">
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
            // ()=>{console.log(fechainiRef)
            //   toDateFormat(fechainiRef.current.value)
            // }
            ()=>{
              getSP500()
              getAlp()
              setColorsize([{date:  alldata[0]['date'], colortop: 14}, {date: alldata[alldata.length-1]['date'], colortop: 14}])
              // const size = alldata.map(date => {
          
              //   return {date, sp: 14};

              //   })
              setTimeout(() => {
                updatedata()
              }, 2000);
            }
            

          }
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">VER GRÁFICO</button>
        
        </div>

      </div>
    </div>
  );
}

export default Cover;
