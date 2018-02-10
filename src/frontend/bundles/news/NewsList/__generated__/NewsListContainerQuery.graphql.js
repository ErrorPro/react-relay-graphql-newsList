/**
 * @flow
 * @relayHash f38b85b22a46fa6055d8900951a4a2a7
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type NewsListContainerQueryResponse = {|
  +news: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string;
      |};
    |}>;
  |};
|};
*/


/*
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

fragment NewsListItemContainerFragment on News {
  id
  name
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "NewsListContainerQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 10,
            "type": "Int"
          }
        ],
        "concreteType": "NewsConnection",
        "name": "news",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "NewsEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "News",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "FragmentSpread",
                    "name": "NewsListItemContainerFragment",
                    "args": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "news{\"first\":10}"
      }
    ],
    "type": "viewer"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "NewsListContainerQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "NewsListContainerQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 10,
            "type": "Int"
          }
        ],
        "concreteType": "NewsConnection",
        "name": "news",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "NewsEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "News",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "news{\"first\":10}"
      }
    ]
  },
  "text": "query NewsListContainerQuery {\n  news(first: 10) {\n    edges {\n      node {\n        id\n        ...NewsListItemContainerFragment\n      }\n    }\n  }\n}\n\nfragment NewsListItemContainerFragment on News {\n  id\n  name\n}\n"
};

module.exports = batch;
