import Planets from './components/planets/Planets';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import { ReactQueryDevtools } from 'react-query/devtools'

 // Create a client to use in the provider
 const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Planets />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      
  );
}

export default App;
