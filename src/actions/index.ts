declare var Promise: any;

import {
    ActionTypes,
    recordsInitialData,
    TSortByState,
    TSortOrderState,
    TDataIsLoading,
    TRecordState,
    IRecordState,
    TRecordIdState
} from '../constants';


export interface IBaseActionCreator<T, P> {
    type: T;
    payload: P;
}

export interface IActionCreator<P> extends IBaseActionCreator<ActionTypes, P> {
    type: ActionTypes;
    payload: P;
}

export function actionCreator<T>(actionType: ActionTypes, data: T): IActionCreator<T> {
    return {
        type: actionType,
        payload: data
    }
}

export function setSortBy(by: TSortByState): IActionCreator<TSortByState> {
    return actionCreator<TSortByState>(ActionTypes.SET_SORT_BY, by);
}

export function setSortOrder(order: TSortOrderState): IActionCreator<TSortOrderState> {
    return actionCreator<TSortOrderState>(ActionTypes.SET_SORT_ORDER, order);
}

export function setDataLoading(isLoading: TDataIsLoading): IActionCreator<TDataIsLoading> {
    return actionCreator<TDataIsLoading>(ActionTypes.SET_DATA_LOADING, isLoading);
}

export function setRecords(records: TRecordState): IActionCreator<TRecordState> {
    return actionCreator<TRecordState>(ActionTypes.SET_RECORDS, records)
}

export function addRecord(record: IRecordState) {
    return actionCreator<IRecordState>(ActionTypes.ADD_RECORD, record)
}

export function removeRecord(recordId: TRecordIdState) {
    return actionCreator<TRecordIdState>(ActionTypes.REMOVE_RECORD, recordId)
}

export function setSort(by: TSortByState, order: TSortOrderState) {
    return (dispatch) => {
        dispatch(setSortBy(by));
        dispatch(setSortOrder(order));
    }
}

export function getRecords() {
    return (dispatch) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                dispatch(setRecords(recordsInitialData));
                dispatch(setDataLoading(true));
                resolve();
            }, 100)
        });
    }
}