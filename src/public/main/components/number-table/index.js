import React from "react";
import shortId from "shortid";
import { Table, TableRow, TableCell, TableBody } from "components/common/table";

const exponents = [7, 6, 5, 4, 3, 2, 1, 0];

const NumberTable = ({ number, base }) => (
  <Table>
    <TableBody>
      <TableRow>
        <TableCell align="right" weight="700">
          Base
        </TableCell>
        <TableCell align="center">2</TableCell>
        <TableCell align="center">2</TableCell>
        <TableCell align="center">2</TableCell>
        <TableCell align="center">2</TableCell>
        <TableCell align="center">2</TableCell>
        <TableCell align="center">2</TableCell>
        <TableCell align="center">2</TableCell>
        <TableCell align="center">2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="right" weight="700">
          Exponent
        </TableCell>
        {exponents.map(exponent => (
          <TableCell key={shortId.generate()} align="center">
            {exponent}
          </TableCell>
        ))}
      </TableRow>
      <TableRow>
        <TableCell align="right" weight="700">
          Position
        </TableCell>
        {exponents.map(exponent => (
          <TableCell key={shortId.generate()} align="center">
            {base ** exponent}
          </TableCell>
        ))}
      </TableRow>
      <TableRow background="veryLightGrey">
        <TableCell align="right" weight="700">
          Number
        </TableCell>
        {number.map(bit => (
          <TableCell
            key={shortId.generate()}
            fontSize="22px"
            weight="700"
            align="center"
          >
            {bit}
          </TableCell>
        ))}
      </TableRow>
    </TableBody>
  </Table>
);

export default NumberTable;
