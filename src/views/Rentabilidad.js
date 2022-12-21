import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { gridRowsIdToIdLookupSelector } from "@mui/x-data-grid";

function createData(col1, col2, col3, col4, col5, col6, col7) {
  return { col1, col2, col3, col4, col5, col6, col7 };
}

const rows = [
  createData("Inicial", '1,000,000'  , "1,000,000", "", "", "", ""),
  createData(
    2007,
    "1,185,145",
    "1,074,892  ",
    "18.5%  ",
    "7.5% ",
    "18.5%  ",
    "7.5%  "
  ),
  createData(2008, '1,375,101  ', '705,766  ', '16.0%  ', '-34.3%  ','17.3%  ','-16.0%  '),
  createData(2009, '1,645,054  ','914,024', '19.6%  ', '29.5%  ','18.0%  ','-3.0%  '),
  createData(2010, '1,962,134  ', '1,072,393  ', '19.3%  ', '17.3%  ','18.4%  ','1.8%  '),
  createData(2011, '2,102,493  ', '1,118,405  ', '7.2%  ', '4.3%  ','16.0%','2.3%  '),
  createData(2012, '2,371,463', '1,329,887', '12.8%  ', '18.9%  ','15.5%  ','4.9%  '),
  createData(2013, '3,223,199', '1,785,346', '35.9%  ', '34.2%  ','18.2%  ','8.6%  '),
  createData(2014, '3,801,755', '2,059,343  ', '17.9%  ', '15.3%  ','18.2%  ','9.5%  '),
  createData(2015, '4,069,264', '2,134,817', '7.0%  ', '3.7%  ','16.9%  ','8.8%  '),
  createData(2016, '4,435,666', '2,431,563', '9.0%  ', '13.9%  ','16.1%  ','9.3%  '),
  createData(2017, '5,705,342', '3,007,319', '28.6%  ', '23.7%  ','17.2%','10.5%  '),
  createData(2018, '5,669,707', '2,942,104', '-0.6%  ', '-2.2%  ','15.6%  ','9.4%  '),
  createData(2019, '7,360,410', '3,906,507', '29.8%  ', '32.8%  ','16.6%  ','11.1%  '),
  createData(2020, '9,740,044', '4,709,070', '32.3%  ', '20.5%  ','17.7%  ','11.7%  '),
  createData(2021, '12,561,423', '6,124,913', '29.0%  ', '30.1%  ','18.4%  ','12.8%  '),
  createData('Nov-2022', '10,720,374', '5,383,439  ', '-14.7%  ','-12.1%  ','16.0%   ','11.1%  '),
];

function Rentabilidad() {
  const [table, setTable] = useState([]);
  
  useEffect(async () => {
    await axios.get("https://alphalytics.pe/api/v1/table/").then((response) => {
      const data = response.data;
      setTable(data)
    });
  }, []);

  if(table){
    if (table['last_row_2022']){
      rows.pop()
      let arra_tab1 = table['last_row_2022'].split(';')
      console.log(arra_tab1)
      rows.push(createData(arra_tab1[0], arra_tab1[1], arra_tab1[2], arra_tab1[3], arra_tab1[4], arra_tab1[5], arra_tab1[6]))
    }

    if (table['last_row_2023']){
      let arra_tab2 = table['last_row_2023'].split(';')
      console.log(arra_tab2)
      // rows.push({ col1: arra_tab2[0], col2: arra_tab2[1],col3: arra_tab2[2],col4: arra_tab2[3],col5: arra_tab2[4],col6: arra_tab2[5],col7: arra_tab2[6] })
      rows.push(createData(arra_tab2[0], arra_tab2[1], arra_tab2[2], arra_tab2[3], arra_tab2[4], arra_tab2[5], arra_tab2[6]))
    }
    
  }
  console.log(rows)
  return (
    <div className="flex flex-col pb-32 md:pt-16 pt-6 bg-white">
      <div className="md:px-32 p-6">
        <h1  className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl ">
          Rentabilidad total anual de una inversión de US$ 1 millón
        </h1>
        <h2  className="text-xl md:text-2xl md:mb-16 md-8 font-bold ">
          Incluye reinversión de dividendos*
        </h2>
      </div>
      <div className="md:px-96 px-6">
        {/* <div className=" border border-gray-200  shadow-2xl"> */}
        <Paper elevation={24}>
      <TableContainer >
        <Table  size="small" aria-label="a dense table">
          <TableHead sx={{backgroundColor: 'black', color:'white'}}>
            <TableRow sx={{color:'white'}}>
              <TableCell sx={{color:'white'}} align="center" colSpan={3}></TableCell>
              <TableCell sx={{color:'white'}} align="center" colSpan={2}>
                Rentabilidad* Anual YoY
              </TableCell>
              <TableCell sx={{color:'white'}} align="center" colSpan={2}>
                Rentabilidad* Anual Compuesta
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell sx={{color:'white'}} align="right"></TableCell>
              <TableCell sx={{color:'white'}} align="right">Alphalytics</TableCell>
              <TableCell sx={{color:'white'}} align="right">S&P500</TableCell>
              <TableCell sx={{color:'white'}}  align="right">Alphalytics</TableCell>
              <TableCell sx={{color:'white'}} align="right">S&P500</TableCell>
              <TableCell sx={{color:'white'}} align="right">Alphalytics</TableCell>
              <TableCell sx={{color:'white'}} align="right">S&P500</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.col1}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.col1}
                </TableCell>
                <TableCell align="right">{row.col2}</TableCell>
                <TableCell align="right">{row.col3}</TableCell>
                <TableCell align="right">{row.col4}</TableCell>
                <TableCell align="right">{row.col5}</TableCell>
                <TableCell align="right">{row.col6}</TableCell>
                <TableCell align="right">{row.col7}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
      {/* </div> */}
      </div>
    </div>
  );
}

export default Rentabilidad;
