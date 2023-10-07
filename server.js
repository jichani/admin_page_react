const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([{
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
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port} :)`));