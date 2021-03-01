import { gql } from '@apollo/client';

export const SHORTESTS_COUNTRIES_DISTANCE = gql`
  query ShortetsCountries($countries: [String!]!) {
    countries: Country(filter:{ name_in: $countries}) {
      _id,
      name,
      location {
        longitude,
        latitude
      }
    }
    }
`;

export const COUNTRYS = gql`
  query {
    Country {
       _id,
      name
      capital,
      flag {
        svgFile
      },
      area,
      population,
      topLevelDomains {
        name
      },
      location {
        longitude,
        latitude,
        x,
        y
      },
      distanceToOtherCountries(first: 5) {
        countryName,
        distanceInKm
      }
    }
  }
`

export const LIST = gql`
  query {
    list @client
  }
`

export const DETAILS = gql`
  query {
    details
  }
`