import * as Types from './operations';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}

export const GetApplicationPropertiesDocument = gql`
    query getApplicationProperties {
  applicationProperties {
    uiDebugMode
  }
}
    `;

/**
 * __useGetApplicationPropertiesQuery__
 *
 * To run a query within a React component, call `useGetApplicationPropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetApplicationPropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetApplicationPropertiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetApplicationPropertiesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetApplicationPropertiesQuery, Types.GetApplicationPropertiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetApplicationPropertiesQuery, Types.GetApplicationPropertiesQueryVariables>(GetApplicationPropertiesDocument, options);
      }
export function useGetApplicationPropertiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetApplicationPropertiesQuery, Types.GetApplicationPropertiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetApplicationPropertiesQuery, Types.GetApplicationPropertiesQueryVariables>(GetApplicationPropertiesDocument, options);
        }
export type GetApplicationPropertiesQueryHookResult = ReturnType<typeof useGetApplicationPropertiesQuery>;
export type GetApplicationPropertiesLazyQueryHookResult = ReturnType<typeof useGetApplicationPropertiesLazyQuery>;
export type GetApplicationPropertiesQueryResult = Apollo.QueryResult<Types.GetApplicationPropertiesQuery, Types.GetApplicationPropertiesQueryVariables>;
export const GetBasicPropertiesDocument = gql`
    query getBasicProperties {
  applicationProperties {
    uiDebugMode
  }
  userAuthorities {
    roles {
      id
      name
      code
    }
    rights {
      name
    }
  }
}
    `;

/**
 * __useGetBasicPropertiesQuery__
 *
 * To run a query within a React component, call `useGetBasicPropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBasicPropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBasicPropertiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBasicPropertiesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetBasicPropertiesQuery, Types.GetBasicPropertiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetBasicPropertiesQuery, Types.GetBasicPropertiesQueryVariables>(GetBasicPropertiesDocument, options);
      }
export function useGetBasicPropertiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetBasicPropertiesQuery, Types.GetBasicPropertiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetBasicPropertiesQuery, Types.GetBasicPropertiesQueryVariables>(GetBasicPropertiesDocument, options);
        }
export type GetBasicPropertiesQueryHookResult = ReturnType<typeof useGetBasicPropertiesQuery>;
export type GetBasicPropertiesLazyQueryHookResult = ReturnType<typeof useGetBasicPropertiesLazyQuery>;
export type GetBasicPropertiesQueryResult = Apollo.QueryResult<Types.GetBasicPropertiesQuery, Types.GetBasicPropertiesQueryVariables>;
export const GetClientDocument = gql`
    query getClient($crmId: String) {
  client(crmId: $crmId) {
    id
    crmId
    epkId
    creditMark
    msh
    mer
    k7m
    creditType
  }
}
    `;

/**
 * __useGetClientQuery__
 *
 * To run a query within a React component, call `useGetClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClientQuery({
 *   variables: {
 *      crmId: // value for 'crmId'
 *   },
 * });
 */
export function useGetClientQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetClientQuery, Types.GetClientQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetClientQuery, Types.GetClientQueryVariables>(GetClientDocument, options);
      }
export function useGetClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetClientQuery, Types.GetClientQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetClientQuery, Types.GetClientQueryVariables>(GetClientDocument, options);
        }
export type GetClientQueryHookResult = ReturnType<typeof useGetClientQuery>;
export type GetClientLazyQueryHookResult = ReturnType<typeof useGetClientLazyQuery>;
export type GetClientQueryResult = Apollo.QueryResult<Types.GetClientQuery, Types.GetClientQueryVariables>;
export const GetRestrictionsDocument = gql`
    query getRestrictions($clientId: String) {
  clientRestrictionK7M(clientId: $clientId) {
    id
    clientId
    availabilityAll
    withPledge
    availabilityMsh
    availabilityMer
    surDelayCode
    pledgeDelayCode
    clientRejectionReasons {
      id
      clientId
      rejectionReasonCode
      rejectionComment
    }
    productRestrictions {
      clientId
      productCode
      amount
      period
    }
  }
}
    `;

/**
 * __useGetRestrictionsQuery__
 *
 * To run a query within a React component, call `useGetRestrictionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRestrictionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRestrictionsQuery({
 *   variables: {
 *      clientId: // value for 'clientId'
 *   },
 * });
 */
export function useGetRestrictionsQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetRestrictionsQuery, Types.GetRestrictionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetRestrictionsQuery, Types.GetRestrictionsQueryVariables>(GetRestrictionsDocument, options);
      }
export function useGetRestrictionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetRestrictionsQuery, Types.GetRestrictionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetRestrictionsQuery, Types.GetRestrictionsQueryVariables>(GetRestrictionsDocument, options);
        }
export type GetRestrictionsQueryHookResult = ReturnType<typeof useGetRestrictionsQuery>;
export type GetRestrictionsLazyQueryHookResult = ReturnType<typeof useGetRestrictionsLazyQuery>;
export type GetRestrictionsQueryResult = Apollo.QueryResult<Types.GetRestrictionsQuery, Types.GetRestrictionsQueryVariables>;
export const GetRejectionReasonsDocument = gql`
    query getRejectionReasons {
  rejectionReasons {
    code
    name
    description
    sortNumber
  }
}
    `;

