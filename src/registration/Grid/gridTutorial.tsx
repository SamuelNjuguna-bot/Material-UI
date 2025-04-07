import { Grid, Stack } from "@mui/material";

function GridTech() {
    return ( <Stack display="flex" justifyContent="center" alignItems="center">
    <h1>Implementing Grid</h1>
    <Grid container rowGap={2} columnGap={4} >
        <Grid bgcolor="blue" size={{xs: 12, md:6, xl:4}} >
            Grid One
        </Grid>
        <Grid p={2} bgcolor="green"size={{xs: 12, md:6, xl:4}}>
            Grid Two
        </Grid>
        <Grid p={2} bgcolor="yellow" size={{xs: 12, md:6, xl:4}}>
            Grid Three
        </Grid>
        <Grid p={2} bgcolor="red" size={{xs: 12, md:6, xl:4}}>
            Grid Four
        </Grid>
        <Grid p={2} bgcolor="grey" size={{xs: 12, md:6, xl:4}}>
            Grid Five
        </Grid>
        <Grid p={2} bgcolor="orange"size={{xs: 12, md:6, xl:4}}>
            Grid Six
        </Grid>
    </Grid>
    </Stack> );
}

export default GridTech;