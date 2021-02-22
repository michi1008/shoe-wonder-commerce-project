import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: "Truculenta', sans-serif'",
    color: '#822659',
  },
  cardActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    color: '#822659',
  },
  remove: {
    backgroundColor: '#f14668',
    color: '#ffffff'
  }
}));