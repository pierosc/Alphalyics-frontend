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
  createData("Inicial", 1000000, "1,000,000", "", "", "", ""),
  createData(
    2007,
    "1,163,365",
    "1,074,892  ",
    "16.3%  ",
    "7.5% ",
    "16.3%  ",
    "7.5%  "
  ),
  createData(2008, 262, 16.0, 24, 6.0),
  createData(2009, 305, 3.7, 67, 4.3),
  createData(2010, 356, 16.0, 49, 3.9),
];

function Rentabilidad() {
  return (
    <div className="flex flex-col mb-32">
      <div>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Rentabilidad total anual de una inversión de US$ 1 millón
        </h1>
        <h2 class="text-4xl mb-6 font-bold ">
          Incluye reinversión de dividendos
        </h2>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}></TableCell>
              <TableCell align="center" colSpan={2}>
                Rentabilidad* Anual YoY
              </TableCell>
              <TableCell align="center" colSpan={2}>
                Rentabilidad* Anual Compuesta
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right"></TableCell>
              <TableCell align="right">Alphalytics</TableCell>
              <TableCell align="right">S&P500</TableCell>
              <TableCell align="right">Alphalytics</TableCell>
              <TableCell align="right">S&P500</TableCell>
              <TableCell align="right">Alphalytics</TableCell>
              <TableCell align="right">S&P500</TableCell>
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
    </div>
  );
}

export default Rentabilidad;
