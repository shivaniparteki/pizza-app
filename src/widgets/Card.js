import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { blue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

import PizzaImg from "../assets/pizza.jpg"

export const PizzaCard = ({ name, price, menu_description, pizza }) => {
  return (
    <Card sx={{ minWidth: 300 }}  >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            D
          </Avatar>
        }

        title={name}
        subheader={menu_description}
      />
      <img className='w-100' src={PizzaImg} alt='Pizza Img' />
      <CardContent>
        <p> Price is : &#8377; {price}  </p>


      </CardContent>
    </Card>
  );
}