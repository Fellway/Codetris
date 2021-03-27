import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
import Login from 'views/Login/Login';
import Dashboard from 'views/Dashboard/Dashboard';
import store from 'store';
import { Provider } from 'react-redux';
import PrivateRoute from 'views/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute exact path="/logout" component={Login} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
