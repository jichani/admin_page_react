import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/system';
import './App.css';
import Customer from './components/Customer';

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
  overflowX: "auto",
}));

const StyledTable = styled(Table)({
  minWidth: 1080,
});

const customers = [{
  'id': 1,
  'image': 'http://placehold.it/100',
  'name': '임지찬',
  'birthday': '951220',
  'gender': '남자',
  'jop': '대학생',
},
{
  'id': 2,
  'image': 'http://placehold.it/100',
  'name': '박준현',
  'birthday': '951225',
  'gender': '남자',
  'jop': '대학생',
},
{
  'id': 3,
  'image': 'http://placehold.it/100',
  'name': '장범준',
  'birthday': '200000',
  'gender': '남자',
  'jop': '대학생',
},
];

function App() {
  return (
    <StyledPaper>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(customer => { return (<Customer key={customer.id} id={customer.id} image={customer.image} name={customer.name} birthday={customer.birthday} gender={customer.gender} jop={customer.jop} />) })}
        </TableBody>
      </StyledTable>
    </StyledPaper>
  );
}

export default App;
