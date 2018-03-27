import moment from 'moment';
import filterReducer from '../../reducers/filters';

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date', // Date or amount
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

test('should setup default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    ...filterReducerDefaultState,
  });
});

test('should set sortBy to amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toEqual('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    ...filterReducerDefaultState,
    sortBy: 'amount',
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filterReducer(currentState, action);
  expect(state).toEqual({
    ...filterReducerDefaultState,
    sortBy: 'date',
  });
});

test('should set text filter', () => {
  const text = 'This is a test filter';
  const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text });
  expect(state.text).toEqual(text);
});

test('should set startDate filter', () => {
  const startDate = moment();
  const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate });
  expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
  const endDate = moment();
  const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate });
  expect(state.endDate).toEqual(endDate);
});
