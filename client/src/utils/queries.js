import { gql } from "@apollo/client";

export const QUERY_ITEMS = gql`
  query allItems {
    items {
      description
      image
      name
      price
      quantity
      _id
    }
  }
`;

export const QUERY_SINGLE_ITEM = gql`
  query item($id: ID!) {
    item(_id: $id) {
      _id
      image
      name
      description
      price
      quantity
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
