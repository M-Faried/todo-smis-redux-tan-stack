import { StateManagerTypes, TodosStateManagerConfig } from '../config';

import {
    useTodoQueryData as useTodosStateDataQry,
    useTodoQueryActions as useTodosStateActionsQry
} from "../queries/todoQueries";

import {
    useTodosStateData as useTodosStateDataRdx,
    useTodosStateActions as useTodosStateActionsRdx
} from './todosStateSelectorRdx';

const useTodosStateData = TodosStateManagerConfig === StateManagerTypes.TanQuery ?
    useTodosStateDataQry :
    useTodosStateDataRdx;

const useTodosStateActions = TodosStateManagerConfig === StateManagerTypes.TanQuery ?
    useTodosStateActionsQry :
    useTodosStateActionsRdx;

export { useTodosStateData, useTodosStateActions }