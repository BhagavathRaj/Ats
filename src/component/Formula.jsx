import * as React from 'react';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Formula() {
  const [copiedFirstNames, setCopiedFirstNames] = useState([]);
  const [bodyWidth, setBodyWidth] = useState('');
  const [bodyLength, setBodyLength] = useState('');
  const [gsm, setGsm] = useState('');
  const [calculatedValues, setCalculatedValues] = useState([]);

  const handleCopyClick = (event, firstName) => {
    event.stopPropagation();
    if (firstName) {
      setCopiedFirstNames((prev) => [...prev, `({${firstName}})`]);
      console.log(`Copied First Name: {${firstName}}`);
    } else {
      console.log('No first name available');
    }
  };

  const handleCalculate = () => {
    const calculatedValue = {
      bodyWidth,
      bodyLength,
      gsm,
      calculatedResult:
        (parseFloat(bodyWidth) + parseFloat(bodyLength)) / parseFloat(gsm),
    };
    setCalculatedValues((prev) => [...prev, calculatedValue]);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'copy',
      headerName: 'Copy',
      width: 100,
      renderCell: (params) => (
        <IconButton
          onClick={(event) => handleCopyClick(event, params.row?.firstName)}
        >
          <ContentCopyIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      <input type="text" />

      <table style={{ border: '1px solid black' }}>
        <thead>
          <tr>
            <td>Bodywidth</td>
            <td>Bodylength</td>
            <td>Gsm</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={bodyWidth}
                onChange={(e) => setBodyWidth(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={bodyLength}
                onChange={(e) => setBodyLength(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={gsm}
                onChange={(e) => setGsm(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleCalculate}>Calculate</button>
      <table style={{ border: '1px solid black' }}>
        <thead>
          <tr>
            <td>Body Width</td>
            <td>Body Length</td>
            <td>GSM</td>
            <td>Calculated Result</td>
          </tr>
        </thead>
        <tbody>
          {calculatedValues.map((value, index) => (
            <tr key={index}>
              <td>{value.bodyWidth}</td>
              <td>{value.bodyLength}</td>
              <td>{value.gsm}</td>
              <td>{value.calculatedResult}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
