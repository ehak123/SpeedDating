import ContactCard from "../components/ContactCard";
import { TopLogo } from "../components/top_logo";
import Grid from '@mui/material/Grid';

// TODO: Kolla upp varför det inte fungerar med props till statiska bilder. Ladda sedan ner bilderna till public/images
export default function finalRating() {
    return (
        <>
            <TopLogo title="Who would you like to connect with?" />
            <Grid container rowSpacing={3}>
            <Grid item xs={8}>
            <ContactCard path="https://images.unsplash.com/photo-1573166475912-1ed8b4f093d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHdvbWFuJTIwaW4lMjB0ZWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </Grid>

            <Grid item xs={8}>
            <ContactCard path= "https://images.unsplash.com/photo-1593339915213-a94e3b1a0f64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHx3b21hbiUyMGNhdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
            </Grid>
            <Grid item xs={8}>
            <ContactCard path= "https://images.unsplash.com/photo-1603691436755-354a2d9b4bb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHx3b21hbiUyMGhpa2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"/>
            </Grid>
            </Grid>
        </>
        )
}