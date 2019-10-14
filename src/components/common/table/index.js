import styled from "styled-components";

const Table = styled.table`
  display: table;
  border-spacing: 0;
  border-collapse: collapse;
  font-size: 12px;
  width: 100%;
`;

const TableHead = styled.thead`
  background-color: ${props => props.theme.grey.veryLightGrey};
  border-bottom: 1px solid ${props => props.theme.grey.lightGrey};
  font-weight: 600;
`;

const TableRow = styled.tr`
  color: inherit;
  height: 48px;
  display: table-row;
  outline: none;
  vertical-align: middle;
  position: relative;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  background-color: ${props =>
    props.theme.grey[props.background] || "transparent"};
  &:last-child {
    border-bottom: none;
  }

  ${props =>
    props.clickable &&
    `
    cursor: pointer;
  `}
`;

const TableCell = styled.td`
  display: table-cell;
  padding: 6px 16px;
  text-align: ${props => props.align || "left"};
  vertical-align: inherit;

  ${props =>
    props.nowrap &&
    `
  white-space: nowrap;
  `}

  ${props =>
    props.weight &&
    `
  font-weight: ${props.weight}
  `};

  ${props =>
    props.fontSize &&
    `
  font-size: ${props.fontSize}
  `};

  ${props =>
    props.font &&
    `
  font-family: ${props.theme.font[props.font]}
  `};

  ${props =>
    props.clickable &&
    `
    cursor: pointer;
  `}
`;

const TableBody = styled.tbody``;

export { Table, TableHead, TableRow, TableCell, TableBody };
