
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter data-TestId="child">
          <AllRoutes data-TestId="semi-child" />
        </BrowserRouter>
    </div>
  );
}

export default App;
