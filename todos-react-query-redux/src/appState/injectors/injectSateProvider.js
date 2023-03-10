import { StateManagerTypes, TodosStateManagerConfig } from "../config";
import injectReactQueryProvider from "./injectReactQueryProvider";
import injectReduxStore from "./injectReduxStore";

const injectStateProvider = TodosStateManagerConfig === StateManagerTypes.TanQuery ?
    injectReactQueryProvider :
    injectReduxStore;

export default injectStateProvider;