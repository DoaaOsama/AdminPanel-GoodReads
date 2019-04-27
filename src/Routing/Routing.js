import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminPanel from "../Component/AdminPanel/AdminPanel";

const Routing = () => {
  return (
    <Switch>
      
      {/* <Route exact path="/mybooks" component={NavBar} /> */}
      {/* <Route exact path="/"  component={Login} /> */}
      {/* <Route exact path="/books/:bookid" component={BookDetails}></Route> */}
      {/* <Route path="/books/:id" component={BookDetails} />
      <Route path="/categories/:id" component={Category} />
      <Route path="/authors/:id" component={AuthorDetails} />
      <Route path="/categories" component={CategoriesList} />
      <Route path="/authors" component={AuthorsList} />
      <Route path="/books" component={BooksList} />
      <Route exact path="/home" component={MainPage} />
      <Route path="/login" component={Login} />
      <Route exact path="/signup"  component={SignForm} />
      <Route path="/results" component={Books} /> */}
      <Route exact path="/"  component={AdminPanel} />
      <Route path="/admin" component={AdminPanel} />

      {/* <Route path='/' component={SearchBar} /> */}
    </Switch>
  );
};
export default Routing;
