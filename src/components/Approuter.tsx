import { Route, Switch } from 'react-router-dom';
import { routes } from '../router/index';

export default function AppRouter() {
  return (
    <Switch>
      {routes.map(({ path, Component }) => {
        return (
          <Route path={path} component={Component} exact={true} key={path} />
        );
      })}
    </Switch>
  );
}
