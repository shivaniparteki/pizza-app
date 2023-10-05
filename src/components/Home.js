import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


export const Home = () => {
  return (
    <div>
      <h1>I am Home component</h1>
      <NavLink to="/hdeals">Hdeals</NavLink> &nbsp;
      <NavLink to="/offers">Offers</NavLink>
      <br />
      <br />
      <br />
      <br />
      <fieldset>
        <legend>Nested</legend>
      </fieldset>


    </div>
  );
};