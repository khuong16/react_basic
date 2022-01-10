import logo from './logo.svg';
import './App.scss';
import ListToDo from './Todos/ListToDo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import MyComponent from './Example/MyComponent';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

/**
 * 
 * 2. components: class components / function components (function, arrow)
 * function components thường dùng với hooks.
 * 
 * 
 */
function App() {
  // jsx
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/todo">
              <ListToDo />
            </Route>

            <Route path="/about">
              <MyComponent />
            </Route>

            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
          {/* <MyComponent /> */}

          {/* <ListToDo /> */}

          {/* <Home /> */}

        </header>

        <ToastContainer position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover />
      </div>
    </BrowserRouter>

  );
}

export default App;
