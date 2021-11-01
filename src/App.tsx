import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/Approuter';
import 'antd/dist/antd.css';


function App() {
  return (
    <Router>
      <AppRouter/>
    </Router>
  );
}

export default App;
