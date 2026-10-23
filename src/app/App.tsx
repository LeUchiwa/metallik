import { RouterProvider } from 'react-router';
import { router } from './routes';
import { QuoteProvider } from './contexts/QuoteContext';

export default function App() {
  return (
    <QuoteProvider>
      <RouterProvider router={router} />
    </QuoteProvider>
  );
}
