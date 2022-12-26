import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store, history } from "./store";

import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import { ThemeProvider } from 'styled-components'
import theme from "./styled/theme";

import App from "./components/App";
import GlobalStyle from "./styled/GlobalStyle"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <>
      <GlobalStyle />
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
      </>
    </Provider>
  </ThemeProvider>,

  document.getElementById("root")
);
