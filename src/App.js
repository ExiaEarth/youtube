import{useRoutes}from 'react-router-dom';
import './App.scss';
import { routes } from './Routes';

function App() {
  // element permet de aller sur mes différente route/pages

  const element=useRoutes(routes)
  return (
    <div className="App">
      <main>
        {element}
      </main>
    </div>
  );
}

export default App;
