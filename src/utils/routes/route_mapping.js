import { Route, Switch } from "react-router-dom";
import { Desserts } from "../../components/Desserts";
import { Drinks } from "../../components/Drinks";
import { Hdeals } from "../../components/Hdeals";
import { Home } from "../../components/Home";
import { Offers } from "../../components/Offers";
import { Pizzas } from "../../components/Pizzas";

export const routeMapping = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pizzas" component={Pizzas} />
      <Route path="/desserts" component={Desserts} />
      <Route path="/drinks" component={Drinks} />
      <Switch>
        <Route path="/hdeals" component={Hdeals} />
        <Route path="/offers" component={Offers} />
      </Switch>
      <Route
        render={() => {
          return (
            <h1>Oops! Something Wrong</h1>
          )
        }} />

    </Switch>

  )
}