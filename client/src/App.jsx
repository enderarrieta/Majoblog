import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Characters from "./pages/characters/Characters"
import Portfolio from "./pages/portfolio/Portfolio"
import Contact from "./pages/contact/Contact"
import Footer from "./components/footer/footer"
import Home from "./pages/home/home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from 'react'
import { Context } from "./context/Context"

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
          <Footer />
        </Route>
        <Route path="/posts">
          <Homepage />
          <Footer />
        </Route>
        <Route path="/home">
          <Home />
          <Footer />
        </Route>
        <Route path="/works">
          <Portfolio />
        </Route>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/register">
          {user ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{user ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {user ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
