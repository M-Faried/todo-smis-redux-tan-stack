import { StateManagerTypes, TodosStateManagerConfig } from '../config';
import {
    useTodosStateData as useTodosStateDataQry,
    useTodosStateActions as useTodosStateActionsQry
} from './todosStateSelectorQry';
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