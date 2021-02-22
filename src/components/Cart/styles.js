import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  toolbar: {
    offset: theme.mixins.toolbar,
    fontFamily: "'Truculenta', sans-serif",
    backgroundColor: '#ab82ab', 
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/checkered-light-emboss.png")',
  },
  title: {
    paddingTop: '15%',
    fontFamily: "'Truculenta', sans-serif",
    color: '#822659',
    fontSize: '3rem'
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
    backgroundColor: '#f14668',
    color: '#ffffff'
  },
  checkoutButton: {
    minWidth: '150px',
    backgroundColor: '#290149',
    color: '#ffffff'
  },
  link: {
    textDecoration: 'none',
    color: '#822659',
    fontWeight: '600'
  },
  cartDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
    fontFamily: "'Truculenta' sans-serif",  
    color: '#822659',  
  },
  
}));