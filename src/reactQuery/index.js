import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const ReactQueryConfig = (props) => <QueryClientProvider client={queryClient} {...props} />;

export default ReactQueryConfig;