import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {HashRouter} from "react-router-dom";
import './index.css'
import App from './p1-main/m1-ui/u1-app/App'
import store from './p1-main/m1-ui/u1-app/redux/redux-store';
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <Provider store={store}>
          <App/>
        </Provider>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
)

serviceWorker.unregister()