/**
 * __useGetRejectionReasonsQuery__
 *
 * To run a query within a React component, call `useGetRejectionReasonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRejectionReasonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRejectionReasonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRejectionReasonsQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetRejectionReasonsQuery, Types.GetRejectionReasonsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetRejectionReasonsQuery, Types.GetRejectionReasonsQueryVariables>(GetRejectionReasonsDocument, options);
      }
export function useGetRejectionReasonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetRejectionReasonsQuery, Types.GetRejectionReasonsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetRejectionReasonsQuery, Types.GetRejectionReasonsQueryVariables>(GetRejectionReasonsDocument, options);
        }
export type GetRejectionReasonsQueryHookResult = ReturnType<typeof useGetRejectionReasonsQuery>;
export type GetRejectionReasonsLazyQueryHookResult = ReturnType<typeof useGetRejectionReasonsLazyQuery>;
export type GetRejectionReasonsQueryResult = Apollo.QueryResult<Types.GetRejectionReasonsQuery, Types.GetRejectionReasonsQueryVariables>;
export const GetUserAuthoritiesDocument = gql`
    query getUserAuthorities {
  userAuthorities {
    roles {
      id
      name
      code
    }
    rights {
      name
    }
  }
}
    `;

/**
 * __useGetUserAuthoritiesQuery__
 *
 * To run a query within a React component, call `useGetUserAuthoritiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserAuthoritiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserAuthoritiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserAuthoritiesQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetUserAuthoritiesQuery, Types.GetUserAuthoritiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetUserAuthoritiesQuery, Types.GetUserAuthoritiesQueryVariables>(GetUserAuthoritiesDocument, options);
      }
export function useGetUserAuthoritiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetUserAuthoritiesQuery, Types.GetUserAuthoritiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetUserAuthoritiesQuery, Types.GetUserAuthoritiesQueryVariables>(GetUserAuthoritiesDocument, options);
        }
export type GetUserAuthoritiesQueryHookResult = ReturnType<typeof useGetUserAuthoritiesQuery>;
export type GetUserAuthoritiesLazyQueryHookResult = ReturnType<typeof useGetUserAuthoritiesLazyQuery>;
export type GetUserAuthoritiesQueryResult = Apollo.QueryResult<Types.GetUserAuthoritiesQuery, Types.GetUserAuthoritiesQueryVariables>;
export const UpdateClientRestrictionK7MDocument = gql`
    mutation updateClientRestrictionK7M($id: String, $clientId: String, $availabilityAll: Boolean, $withPledge: Boolean, $availabilityMer: Boolean, $availabilityMsh: Boolean, $surDelayCode: String, $pledgeDelayCode: String, $clientRejectionReasons: [ClientRejectionReasonInput], $productRestrictions: [ProductRestrictionK7MInput]) {
  updateClientRestrictionK7M(
    clientRestrictionK7M: {id: $id, clientId: $clientId, availabilityAll: $availabilityAll, withPledge: $withPledge, availabilityMer: $availabilityMer, availabilityMsh: $availabilityMsh, surDelayCode: $surDelayCode, pledgeDelayCode: $pledgeDelayCode, clientRejectionReasons: $clientRejectionReasons, productRestrictions: $productRestrictions}
  ) {
    id
    clientId
    availabilityAll
    withPledge
    availabilityMer
    availabilityMsh
    surDelayCode
    pledgeDelayCode
    clientRejectionReasons {
      id
      clientId
      rejectionReasonCode
      rejectionComment
    }
    productRestrictions {
      clientId
      productCode
      amount
      period
    }
  }
}
    `;
export type UpdateClientRestrictionK7MMutationFn = Apollo.MutationFunction<Types.UpdateClientRestrictionK7MMutation, Types.UpdateClientRestrictionK7MMutationVariables>;

/**
 * __useUpdateClientRestrictionK7MMutation__
 *
 * To run a mutation, you first call `useUpdateClientRestrictionK7MMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateClientRestrictionK7MMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateClientRestrictionK7MMutation, { data, loading, error }] = useUpdateClientRestrictionK7MMutation({
 *   variables: {
 *      id: // value for 'id'
 *      clientId: // value for 'clientId'
 *      availabilityAll: // value for 'availabilityAll'
 *      withPledge: // value for 'withPledge'
 *      availabilityMer: // value for 'availabilityMer'
 *      availabilityMsh: // value for 'availabilityMsh'
 *      surDelayCode: // value for 'surDelayCode'
 *      pledgeDelayCode: // value for 'pledgeDelayCode'
 *      clientRejectionReasons: // value for 'clientRejectionReasons'
 *      productRestrictions: // value for 'productRestrictions'
 *   },
 * });
 */
export function useUpdateClientRestrictionK7MMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateClientRestrictionK7MMutation, Types.UpdateClientRestrictionK7MMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.UpdateClientRestrictionK7MMutation, Types.UpdateClientRestrictionK7MMutationVariables>(UpdateClientRestrictionK7MDocument, options);
      }
export type UpdateClientRestrictionK7MMutationHookResult = ReturnType<typeof useUpdateClientRestrictionK7MMutation>;
export type UpdateClientRestrictionK7MMutationResult = Apollo.MutationResult<Types.UpdateClientRestrictionK7MMutation>;
export type UpdateClientRestrictionK7MMutationOptions = Apollo.BaseMutationOptions<Types.UpdateClientRestrictionK7MMutation, Types.UpdateClientRestrictionK7MMutationVariables>;