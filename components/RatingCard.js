import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import RatingStars from "./RatingStars";

export default function RatingCard({message}) {
  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={2}>
          
          <Grid item xs >
            <Typography >{message}</Typography>
          </Grid>

          <Grid item xs>
          <RatingStars />
          </Grid>

        </Grid>
    </>
  );
}