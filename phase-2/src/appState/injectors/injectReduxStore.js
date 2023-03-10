import { Provider } from 'react-redux';
import store from '../redux/store';

const injectReduxStore = (WrappedComponent) => {
    return (props) => (
        <Provider store={store}>
            <WrappedComponent {...props} />
        </Provider>
    )
}

export default injectReduxStore;