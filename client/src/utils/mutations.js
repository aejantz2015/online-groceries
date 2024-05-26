import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation addProfile(
    $first_name: String!
    $last_name: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addProfile(
      first_name: $first_name
      last_name: $last_name
      username: $username
      email: $email
      password: $password
    ) {
      token
      profile {
        _id
        username
      }
    }
  }
`;

export const ADD_SKILL = gql`
  mutation addSkill($profileId: ID!, $skill: String!) {
    addSkill(profileId: $profileId, skill: $skill) {
      _id
      name
      skills
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const REMOVE_SKILL = gql`
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      skills
    }
  }
`;
