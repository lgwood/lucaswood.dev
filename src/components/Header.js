import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Typography, Button, AppBar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(2),
    fontSize: '1.rem'
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            lucaswood(.dev)
          </Typography>
          <Button href='https://github.com/lgwood' size="large" className={classes.button} color="inherit">
            Github
          </Button>
          <Button href='https://www.linkedin.com/in/lgwood/' size="large" className={classes.button} color="inherit">
            Linkedin
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
