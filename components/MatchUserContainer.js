import { Grid } from "@mui/material"

export default function MatchUserContainer({children}) {
    return (
        <Grid  
        container
        direction="column"
        justifyContent="center"
        alignItems="center">
            
        {children}
        </Grid>
    )
}