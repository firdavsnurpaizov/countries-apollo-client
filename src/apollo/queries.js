import {gql} from '@apollo/client';

export const GET_COUNTRIES = gql(`
    query countries {
      countries {
        name
        phone
        capital
        currency
        languages {
          native
        }
        continent {
          name
        }
        emoji
  }
}
`)

export const GET_COUNTRY = gql(`
query countries ($filter: CountryFilterInput) {
  countries (filter: $filter) {
    name
    native
    phone
    capital 
    currency
    languages {
      native
    }
    continent {
      name
    }
    emoji
  }
}
`)