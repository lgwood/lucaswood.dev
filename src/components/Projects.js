import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid, Button } from "@material-ui/core";
import ProjectImage from "../assets/ProjectImage.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(6),
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  image: {
    width: 144,
    height: 144,
    marginRight: theme.spacing(2),
  },
}));

const Body = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h6">
        Projects
      </Typography>
      <Grid container>
        <Grid item>
          <Paper className={classes.image} variant="outlined">
            <img alt="project" src={ProjectImage} />
          </Paper>
        </Grid>
        <Grid item>
          <Typography>
            Flinch-Felt |
            <Button
              href="https://github.com/lgwood"
              size="small"
              className={classes.button}
              color="inherit"
            >
              Github
            </Button>
            |
            <Button
              href="https://github.com/lgwood"
              size="small"
              className={classes.button}
              color="inherit"
            >
              Demo
            </Button>
          </Typography>
          <hr />
          <Typography variant="body2">
            A playing-card table simulator built using React
          </Typography>
          <Typography variant="body2">
            with Recoil for state management.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Body;
