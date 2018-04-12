import React from 'react';
import uuid from 'uuid'
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';


import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  }

  onDatesChanged = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChanged = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  }

  onSortChange = e => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId={uuid()}
          endDate={this.props.filters.endDate}
          endDateId={uuid()}
          onDatesChange={this.onDatesChanged}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChanged}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => (false)}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDAte: endDate => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
