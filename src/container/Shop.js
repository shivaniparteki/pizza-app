import React from "react";
import getPizza from "../utils/api_client";
import { Container } from "@mui/material";
import { PizzaCard } from "../widgets/Card";
import { Menu } from "../widgets/Menu";
import { routeMapping } from "../utils/routes/route_mapping";



export const Shop = ()=> {
   
  return (
    <Container>
      <h1>Pizza Shop</h1>

           <div className="menu my-5 d-flex justify-content-between bg-primary rounded">
             <Menu />


             <div className="input p-2 rounded ">
              <input className="rounded border-0 px-2 py-2" type="search" placeholder="Search" />
             </div>
           </div>

           {routeMapping()}
    </Container>
  );

}
// export class Shop extends React.Component {                    
//   constructor() {
//     super();
//     this.state = { Pizzas: [] };


//   }

//   componentDidMount() {  
//     this.loadPizza();
//   }

//   componentWillUnmount() {
//     //clean up code
//   }

  // loadPizza() {
  //   const response = getPizza();

  //   response
  //     .then((res) => {
  //       this.setState({ Pizzas: res.data["Vegetarian"] });
  //       console.log('data is', res.data["Vegetarian"]);

  //     })
  //     .catch((err) => {
  //       console.log('Error is ', err);
  //     })
  //     .finally(() => {
  //       console.log('Always Run......');
  //     });
  // }
//   render() {
//     return (
//       <>
//         <Container >
//           <h1>Pizza Shop</h1>

//           <div className="menu my-5 d-flex justify-content-between bg-primary">
//             <Menu />


//             <div className="input p-2">
//               <input type="search" placeholder="Search" />
//             </div>
//           </div>

//           {routeMapping()}

//           <div className="d-flex gap-3 " >
//             {
//               this.state?.Pizzas?.map((pizza, index) => {
//                 // console.log(pizza);
//                 return (
//                   < PizzaCard name={pizza?.name} price={pizza?.price} menu_description={pizza?.menu_description
//                   } pizza={pizza} key={index} />
//                 )
//               }

//               )
//             }
//           </div>

//         </Container>


//       </>
//     )
//   }
// }