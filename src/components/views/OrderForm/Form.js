import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const meStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CreateOrder = () => {
  const style = meStyles();
  return(
    <Container componnet='main' maxWidth='xs'>
      <h1>OrderForm</h1>
      <Container>
        <FormControl variant="outlined" className={style.formControl}>
          <InputLabel id="tableSelect">Select Table</InputLabel>
          <Select
            id="tableSelector"
            value={''}
            onChange={console.log(this)}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>Table 1</MenuItem>
            <MenuItem value={2}>Table 2</MenuItem>
            <MenuItem value={3}>Table 3</MenuItem>
          </Select>
        </FormControl>
      </Container>

      <Container>
        <FormControl variant="outlined" className={style.formControl}>
          <InputLabel id="Appetizer">Appetizer</InputLabel>
          <Select
            id="tableSelector"
            value={''}
            //onChange={console.log(this)}
          >
            <MenuItem value="">
            </MenuItem>
            <MenuItem value='chips'>Chips</MenuItem>
            <MenuItem value='crachers'>Crackers</MenuItem>
            <MenuItem value='cStrips'>Chicken Strips</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={style.formControl}>
          <InputLabel id="AppetizerBeverage">Beverage</InputLabel>
          <Select
            id="tableSelector"
            value={''}
            //onChange={console.log(this)}
          >
            <MenuItem value="">
            </MenuItem>
            <MenuItem value='Cola'>CocaCola</MenuItem>
            <MenuItem value='Cola'>CocaCola</MenuItem>
            <MenuItem value='water'>Water</MenuItem>
            <MenuItem value='beer'>Beer</MenuItem>
          </Select>
        </FormControl>
        <TextField multiline fullWidth id='AppettizerComment' variant='outlined' label='Appetizer Comments'/>
      </Container> 

      <Container>
        <FormControl variant="outlined" className={style.formControl}>
          <InputLabel id="Main">Main Dish</InputLabel>
          <Select
            id="tableSelector"
            value={''}
            //onChange={console.log(this)}
          >
            <MenuItem value="">
            </MenuItem>
            <MenuItem value='salad'>Salad</MenuItem>
            <MenuItem value='chicken'>Chicken</MenuItem>
            <MenuItem value='fish'>Fish</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" className={style.formControl}>
          <InputLabel id="MainBeverage">Beverage</InputLabel>
          <Select
            id="tableSelector"
            value={''}
            //onChange={console.log(this)}
          >
            <MenuItem value="">
            </MenuItem>
            <MenuItem value='Cola'>CocaCola</MenuItem>
            <MenuItem value='water'>Water</MenuItem>
            <MenuItem value='beer'>Beer</MenuItem>
          </Select>
        </FormControl>
        <form noValidate>
          <TextField multiline fullWidth id='AppettizerComment' label='Dinner Comment' variant='outlined'/>
        </form>
      </Container>
      <FormControl className={style.formControl}>
        <Button id='OrderFormSave' variant='contained' color='primary'>Send Order</Button>
      </FormControl>
    </Container>
  );
};



export default CreateOrder;