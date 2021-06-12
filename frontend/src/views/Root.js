import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/MainTheme';
import Login from 'views/Login';
import Dashboard from 'views/Dashboard';
import store from 'store';
import { Provider } from 'react-redux';
import PrivateRoute from 'views/PrivateRoute';
import Projects from 'views/Projects';
import ProjectDetails from 'views/ProjectDetails';
import Calendar from './Calendar';
import Tasks from './Tasks';
import Settings from './Settings';

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
              <PrivateRoute exact path="/calendar" component={Calendar} />
              <PrivateRoute exact path="/tasks" component={Tasks} />
              <PrivateRoute exact path="/settings" component={Settings} />
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
