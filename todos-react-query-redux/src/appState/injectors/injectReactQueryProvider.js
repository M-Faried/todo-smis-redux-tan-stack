import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const injectReactQueryProvider = (WrappedComponent) => {
    return (props) => {
        return (
            <QueryClientProvider client={queryClient}>
                <WrappedComponent {...props} />
                <ReactQueryDevtools initialIsOpen />
            </QueryClientProvider>
        )
    }
}

export default injectReactQueryProvider;