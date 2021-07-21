export interface OrganizationType {
  id: string;
  crmId: string;
  eksId: string;
  creditMark: string;
  msh: boolean;
  mer: boolean;
  k7m: boolean;
  creditType: string;
}

export interface TabItem {
  id: string;
  title: string;
}

export interface TableHeaderItem {
  title: string;
}

export interface PriceDataK7M {
  type: string;
  strat: boolean;
  norm: number;
  fact: number;
  kot: number;
  period_start: Date;
  period_end: Date;
}
