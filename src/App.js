import './App.css';
import Customer from './components/Customer';

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
    <div>
      {
        customers.map(customer => {
          return (
            <Customer
              key={customer.id}
              id={customer.id}
              image={customer.image}
              name={customer.name}
              birthday={customer.birthday}
              gender={customer.gender}
              jop={customer.jop}
            />
          )
        })
      }
    </div>
  );
}

export default App;
