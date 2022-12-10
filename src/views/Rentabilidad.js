import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(col1, col2, col3, col4, col5, col6, col7) {
  return { col1, col2, col3, col4, col5, col6, col7 };
}

const rows = [
  createData("Inicial", '1,000,000'  , "1,000,000", "", "", "", ""),
  createData(
    2007,
    "1,163,365",
    "1,074,892  ",
    "16.3%  ",
    "7.5% ",
    "16.3%  ",
    "7.5%  "
  ),
  createData(2008, '1,292,012  ', '705,766  ', '11.1%  ', '-34.3%  ','13.7%  ','-16.0%  '),
  createData(2009, '1,716,926  ','920,065', '32.9%  ', '30.4%  ','19.7%  ','-2.7%  '),
  createData(2010, '2,039,943  ', '1,081,807  ', '18.8%  ', '17.6%  ','19.5%  ','2.0%  '),
  createData(2011, '2,216,084  ', '1,136,216  ', '8.6%  ', '5.0%  ','17.3','2.6%  '),
  createData(2012, '2,635,451', '1,350,570', '18.9%  ', '18.9%  ','17.5%  ','5.1%  '),
  createData(2013, '3,564,446', '1,813,113', '35.2%  ', '34.2%  ','19.9%  ','8.9%  '),
  createData(2014, '4,177,478', '2,091,371  ', '17.2%  ', '15.3%  ','19.6%  ','9.7%  '),
  createData(2015, '4,435,312', '2,168,019', '6.2%  ', '3.7%  ','18.0%  ','9.0%  '),
  createData(2016, '4,838,220', '2,469,380', '9.1%  ', '13.9%  ','17.1%  ','9.5%  '),
  createData(2017, '6,164,314', '3,054,090', '27.4%  ', '23.7%  ','18.0%','10.7%  '),
  createData(2018, '6,091,177', '2,987,861', '-1.2%  ', '-2.2%  ','16.2%  ','9.6%  '),
  createData(2019, '7,879,398', '3,967,263', '29.4%  ', '32.8%  ','17.2%  ','11.2%  '),
  createData(2020, '10,415,871', '4,783,393', '32.2%  ', '20.6%  ','18.2%  ','11.8%  '),
  createData(2021, '13,437,451', '6,233,820', '29.0%  ', '30.3%  ','18.9%  ','13.0%  '),
  createData('Nov-2022', '11,522,119', '5,478,700  ', '-14.3%  ','-12.1%  ','16.5%   ','11.2%  '),
];

function Rentabilidad() {
  return (
    <div className="flex flex-col pb-32 pt-16 bg-white">
      <div className="md:px-32 p-6">
        <h1  className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl ">
          Rentabilidad total anual de una inversión de US$ 1 millón
        </h1>
        <h2  className="text-2xl md:text-4xl md:mb-16 md-8 font-bold ">
          Incluye reinversión de dividendos
        </h2>
      </div>
      <div className="md:px-96 px-6">
        {/* <div className=" border border-gray-200  shadow-2xl"> */}
        <Paper elevation={24}>
      <TableContainer >
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
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
