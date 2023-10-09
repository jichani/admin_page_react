import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/system';
import './App.css';
import Customer from './components/Customer';
import { Component } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import CustomerAdd from './components/CustomerAdd';

// MUI 컴포넌트에 스타일을 사용하는 방식
const StyledPaper = styled(Paper)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
  overflowX: "auto",
}));

const StyledTable = styled(Table)({
  minWidth: 1080,
});

const StyledProgress = styled(CircularProgress)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: '',
      completed: 0
    }
  };

  stateRefresh = () => {
    this.setState({
      customer: '',
      completed: 0
    });
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  }

  render() {
    return (
      <div>
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
                <TableCell>설정</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.customers ? this.state.customers.map(customer => { return (<Customer stateRefresh={this.stateRefresh} key={customer.id} id={customer.id} image={customer.image} name={customer.name} birthday={customer.birthday} gender={customer.gender} jop={customer.job} />) }) :
                <TableRow>
                  <TableCell colSpan={6} align='center'>
                    <StyledProgress variant='determinate' value={this.state.completed} />
                  </TableCell>
                </TableRow>
              }
            </TableBody>
          </StyledTable>
        </StyledPaper>
        <CustomerAdd stateRefresh={this.stateRefresh} />
      </div>
    );
  }
}

export default App;
