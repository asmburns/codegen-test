export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ApplicationProperties = {
  __typename?: 'ApplicationProperties';
  uiDebugMode?: Maybe<Scalars['Boolean']>;
};

export type Client = {
  __typename?: 'Client';
  creditMark?: Maybe<Scalars['String']>;
  creditType?: Maybe<Scalars['String']>;
  crmId?: Maybe<Scalars['String']>;
  epkId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  k7m?: Maybe<Scalars['Boolean']>;
  mer?: Maybe<Scalars['Boolean']>;
  msh?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type ClientRejectionReason = {
  __typename?: 'ClientRejectionReason';
  clientId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  rejectionComment?: Maybe<Scalars['String']>;
  rejectionReasonCode?: Maybe<Scalars['String']>;
};

export type ClientRejectionReasonInput = {
  rejectionComment?: Maybe<Scalars['String']>;
  rejectionReasonCode?: Maybe<Scalars['String']>;
};

export type ClientRestrictionK7M = {
  __typename?: 'ClientRestrictionK7M';
  availabilityAll?: Maybe<Scalars['Boolean']>;
  availabilityMer?: Maybe<Scalars['Boolean']>;
  availabilityMsh?: Maybe<Scalars['Boolean']>;
  clientId?: Maybe<Scalars['String']>;
  clientRejectionReasons?: Maybe<Array<Maybe<ClientRejectionReason>>>;
  id?: Maybe<Scalars['String']>;
  pledgeDelayCode?: Maybe<Scalars['String']>;
  productRestrictions?: Maybe<Array<Maybe<ProductRestrictionK7M>>>;
  surDelayCode?: Maybe<Scalars['String']>;
  withPledge?: Maybe<Scalars['Boolean']>;
};

export type ClientRestrictionK7MInput = {
  availabilityAll?: Maybe<Scalars['Boolean']>;
  availabilityMer?: Maybe<Scalars['Boolean']>;
  availabilityMsh?: Maybe<Scalars['Boolean']>;
  clientId?: Maybe<Scalars['String']>;
  clientRejectionReasons?: Maybe<Array<Maybe<ClientRejectionReasonInput>>>;
  id?: Maybe<Scalars['String']>;
  pledgeDelayCode?: Maybe<Scalars['String']>;
  productRestrictions?: Maybe<Array<Maybe<ProductRestrictionK7MInput>>>;
  surDelayCode?: Maybe<Scalars['String']>;
  withPledge?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateClientRestrictionK7M?: Maybe<ClientRestrictionK7M>;
};


export type MutationUpdateClientRestrictionK7MArgs = {
  clientRestrictionK7M?: Maybe<ClientRestrictionK7MInput>;
};

export type ProductRestrictionK7M = {
  __typename?: 'ProductRestrictionK7M';
  amount?: Maybe<Scalars['Int']>;
  clientId?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['Int']>;
  productCode?: Maybe<Scalars['String']>;
};

export type ProductRestrictionK7MInput = {
  amount?: Maybe<Scalars['Int']>;
  period?: Maybe<Scalars['Int']>;
  productCode?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  applicationProperties?: Maybe<ApplicationProperties>;
  client?: Maybe<Client>;
  clientRestrictionK7M?: Maybe<ClientRestrictionK7M>;
  rejectionReasons?: Maybe<Array<Maybe<RejectionReason>>>;
  userAuthorities?: Maybe<UserAuthorities>;
};


export type QueryClientArgs = {
  crmId?: Maybe<Scalars['String']>;
  epkId?: Maybe<Scalars['String']>;
  inn?: Maybe<Scalars['String']>;
  kpp?: Maybe<Scalars['String']>;
  ogrn?: Maybe<Scalars['String']>;
};


export type QueryClientRestrictionK7MArgs = {
  clientId?: Maybe<Scalars['String']>;
};

export type RejectionReason = {
  __typename?: 'RejectionReason';
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sortNumber?: Maybe<Scalars['Int']>;
};

export type UserAuthorities = {
  __typename?: 'UserAuthorities';
  rights?: Maybe<Array<Maybe<UserRight>>>;
  roles?: Maybe<Array<Maybe<UserRole>>>;
};

export type UserRight = {
  __typename?: 'UserRight';
  name?: Maybe<Scalars['String']>;
};

export type UserRole = {
  __typename?: 'UserRole';
  archive?: Maybe<Scalars['Boolean']>;
  code?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};
