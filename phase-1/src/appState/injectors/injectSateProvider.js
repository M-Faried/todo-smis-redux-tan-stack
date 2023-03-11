import { Provider } from 'react-redux';
import store from '../redux/store';

const injectStateProvider = (WrappedComponent) => {
    return (props) => (
        <Provider store={store}>
            <WrappedComponent {...props} />
        </Provider>
    )
}

export default injectStateProvider;