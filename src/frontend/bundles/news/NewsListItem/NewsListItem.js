import React from 'react';
import PropTypes from 'prop-types';

const NewsListItem = ({ data, classes }) => (
  <div className={classes.container}>
    <span>{data.name}</span>
  </div>
);

NewsListItem.propTypes = {
  data: PropTypes.object.isRequired,
  classes: PropTypes.object,
};


export default NewsListItem;
