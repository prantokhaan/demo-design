import logo from './logo.svg';
import './App.css';
import Appbar from './Pages/Shared/Appbar/Appbar';
import Drawer from './Pages/Shared/Drawer/Drawer';
import AddUser from './Pages/Dashboard/AddUser/AddUser';
import SetUp from './Pages/Company/SetUp/SetUp';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Company from './Pages/Company/Company/Company';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Drawer />
        <Switch>
          <Route exact path="/">
            <SetUp />
          </Route>
          <Route path="/company-setup">
            <SetUp />
          </Route>
          <Route path="/add-user">
            <AddUser />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
