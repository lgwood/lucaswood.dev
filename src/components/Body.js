import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(4),
  },
  hello: {
    marginTop: theme.spacing(16),
  },
  intro: {
    marginTop: theme.spacing(2),
  },
  description: {
    marginTop: theme.spacing(2),
  },
  finale: {
    marginBottom: theme.spacing(2),
  },
}));

const Body = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.hello} variant="h5">
        Hello!
      </Typography>
      <Typography className={classes.intro} variant="h6">
        My name is Lucas - a software developer
      </Typography>
      <Typography variant="h6">from Halifax, Nova Scotia</Typography>
      <Typography className={classes.description} variant="subtitle1">
        I'm mainly a full-stack JavaScript
      </Typography>
      <Typography className={classes.finale} variant="subtitle1">
        developer with a focus in React
      </Typography>
    </div>
  );
};

export default Body;
