import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewsListItem extends Component {
  render() {
    const { newsItems, classes } = this.props;

    return (
      <div className={classes.container}>
        {newsItems}
      </div>
    )
  }
}