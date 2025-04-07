import { Card, CardContent, Box, Button,Stack, CardMedia, Typography, CardActions, InputAdornment, IconButton} from "@mui/material";
import { FaCartShopping } from "react-icons/fa6";


function CardExerpt() {
    return ( <Stack>
            <Box display="flex" sx={{columnGap:"40px"}}>
<Card  sx={{width:"400px", }}>
    <CardContent
 >
          <CardMedia
          component="img"
          image="../../src/assets/galaxy.jpeg"
          sx={{
          width:"100%",
          height:"300px"
          }}
          />
        <Typography variant="h3" component="h1" >Our Galaxy</Typography>
        <Typography variant="h6" component="h1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit delectus neque similique vitae quos adipisci et reiciendis consequuntur impedit? Cum dicta voluptatem praesentium nihil ut deserunt cupiditate. Id, ad possimus!</Typography>
        <CardActions sx={{marginTop:"20px"}}>
        <Button variant="outlined"  >Explore now</Button>
        <Button>Learn More</Button>
          </CardActions>

    </CardContent>
</Card>
{/* Nikii Card */}
<Card sx={{width:"400px" ,height:"500px"}}>
    <CardContent   >
        <CardMedia
           component="img"
           image="../../src/assets/Nikii.jpeg"
           sx={{
           width:"100%",
           height:"300px"
           }}/>
        <Typography variant="h4" component='h1'>Shoe</Typography>
        <Typography variant="h6" component="h1">Nike Air Max</Typography>
        <Typography variant="h5" component="h1" color="pink">$30</Typography>
     <IconButton sx={{color:"blue" }}>
     <FaCartShopping />
     </IconButton>
        <Typography variant="h6">In Stock</Typography>
        
    </CardContent>
</Card>
            </Box>
    </Stack> );
}

export default CardExerpt;