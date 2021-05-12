import Home from "./pages/home";
import Contact from "./pages/contact";
import AdminPanel from "./pages/dashboard";
import Post from "./pages/post";
import LayoutPage from "./pages/layout";
import MarketingPage from "./pages/marketing";
import ConstructionPage from "./pages/construction";
import Navbar from "./pages/components/navbar";
import PostEntry from "./pages/components/postEntry";
import ContactPostEntry from "./pages/components/contactPostEntry";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {/* admin panel routes */}
        <Route path="/admin">
          <AdminPanel />
        </Route>
        <Route path="/postEntry">
          <PostEntry />
        </Route>
        <Route path="/contactPostEntry">
          <ContactPostEntry />
        </Route>
      </Switch>
      <Navbar />
      <Switch>
        {/* main pages routes */}
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/post">
          <Post />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/layout">
          <LayoutPage />
        </Route>
        <Route path="/construction">
          <ConstructionPage />
        </Route>
        <Route path="/marketing">
          <MarketingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
