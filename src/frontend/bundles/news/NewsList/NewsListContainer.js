import React from 'react';
import {
  graphql,
} from 'react-relay';
import { compose } from 'redux';
import { mapProps } from 'recompose';
import { queryRenderer } from 'relay-compose';
import injectSheet from 'react-jss';

import NewsList from './NewsList';
import { NewsListItemContainer } from '../NewsListItem';
import styles from './styles';

// We can also use paginagion here.

export default compose(
  queryRenderer(graphql`
    query NewsListContainerQuery {
      news(first: 10) {
        edges {
          node {
            id
            ...NewsListItemContainerFragment
          }
        }
      }
    }
  `),
  mapProps(props => ({
    newsItems: props.news.edges.map(({ node }) => <NewsListItemContainer key={node.id} data={node} />),
  })),
  injectSheet(styles),
)(NewsList);
