import {
  graphql,
} from 'react-relay';
import { compose } from 'redux';
import { mapProps } from 'recompose';
import { fragment } from 'relay-compose';

import NewsListItem from './NewsListItem';

export default compose(
  fragment(graphql`
    fragment NewsListItemContainerFragment on News {
      id
      name
    }
  `),
)(NewsListItem);