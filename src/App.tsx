import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/Approuter';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { LoginProvider } from './context';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <LoginProvider>
        <Router>
          <AppRouter />
        </Router>
      </LoginProvider>
    </Provider>
  );
}

export default App;
