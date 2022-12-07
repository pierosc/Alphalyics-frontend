import React from 'react'
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
function Rebalanceo() {

    const [state, setState] = useState({
            
        series: [90, 10],
        options: {
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Acciones', 'Treasuries'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      legend: {
        position: 'bottom'
      },
      fill: {
        colors: ['#375DA1', '#A7B5DB', '#4472C4']
      }
    },
  
  
  });
  const [state2, setState2] = useState({
            
    series: [0, 100],
    options: {
    chart: {
        width: 380,
        type: 'pie',
    },
    labels: ['Acciones', 'Treasuries'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }],
  legend: {
    position: 'bottom'
  },
  fill: {
    colors: ['#375DA1', '#A7B5DB', '#4472C4']
  }
},


});
const [state3, setState3] = useState({
            
  series: [50, 50],
  options: {
  chart: {
      width: 380,
      type: 'pie',
  },
  labels: ['Acciones', 'Treasuries'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}],
legend: {
  position: 'bottom'
},
fill: {
  colors: ['#375DA1', '#A7B5DB', '#4472C4']
}
},


});
const [state4, setState4] = useState({
            
  series: [90, 10],
  options: {
  chart: {
      width: 380,
      type: 'pie',
  },
  labels: ['Acciones', 'Treasuries'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}],
legend: {
  position: 'bottom'
},
fill: {
  colors: ['#375DA1', '#A7B5DB', '#4472C4']
}
},


});
const [state5, setState5] = useState({
            
  series: [90, 10],
  options: {
  chart: {
      width: 380,
      type: 'pie',
  },
  labels: ['Acciones', 'Treasuries'],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}],
legend: {
  position: 'bottom'
},
fill: {
  colors: ['#375DA1', '#A7B5DB', '#4472C4']
}
},


});
  return (
    <><h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Alphalytics rebalancea los pesos de los activos de su portafolio durante la evolución del ciclo económico…</h1>
    <h2 class="text-4xl mb-36 font-bold dark:text-white">…para evitar las caídas de las acciones durante recesiones y maximizar la rentabilidad durante la fase de expansión  
</h2>

<div className='flex justify-around mb-32'>

<div class="flex flex-col items-center max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className='bg-blue-100 w-full pb-8 border border-gray-200 rounded-t-2xl'>
<div class="p-5">
            <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Recuperación</h4>
    </div>
<ReactApexChart options={state.options} series={state.series} type="pie" width={380} />
</div>
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Incorpora acciones de tecnología al portafolio</h5>
    </div>
</div>

<div class="flex flex-col items-center max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className='bg-blue-100 w-full pb-8 border border-gray-200 rounded-t-2xl'>
<div class="p-5">
            <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Expansión</h4>
    </div>
<ReactApexChart options={state2.options} series={state2.series} type="pie" width={380} />
</div>
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Modo ofensivo: Maximiza el crecimiento del portafolio 
</h5>
    </div>
</div>

<div class="flex flex-col items-center max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className='bg-blue-100 w-full pb-8 border border-gray-200 rounded-t-2xl'>
<div class="p-5">
            <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Recuperación </h4>
    </div>
<ReactApexChart options={state3.options} series={state3.series} type="pie" width={380} />
</div>
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Incorpora acciones de tecnología al portafolio</h5>
    </div>
</div>

<div class="flex flex-col items-center max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div className='bg-blue-100 w-full pb-8 border border-gray-200 rounded-t-2xl'>
<div class="p-5">
            <h4 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Recuperación </h4>
    </div>
<ReactApexChart options={state4.options} series={state4.series} type="pie" width={380} />
</div>
    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Incorpora acciones de tecnología al portafolio</h5>
    </div>
</div>


</div>
</>
  )
}

export default Rebalanceo