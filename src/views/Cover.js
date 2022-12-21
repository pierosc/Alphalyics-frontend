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
  const [allImages, setImages] = useState([]);
  const [alldata2, setAlldata2] = useState([]);
  const chartReference = useRef([])
  const [refresh, setRefresh] = useState(false)
  const [inidata, setInidata] = useState(true)
  const [color, setColor] = useState([])
  var images
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
  const [listi, setList] = useState([]);

  useEffect(async () => {
    await axios.get("https://alphalytics.pe/api/v1/img/").then((response) => {
      const data = response.data;
      setList(data)
    });
 }, []);


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
    <div className="page-cover flex items-center flex-col pb-32 pt-4">
      <div className="logo grid md:grid-cols-12">
        <div className="md:col-span-11">
        <Logosvg/></div>
        <a className="md:col-span-1 self-center justify-self-center" href="https://www.linkedin.com/newsletters/marvelytics-6904452811946622976/">
        <button type="button" src='' class="md:col-span-1 self-center justify-self-center text-white bg-black hover:bg-slate-600 focus:outline-none focus:ring-4  font-medium rounded-full md:text-sm text-xs md:px-5 px-3 md:py-2.5 p-1.5 text-center mr-2 mb-2 ">Blog</button>
        </a>
      </div>


      <h2 className="md:text-2xl text-xl text-center   font-bold px-6 md:px-24">
      Es un portafolio de inversión dinámico que invierte en activos del mercado de EEUU, buscando maximizar la rentabilidad a través del ciclo económico americano

      </h2>

      <div className="md:flex md:flex-col md:px-24 w-full px-6 justify-center ">

      <div className="grid justify-self-end">
        <img
          className="h-auto block  md:w-3/5 w-full justify-self-center"
          // src={require("./../assets/fechageneral.png")}
          src = {listi['image1']}
          alt="image description"
        ></img>
      </div>


        
        <h3 className="md:text-lg text-base text-center mt-6 font-bold ">
        Entre enero de 2007 y noviembre 2022 , el portafolio algorítmico de Alphalytics obtendría un retorno total de 16.0% vs 11.1% del Standard & Poor’s 500   

          </h3>


      </div>
    </div>
  );
}

export default Cover;
