import { StatusBar } from 'expo-status-bar';

import Rotas from './src/routes';
import StackRoutes from './src/routes/stack.routes'

export default function App() {
  return (
    <>
      {/* <StatusBar/> */}
      <StackRoutes />
    </>
  );
}


