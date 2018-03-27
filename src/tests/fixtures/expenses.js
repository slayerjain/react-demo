import moment from 'moment';

export default [{
  id: '1',
  description: 'Dosa',
  note: '',
  amount: 123,
  createdAt: 0,
}, {
  id: '2',
  description: 'HRA',
  note: '',
  amount: 40000,
  createdAt: moment(0).subtract(4, 'days').valueOf(),
},{
  id: '3',
  description: 'Credit card',
  note: '',
  amount: 450000,
  createdAt: moment(0).add(4, 'days').valueOf(),
}];
