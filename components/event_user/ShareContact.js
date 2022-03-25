import ContactCard from "../ContactCard";
import EventHeader from "../EventHeader";
import Grid from '@mui/material/Grid';

// TODO: Kolla upp varför det inte fungerar med props till statiska bilder. Ladda sedan ner bilderna till public/images
export default function ShareContact() {
    return (
        <>
            <EventHeader title="Who would you like to connect with?" />

            <Grid container direction="column" spacing={3}>
            <Grid item >
            <ContactCard path="/images/berit-wide.jpg" />
            </Grid>

            <Grid item >
            <ContactCard path= "/images/christina-wide.jpg"/>
            </Grid>
            <Grid item>
            <ContactCard path= "/images/Nina-wide.jpg"/>
            </Grid>
            </Grid>
        </>
        )
}