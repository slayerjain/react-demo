import React from 'react';
import uuid from 'uuid'
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';


import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../actions/filters'

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  }

  onDatesChanged = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChanged = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === 'amount') {
              props.dispatch(sortByAmount());
            }
          }}
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

export default connect(mapStateToProps)(ExpenseListFilters);
