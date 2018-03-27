const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate,

});

const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate,

});

export { setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate };
