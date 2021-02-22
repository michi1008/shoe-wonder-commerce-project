import React from 'react'
import useStyles from './styles'
import { Typography } from '@material-ui/core'


const Footer = () => {
  const classes = useStyles()
  const date = new Date()
  const fullYear = date.getFullYear()
  return (
    
    <footer className={classes.footer}>
    
       <Typography variant="h5">All &copy; copy rights are reserved to Shoe Wonder {fullYear}</Typography>
    </footer>
  
  )
}

export default Footer