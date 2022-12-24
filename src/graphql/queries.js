/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMapleinvDB = /* GraphQL */ `
  query GetMapleinvDB($PK: String!, $SK: String!) {
    getMapleinvDB(PK: $PK, SK: $SK) {
      GSI1PK
      GSI1SK
      GSI2PK
      GSI2SK
      PK
      SK
      ItemID
      ItemName
      ItemPrice
      PriceDate
      ScrollCategory
      ScrollPercent
      ScrollStat
      ScrollType
    }
  }
`;

export const listMapleinvDBS = /* GraphQL */ `
  query ListMapleinvDBS(
    $filter: TableMapleinvDBFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMapleinvDBS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        GSI1PK
        GSI1SK
        GSI2PK
        GSI2SK
        PK
        SK
        ItemID
        ItemName
        ItemPrice
        PriceDate
        ScrollCategory
        ScrollPercent
        ScrollStat
        ScrollType
      }
      nextToken
    }
  }
`;
export const queryMapleinvScrollPrices = /* GraphQL */ `
  query QueryMapleinvDBSByGSI1PKGSI1SKIndex(
    $GSI1PK: String!
    $first: Int
    $after: String
  ) {
    queryMapleinvDBSByGSI1PKGSI1SKIndex(
      GSI1PK: $GSI1PK
      first: $first
      after: $after
    ) {
      items {
        ItemID
        ItemName
        ItemPrice
        PriceDate
        GSI2PK
      }
      nextToken
    }
  }
`;

export const queryMapleinvDBSByGSI1PKGSI1SKIndex = /* GraphQL */ `
  query QueryMapleinvDBSByGSI1PKGSI1SKIndex(
    $GSI1PK: String!
    $first: Int
    $after: String
  ) {
    queryMapleinvDBSByGSI1PKGSI1SKIndex(
      GSI1PK: $GSI1PK
      first: $first
      after: $after
    ) {
      items {
        GSI1PK
        GSI1SK
        GSI2PK
        GSI2SK
        PK
        SK
        ItemID
        ItemName
        ItemPrice
        PriceDate
        ScrollCategory
        ScrollPercent
        ScrollStat
        ScrollType
      }
      nextToken
    }
  }
`;
export const queryMapleinvDBSByGSI2PKGSI2SKIndex = /* GraphQL */ `
  query QueryMapleinvDBSByGSI2PKGSI2SKIndex(
    $GSI2PK: String!
    $first: Int
    $after: String
  ) {
    queryMapleinvDBSByGSI2PKGSI2SKIndex(
      GSI2PK: $GSI2PK
      first: $first
      after: $after
    ) {
      items {
        GSI1PK
        GSI1SK
        GSI2PK
        GSI2SK
        PK
        SK
        ItemID
        ItemName
        ItemPrice
        PriceDate
        ScrollCategory
        ScrollPercent
        ScrollStat
        ScrollType
      }
      nextToken
    }
  }
`;