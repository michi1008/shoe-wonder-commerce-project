import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    
  },
  toolbar: theme.mixins.toolbar,
  layout: {
    marginTop: '5%',
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    backgroundColor: '#ab82ab',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/checkered-light-emboss.png")',
    fontFamily: "'Truculenta', sans-serif",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginTop: 60,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    backgroundColor: '#ab82ab',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/checkered-light-emboss.png")',
    fontFamily: "'Truculenta', sans-serif",
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#f14668',
    color: '#ffffff',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    backgroundColor: '#f14668',
    color: '#ffffff',
  },
  divider: {
    margin: '20px 0',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));