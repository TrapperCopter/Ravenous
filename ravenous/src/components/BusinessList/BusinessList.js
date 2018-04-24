import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render () {
    return (
      <div className="BusinessList">
      {
      this.BusinessList.map(functionName(business)
    {
      return (
        < Business business = {this.business}/>
      )
    });
      }

</div>
      )
    }
  }

export default BusinessList;
