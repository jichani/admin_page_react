import './App.css';
import Customer from './components/Customer';

const customer = {
  'name': '임지찬',
  'birthday': '951220',
  'gender': '남자',
  'jop': '대학생',
}

function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      jop={customer.jop}
    />
  );
}

export default App;
