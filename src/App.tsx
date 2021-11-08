import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/Approuter';
import 'antd/dist/antd.css';
import { LoginProvider } from './context';

function App() {
  return (
    <LoginProvider>
      <Router>
        <AppRouter />
      </Router>
    </LoginProvider>
  );
}

export default App;
