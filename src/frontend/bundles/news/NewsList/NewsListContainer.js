import {
  graphql,
} from 'react-relay';
import { compose } from 'redux';
import { mapProps } from 'recompose';
import { queryRenderer } from 'relay-compose';

import NewsList from './NewsList';

export default compose(
  queryRenderer(graphql`
    query NewsListContainerQuery {
      news(first: 10) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `),
  mapProps(props => console.log(props)),
)(NewsList);