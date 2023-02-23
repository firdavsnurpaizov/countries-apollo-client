import {gql} from "@apollo/client";

export const GET_COUNTRIES = gql`
    query countries {
      countries {
        code
        name
        native
        phone
        capital
        currency
        languages {
          name
          native
          rtl
        }
        continent {
          name
        }
        emoji
        states {
          name
        }
  }
}
`

export const GET_COUNTRY = gql`
query countries ($filter: CountryFilterInput) {
  countries (filter: $filter) {
    code
    name
    native
    phone
    capital 
    currency
    languages {
      name
      native
      rtl
    }
    continent {
      name
    }
    emoji
    states {
      name
    }
  }
}
`