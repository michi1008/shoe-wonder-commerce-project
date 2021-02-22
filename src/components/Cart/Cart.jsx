import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
  const classes = useStyles()
  

  const EmptyCart = () => (
    <Typography style={{ color: '#822659', fontWeight: '600' }} variant="subtitle1">Your shopping cart is empty,
      <Link to="/" className={classes.link}>   Start adding some items...</Link>
    </Typography>
  )

  const FilledCart = () => (
    <>
     
      <Grid className={classes.cartItems} container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cartDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" onClick={handleEmptyCart} >Empty Cart</Button>
          <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" >Checkout</Button>
        </div>
      </div>
    </>
  )

  if(!cart.line_items) return 'Loading...'

  return (
    <Container>
    
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom >Your Shopping Cart</Typography>
      { !cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Container>
  )
}

export default Cart
