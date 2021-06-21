import {SortOrder} from 'ufs-ui';

export const recordsInitialData: TRecordState = [
    {
        id: 'FEDOR',
        inn: 239873498724,
        kpp: 2309849039,
        name: 'ООО «Федор Двинятин»',
        sum: 12
    },
    {
        id: 'BORIS',
        inn: 234098240239,
        kpp: 3849483746,
        name: 'ООО «Борис Бурда»',
        sum: 3
    },
    {
        id: 'SERGEY',
        inn: 102983097304,
        kpp: 2723849392,
        name: 'ООО «Сергей Рублев и компания»',
        sum: 46
    },
    {
        id: 'ALEX',
        inn: 123456789012,
        kpp: 1234567890,
        name: 'ООО «Александр Друзь»',
        sum: 777
    },
    {
        id: 'HORNS',
        inn: 230920398302,
        kpp: 3893948209,
        name: 'ООО «Рога и копыта 2049»',
        sum: 0,
        disabled: true
    }
];

export type TRecordIdState = string;

export interface IRecordWithoutIdState {
    inn: number;
    kpp: number;
    name: string;
    sum: number;
    disabled?: boolean;
}

export interface IRecordState extends IRecordWithoutIdState {
    id: TRecordIdState;
}

export type TRecordRewriter<T, S> = {
    [P in keyof T]: S;
};

export type TSortByState = string;
export type TSortOrderState = SortOrder;

export interface ISortState {
    by: TSortByState;
    order: TSortOrderState;
}

export type TDataIsLoading = boolean;
export type TRecordState = IRecordState[];

export interface IInitialState {
    records: TRecordState,
    sort: ISortState,
    dataIsLoading: TDataIsLoading
    hints: any
}

export const initialState: IInitialState = {
    records: [],
    sort: {
        by: '',
        order: SortOrder.DESC
    },
    dataIsLoading: false,
    hints: {
        hints: {}
    }
};

export enum ActionTypes {
    SET_SORT_BY = 'setSortBy',
    SET_SORT_ORDER = 'setSortOrder',
    SET_RECORDS = 'setRecords',
    ADD_RECORD = 'addRecord',
    REMOVE_RECORD = 'removeRecord',
    SET_DATA_LOADING = 'setDataLoading',
}
