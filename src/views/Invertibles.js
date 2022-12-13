import React from "react";
import "./Invertibles.css";
function Invertibles() {
  return (
    <div className="pb-32 pt-16 md:px-32 px-6 bg-gray-200">
      <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none  md:text-4xl ">
      Activos invertibles
      </h1>
      <h2 className="text-lg md:text-2xl mb-6 md:mb-16 font-bold ">
      Alphalytics solo invierte en 5 ETFs registrados en las bolsas de MILA(Mercado Integrado Latinoamericano)

      </h2>

      <div className="grid md:grid-cols-3 gap-6 md:px-24 px-6" >

        <div className="flex flex-col justify-self-center items-center  max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-2xl">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl ">
            IVV
          </h1>
          <h5 className="mb-4 md:text-2xl text-xl font-bold tracking-tight text-gray-900 ">
            iShares Core S&P 500, replica la performance del índice S&P500.
          </h5>
          <a
            href="https://www.ishares.com/us/products/239726/ishares-core-sp-500-etf"
            target="_blank"
             className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Ver más
            <svg
              aria-hidden="true"
               className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        <div className="flex flex-col justify-self-center row-span-2 self-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-2xl">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl  ">
            SHV
          </h1>
          <h5 className="mb-4 md:text-2xl text-xl font-bold tracking-tight text-gray-900 ">
            iShares Short Treasury Bond replica un índice compuesto por U.S.
            Treasury bonds con maduración menores a un año.{" "}
          </h5>
          <a
            href="https://www.ishares.com/us/products/239466/?referrer=tickerSearch"
            target="_blank"
             className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Ver más
            <svg
              aria-hidden="true"
               className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        <div className="flex flex-col  justify-self-center items-center  max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-2xl">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl ">
            IEF
          </h1>
          <h5 className="mb-4 md:text-2xl text-xl font-bold tracking-tight text-gray-900 ">
            iShares 7-10 Year Treasury Bond replica un índice compuesto por U.S.
            Treasury bonds con maduración de 7 a 10 años.{" "}
          </h5>
          <a
            href="https://www.ishares.com/us/products/239456/ishares-710-year-treasury-bond-etf"
            target="_blank"
             className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Ver más
            <svg
              aria-hidden="true"
               className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        <div className="flex flex-col justify-self-center items-center  max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-2xl">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl ">
            SHY
          </h1>
          <h5 className="mb-4 md:text-2xl text-xl font-bold tracking-tight text-gray-900 ">
            iShares 1-3 Year Treasury Bond replica un índice compuesto por U.S.
            Treasury bonds con maduración de 1 a 3 años.{" "}
          </h5>
          <a
            href="https://www.ishares.com/us/products/239452/?referrer=tickerSearch"
            target="_blank"
             className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Ver más
            <svg
              aria-hidden="true"
               className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        <div className="flex flex-col justify-self-center items-center  max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow-2xl">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl ">
            QQQ
          </h1>
          <h5 className="mb-4 md:text-2xl text-xl font-bold tracking-tight text-gray-900 ">
            Invesco, replica la performance del índice Nasdaq -100
          </h5>
          <a
            href="https://www.invesco.com/qqq-etf/en/home.html"
            target="_blank"
             className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Ver más
            <svg
              aria-hidden="true"
               className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Invertibles;
