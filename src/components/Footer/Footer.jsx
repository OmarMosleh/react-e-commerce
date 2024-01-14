import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { LinkedIn, GitHub } from "@mui/icons-material";
import { Box, Paper } from "@mui/material";

export default function Footer() {
  return (
    <Paper sx={{marginTop: 'calc(10% + 60px)',
    width: '100%',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor:"ButtonShadow",
    padding:"0.5rem"
    }} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              omarmosleh90@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://linkedin.com/in/omarmosleh99" color="primary">
              <LinkedIn />
            </Link>
            <Link
              href="https://github.com/OmarMosleh"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <GitHub />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
}