import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#ab82ab',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/checkered-light-emboss.png")'
  },
  root: {
    flexGrow: 1,
  },
}));