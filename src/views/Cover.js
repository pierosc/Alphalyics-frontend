import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
// import "./App.css";
// import BarChart from "./components/BarChart";
import LineChart from "./../components/LineChart";
// import PieChart from "./components/PieChart";
import Datepicker from "flowbite-datepicker/Datepicker";
import DateRangePicker from "flowbite-datepicker/DateRangePicker";
import { UserData } from "./../Data";
import { Datasp } from "./../Datasp";
import { ColorData } from "./../Colordata";
import { lineHeight } from "@mui/system";
// import TextField from '@mui/material/TextField';

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

function Cover() {
  const [alldata, setAlldata] = useState([
    { date: "2007-01-03", indice_alphalytics: 1, indice_sp500: 1 },
    { date: "2007-01-05", indice_alphalytics: 1.04, indice_sp500: 1.068 },
  ]);

  const getData = async () => {
    await axios.get("http://127.0.0.1:8000/api/v1/main/").then((response) => {
      const data = response.data;
      console.log(data);
      setAlldata(data);
      // setUserData({
      //     // labels: UserData.map((data) => data.year),
      //     datasets: [      {
      //       label: 'Alphalytics',
      //       data: alldata,
      //       backgroundColor:'rgba(0,0,0,1)',
      //       borderColor: 'rgba(0,0,0,1)',
      //       tension:0.4,
      //       parsing:{
      //           xAxisKey:'date',
      //           yAxisKey: 'indice_alphalytics'
      //       },
      //     },
      //     {
      //       label: 'SP 500',
      //       data: alldata,
      //       backgroundColor:'rgba(128,128,128,1)',
      //       borderColor: 'rgba(128,128,128,1)',
      //       tension:0.4,
      //       parsing:{
      //           xAxisKey:'date',
      //           yAxisKey: 'indice_sp500'
      //       },
      //     }
      //     // ,{
      //     //   label: 'Colores',
      //     //   data: UserData,
      //     //   backgroundColor:

      //     //   context =>{
      //     //       const chart= context.chart;
      //     //     //   console.log(context.chart)
      //     //       const {ctx, chartArea, scales} = chart;
      //     //       if(!chartArea){return null};
      //     //       return getGradient(ctx, chartArea, scales)
      //     //   },
      //     //   borderColor:
      //     //   context =>{
      //     //       const chart= context.chart;
      //     //     //   console.log(context.chart)
      //     //       const {ctx, chartArea, scales} = chart;
      //     //       if(!chartArea){return null};
      //     //       return getGradient(ctx, chartArea, scales)
      //     //   },
      //     //   tension:0.4,
      //     //   parsing:{
      //     //       xAxisKey:'day',
      //     //       yAxisKey: 'sales.food'
      //     //   },
      //     //   fill: true,
      //     // }
      // ],
      //   })
    });
  };
  const getData2 = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/v1/maindetail/ ")
      .then((response) => {
        const data = response.data;
        console.log(data);
        setAlldata(data);
      });
  };
  useEffect(() => {
    getData();
    // getData2()
  }, []);

  const [value, setValue] = React.useState("2014-08-18T21:11:54");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [userData, setUserData] = useState({
    // labels: UserData.map((data) => data.year),
    datasets: [
      {
        type: "line",
        //   label: 'Alphalytics',
        //   data: [{x:'2016-12-25',y:2},{x:'2016-12-26',y:5},{x:'2016-12-28',y:7},{x:'2016-12-30',y:5}],
        data: [
          { x: 1, y: 2 },
          { x: 2, y: 5 },
          { x: 3, y: 7 },
          { x: 4, y: 5 },
        ],
        backgroundColor: "rgba(0,0,0,1)",
        borderColor: "rgba(0,0,0,1)",
        tension: 0.4,
        normalized: true,
        parsing: false,
      },
      {
        type: "line",
        //   label: 'SP 500',
        //   data: [{x:'2016-12-25',y:8},{x:'2016-12-26',y:2},{x:'2016-12-28',y:4},{x:'2016-12-30',y:2}],
        data: [
          { x: 1, y: 2 },
          { x: 2, y: 7 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
        ],
        backgroundColor: "rgba(128,128,128,1)",
        borderColor: "rgba(128,128,128,1)",
        tension: 0.4,
        normalized: true,
        parsing: false,
      },
      // ,{
      // //   label: 'Colores',
      //   data: ColorData,
      //   backgroundColor:

      //   context =>{
      //       const chart= context.chart;
      //     //   console.log(context.chart)
      //       const {ctx, chartArea, scales} = chart;
      //       if(!chartArea){return null};
      //       return getGradient(ctx, chartArea, scales)
      //   },
      //   borderColor:
      //   context =>{
      //       const chart= context.chart;
      //     //   console.log(context.chart)
      //       const {ctx, chartArea, scales} = chart;
      //       if(!chartArea){return null};
      //       return getGradient(ctx, chartArea, scales)
      //   },
      //   tension:0.4,
      //   normalized:true,
      //   parsing:{
      //       xAxisKey:'date',
      //       yAxisKey: 'top'
      //   },
      //   fill: true,
      // }
    ],
  });

  //   rgba(255,209,127,1) AMARILLO
  //   rgba(255,140,140,1) ROSADO ROJIZO
  //   rgba(255,204,204,1) ROSADO     YA NO
  //   rgba(217,236,217,1) VERDE CLARO
  //   rgba(140,197,140,1) VERDE OSCURO

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
    return gradientBg;
  }
  console.log(alldata);
  console.log(UserData);
  console.log(Datasp);
  return (
    <div className="flex items-center flex-col mb-32">
      <div>
        <img
          style={{ width: 700 }}
          className="h-auto  mb-8"
          src={require("./Imagen2.png")}
          alt="image description"
        ></img>
      </div>
      <h2 className="text-4xl mb-6 font-bold ">
        Es un portafolio de inversión dinámico que invierte en activos del
        mercado de EEUU, buscando maximizar la rentabilidad a través del ciclo
        económico americano
      </h2>
      <div className="flex flex-col justify-around">
        <div style={{ width: 1200 }}>
          <LineChart style={{ width: 1200 }} chartData={userData} />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-3xl mb-6 font-bold w-2/7">
            Entre enero de 2007 y noviembre 2022 , el portafolio algorítmico de
            Alphalytics obtendría un retorno total de 16.4% vs 11.0% del
            Standard & Poor’s 500
          </h3>
          <div className="flex justify-around">
            <input type="date"></input>

            <input type="date"></input>
          </div>
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cover;
