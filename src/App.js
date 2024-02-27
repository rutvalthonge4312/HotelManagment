
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AllRoutes from './AllRoutes';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter data-TestId="child">
          <AllRoutes data-TestId="semi-child" />
        </BrowserRouter>
    </div>
  );
}

export default App;
