import React, { useRef, useState } from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import emailjs from '@emailjs/browser';
import './Form.scss'

const Logo = require('../../../images/Logo.png')

const useStyles = makeStyles(theme => ({
    card: {
      maxwidth: 600,
      margin: 'auto',
      textAlign: 'center',
      marginTop: 40,
      paddingBottom: 16,
      backgroundColor: '#E5ECE1',
      [theme.breakpoints.up(1600)]: {
        width: 600                 // secondary
      },
      [theme.breakpoints.up(1300)]: {
        width: 500                  // secondary
      }
    },
    error: {
      verticalAlign: 'middle'
    },
    title: {
      marginTop: 16,
      color: 'green'
    },
    textField: {
      marginLeft: 8,
      marginRight: 8,
      width: 300
    },
    submit: {
      marginRight: 15,
      marginBottom: 16,
      backgroundColor: '#225901',
      '&:hover': {
        backgroundColor: '#225901'
      }
    }
  }))

export default function Form() {
    const classes = useStyles()
    const form = useRef<HTMLFormElement | null>(null);
    const [values, setValues] = useState({
      name: '',
      email: '',
      message: ''
    })

    const handleChange = (name: any) => (event: any) => {
      setValues({ ...values, [name]: event.target.value })
    }

    const sendEmail = (e: any) => {
      e.preventDefault();
  
    if (!form.current){
        return;
    }
      emailjs.sendForm(
        'service_qcw5fym', 
        'template_zt9etvj', 
        form.current, 'WClV94PwpJ-GrFraq')
        .then((result) => {
            console.log(result.text);
            setValues({ ...values, name: '', email: '', message: ''})
        }, (error: any) => {
            console.log(error.text);
        });
    };
  return (
    <>
          <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4" className={classes.title}>
          <span className='header__logo__icon'><img src={Logo} alt='logo' className='header__logo__icon--size'/></span>
            JLV Mixed Farm
          </Typography>
          <form ref={form} onSubmit={sendEmail}>
          <TextField 
          id="name" 
          value={values.name} onChange={handleChange('name')}
          label="Name"
          name="to_name"
          InputLabelProps={{ style: { fontSize: 20 } }}
          inputProps={{style: {fontSize: 16}}} 
          className={classes.textField} 
          margin="normal"/><br/>
          <TextField
           id="email" type="email" name="from_name"
           value={values.email} onChange={handleChange('email')}
           InputLabelProps={{ style: { fontSize: 20 } }}
           inputProps={{style: {fontSize: 16}}}
           label="Email Address" 
           className={classes.textField} 
           margin="normal"/><br/>
          <TextField
                name="message"
                value={values.message} onChange={handleChange('message')}
                InputLabelProps={{ style: { fontSize: 20 } }}
                inputProps={{style: {fontSize: 16}}}
                multiline
                rows={4}
                label="Message"
                className={classes.textField}
                variant="outlined"
                id="outlined-basic"
                margin="normal"/>
          </form>

        </CardContent>
        <CardActions>
          <Button color="primary" variant="contained" className={classes.submit} onClick={sendEmail}>Submit</Button>
        </CardActions>
      </Card>
    </>
  )
}
