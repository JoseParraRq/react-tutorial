import { Suspense } from 'react';
import RoutesApp from './routes';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

function App() {
  return (
    <Suspense>
      <RoutesApp/>
    </Suspense>
  );
}

export default App;
