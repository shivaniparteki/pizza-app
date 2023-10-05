import { useEffect, useState } from "react";
import getPizza from "../utils/api_client";
import { PizzaCard } from "../widgets/Card";

export const Pizzas =()=> {
  const [pizzaState, setPizza ] = useState( {pizzas: []})
  const loadPizza = () => {
    
      const response = getPizza();
  
      response
        .then((res) => {
          setPizza({pizzas: res.data["Vegetarian"]})
          // this.setState({ Pizzas: res.data["Vegetarian"] });
          console.log('data is', res.data["Vegetarian"]);
  
        })
        .catch((err) => {
          console.log('Error is ', err);
        })
        .finally(() => {
          console.log('Always Run......');
        });
    }
 

  useEffect(() => {
    loadPizza();

  }, [pizzaState]); //Component didMount

  return(
    <> 
          <h1> I am Pizzas </h1>
          <div className="d-flex gap-3 " >
           {
                pizzaState?.pizzas?.map((pizza, index) => {
                 // console.log(pizza);
                return (
                   < PizzaCard name={pizza?.name} price={pizza?.price} menu_description={pizza?.menu_description
                   } pizza={pizza} key={index} />
                 )
               } 

               )
             }
           </div>

    </>
    
     
    
  );
}