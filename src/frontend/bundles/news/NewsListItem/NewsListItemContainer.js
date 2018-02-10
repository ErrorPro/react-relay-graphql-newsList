import {
  graphql,
} from 'react-relay';
import { compose } from 'redux';
import { fragment } from 'relay-compose';
import injectSheet from 'react-jss';

import NewsListItem from './NewsListItem';
import styles from './styles';

export default compose(
  fragment(graphql`
    fragment NewsListItemContainerFragment on News {
      id
      name
    }
  `),
  injectSheet(styles),
)(NewsListItem);
