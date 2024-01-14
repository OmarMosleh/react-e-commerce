import { Container, Typography, List, ListItem, ListItemText } from "@mui/material"
const Review = ({checkOutToken}) => {
  console.log(checkOutToken);
  return (
    <>
        <Typography variant="h6" gutterBottom > Order Summary</Typography>
        <List disaplePadding >
          {
            checkOutToken.line_items.map((product)=>(
              <ListItem sx={{padding:"10px 0"}} key={product.id}>
                  <ListItemText primary={product.name} secondary={`Quantity : ${product.quantity}`} />
                  <Typography variant="body2" >{product.line_total.formatted_with_symbol} </Typography>
              </ListItem>
            ))
          }
          <ListItem sx={{padding:"10px 0"}} >
            <ListItemText primary="Total"/>
            <Typography variant="subtitle1" style={{fontWeight:"700"}}>
              {checkOutToken.subtotal.formatted_with_symbol}
            </Typography>
          </ListItem>
        </List>
    </>
  )
}

export default Review