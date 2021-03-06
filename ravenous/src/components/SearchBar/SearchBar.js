import React from 'react'
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};




  class SearchBar extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        term: '',
        location: '',
        sortBy: 'best_match'
      };

      this.handleSortByChange = this.handleSortByChange.bind(this)
      this.handleTermChange = this.handleTermChange.bind(this)
      this.handleLocationChange = this.handleLocationChange.bind(this)

    }

    renderSortByOptions() {
      return Object.keys(sortByOptions).map(sortByOption => {
        let sortByOptionValue = sortByOptions[sortByOption];
        return <li key={sortByOptionValue}>{sortByOption}
        className={this.getSortByClass(sortByOptionValue)}
        onClick=handleSortByChange.bind(this.handleSortByChange, sortByOptionValue)</li>;
      });
    }

    getSortByClass(sortByOption) {
      if (this.state.sortBy === sortByOption) {
        return 'active';
      }
      else {
        return '';
      }
    }

    handleSortByChange(sortByOption) {
      this.setState({sortBy: sortByOption});
    }
    handleTermChange(event){
        this.setState({
          term: event.target.value
        })
    }
    handleLocationChange(event) {
      this.setState({
        location: event.target.value
      })
    }



  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
