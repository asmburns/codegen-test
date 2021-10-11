import * as Types from './schemas';

export type GetApplicationPropertiesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetApplicationPropertiesQuery = { __typename?: 'Query', applicationProperties?: { __typename?: 'ApplicationProperties', uiDebugMode?: boolean | null | undefined } | null | undefined };

export type GetBasicPropertiesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetBasicPropertiesQuery = { __typename?: 'Query', applicationProperties?: { __typename?: 'ApplicationProperties', uiDebugMode?: boolean | null | undefined } | null | undefined, userAuthorities?: { __typename?: 'UserAuthorities', roles?: Array<{ __typename?: 'UserRole', id: string, name?: string | null | undefined, code?: string | null | undefined } | null | undefined> | null | undefined, rights?: Array<{ __typename?: 'UserRight', name?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetClientQueryVariables = Types.Exact<{
  crmId?: Types.Maybe<Types.Scalars['String']>;
}>;


export type GetClientQuery = { __typename?: 'Query', client?: { __typename?: 'Client', id: string, crmId?: string | null | undefined, epkId?: string | null | undefined, creditMark?: string | null | undefined, msh?: boolean | null | undefined, mer?: boolean | null | undefined, k7m?: boolean | null | undefined, creditType?: string | null | undefined } | null | undefined };

export type GetRestrictionsQueryVariables = Types.Exact<{
  clientId?: Types.Maybe<Types.Scalars['String']>;
}>;


export type GetRestrictionsQuery = { __typename?: 'Query', clientRestrictionK7M?: { __typename?: 'ClientRestrictionK7M', id?: string | null | undefined, clientId?: string | null | undefined, availabilityAll?: boolean | null | undefined, withPledge?: boolean | null | undefined, availabilityMsh?: boolean | null | undefined, availabilityMer?: boolean | null | undefined, surDelayCode?: string | null | undefined, pledgeDelayCode?: string | null | undefined, clientRejectionReasons?: Array<{ __typename?: 'ClientRejectionReason', id: string, clientId?: string | null | undefined, rejectionReasonCode?: string | null | undefined, rejectionComment?: string | null | undefined } | null | undefined> | null | undefined, productRestrictions?: Array<{ __typename?: 'ProductRestrictionK7M', clientId?: string | null | undefined, productCode?: string | null | undefined, amount?: number | null | undefined, period?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type GetRejectionReasonsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetRejectionReasonsQuery = { __typename?: 'Query', rejectionReasons?: Array<{ __typename?: 'RejectionReason', code?: string | null | undefined, name?: string | null | undefined, description?: string | null | undefined, sortNumber?: number | null | undefined } | null | undefined> | null | undefined };

export type GetUserAuthoritiesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUserAuthoritiesQuery = { __typename?: 'Query', userAuthorities?: { __typename?: 'UserAuthorities', roles?: Array<{ __typename?: 'UserRole', id: string, name?: string | null | undefined, code?: string | null | undefined } | null | undefined> | null | undefined, rights?: Array<{ __typename?: 'UserRight', name?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type UpdateClientRestrictionK7MMutationVariables = Types.Exact<{
  id?: Types.Maybe<Types.Scalars['String']>;
  clientId?: Types.Maybe<Types.Scalars['String']>;
  availabilityAll?: Types.Maybe<Types.Scalars['Boolean']>;
  withPledge?: Types.Maybe<Types.Scalars['Boolean']>;
  availabilityMer?: Types.Maybe<Types.Scalars['Boolean']>;
  availabilityMsh?: Types.Maybe<Types.Scalars['Boolean']>;
  surDelayCode?: Types.Maybe<Types.Scalars['String']>;
  pledgeDelayCode?: Types.Maybe<Types.Scalars['String']>;
  clientRejectionReasons?: Types.Maybe<Array<Types.Maybe<Types.ClientRejectionReasonInput>> | Types.Maybe<Types.ClientRejectionReasonInput>>;
  productRestrictions?: Types.Maybe<Array<Types.Maybe<Types.ProductRestrictionK7MInput>> | Types.Maybe<Types.ProductRestrictionK7MInput>>;
}>;


export type UpdateClientRestrictionK7MMutation = { __typename?: 'Mutation', updateClientRestrictionK7M?: { __typename?: 'ClientRestrictionK7M', id?: string | null | undefined, clientId?: string | null | undefined, availabilityAll?: boolean | null | undefined, withPledge?: boolean | null | undefined, availabilityMer?: boolean | null | undefined, availabilityMsh?: boolean | null | undefined, surDelayCode?: string | null | undefined, pledgeDelayCode?: string | null | undefined, clientRejectionReasons?: Array<{ __typename?: 'ClientRejectionReason', id: string, clientId?: string | null | undefined, rejectionReasonCode?: string | null | undefined, rejectionComment?: string | null | undefined } | null | undefined> | null | undefined, productRestrictions?: Array<{ __typename?: 'ProductRestrictionK7M', clientId?: string | null | undefined, productCode?: string | null | undefined, amount?: number | null | undefined, period?: number | null | undefined } | null | undefined> | null | undefined } | null | undefined };
