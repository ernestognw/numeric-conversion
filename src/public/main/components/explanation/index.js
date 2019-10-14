import React, { Fragment } from "react";
import shortId from "shortid";
import Button from "components/common/button";
import Typography from "components/common/typography";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "components/common/table";
import Row from "./elements";

const Explanation = ({ number, base, getRealAnswer, toggleExplanation }) => (
  <Fragment>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Bit</TableCell>
          <TableCell />
          <TableCell>Base</TableCell>
          <TableCell />
          <TableCell>Exponent</TableCell>
          <TableCell />
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {number.map((bit, index) => (
          <TableRow key={shortId.generate()}>
            <TableCell weight="700">{bit}</TableCell>
            <TableCell>x</TableCell>
            <TableCell>{base}</TableCell>
            <TableCell>^</TableCell>
            <TableCell>{number.length - 1 - index}</TableCell>
            <TableCell>=</TableCell>
            <TableCell align="right">
              {bit * base ** (number.length - 1 - index)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Row>
      <Typography fontSize="12px" align="right">
        Total:
      </Typography>
      <Typography fontSize="12px" align="right">
        {getRealAnswer()}
      </Typography>
    </Row>
    <Button
      size="small"
      fullWidth
      marginT="5"
      variant="outlined"
      color="info"
      onClick={toggleExplanation}
    >
      Hide explanation
    </Button>
  </Fragment>
);

export default Explanation;
