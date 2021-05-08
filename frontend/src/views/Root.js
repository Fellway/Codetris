import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
import Login from 'views/Login';
import Dashboard from 'views/Dashboard';
import store from 'store';
import { Provider } from 'react-redux';
import PrivateRoute from 'views/PrivateRoute';
import Projects from 'views/Projects';
import ProjectDetails from 'views/ProjectDetails';

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
              <PrivateRoute exact path="/projects" component={Projects} />
              <PrivateRoute exact path="/projects/:id" component={ProjectDetails} />
              <PrivateRoute exact path="/logout" component={Login} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
