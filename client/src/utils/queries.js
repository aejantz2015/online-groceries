import { gql } from "@apollo/client";

export const QUERY_ITEMS = gql`
  query allItems {
    items {
      _id
      name
      description
      image
      price
      quantity
      department
    }
  }
`;

export const QUERY_SINGLE_ITEM = gql`
  query singleItem($itemId: ID!) {
    item(itemId: $itemId) {
      _id
      name
      description
      image
      price
      quantity
      department
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;
