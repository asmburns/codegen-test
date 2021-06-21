import {combineReducers} from 'redux';
import {
    IInitialState
} from "../constants";

import records from "./records";
import sort from "./sort";
import dataIsLoading from "./dataIsLoading";

export default combineReducers<IInitialState>(
    {
        records,
        sort,
        dataIsLoading,
        hints: () => {
            return {hints: {}}
        }
    }
);