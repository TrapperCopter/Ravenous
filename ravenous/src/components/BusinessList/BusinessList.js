import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render () {
    return () {
      <div className="BusinessList">
      <Business className= "Business" />
      <Business className= "image-container" />
      <Business className= "Business.information" />
      <Business className= "Business.address" />
      <Business className= "Business.reviews" />
      <Business className= "Business.rating" />
</div>

    }
  }
}
