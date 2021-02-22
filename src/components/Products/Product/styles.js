import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    backgroundColor: '#f6f6f6',
  },
  media: {
    height: 0,
    paddingTop: '75%', // 16:9
    
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    color:'#822659',

  },
  description: {
    color: '#1e212d',
    fontStyle: 'italic'
  }
}))