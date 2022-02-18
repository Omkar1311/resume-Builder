import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navigation from './Navigation';
import {
    makeStyles,
} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { Input } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
            display: 'flex',
            flexWrap: 'wrap',
        }
    },
    margin: {
        margin: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize: 30,
    },
}));

export default function EducationDetails() {
    const [value, setValue] = useState()
    const [data, setdata] = useState()
    const classes = useStyles();
    const handleChange=(e)=>{
   setValue(e.target.value)
    }
    const handleChange1=(e)=>{
   setdata(e.target.value)
    }

    return (
        <>
            <Navigation />
            <div className={classes.root}>
                <Grid container spacing={3} >
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Grid container >
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>Educational Details</Paper>
                                </Grid>

                            </Grid>
                            <form className={classes.root}  >
                                <div>
                                    <form className={classes.root} >
                                        <FormControl className={classes.margin}>

                                            <Input id='date' type='text' placeholder='college/university *' style={{
                                                borderRadius: 4,
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                width: 'auto',
                                                padding: '10px 12px',
                                                marginLeft: '4ch'
                                            }} />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input id='date' type='date'  style={{
                                                borderRadius: 4,
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                width: 'auto',
                                                padding: '10px 12px',
                                                marginLeft: '13ch'
                                            }} 
                                                inputProps={{
                                                    min: new Date().toISOString().slice(0, 10)
                                                }}
                                                onChange={(e) => { handleChange1(e) }} />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input id='date' type='date' style={{
                                                borderRadius: 4,
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                width: 'auto',
                                                padding: '10px 12px',
                                                marginLeft: '18ch'

                                            }} 
                                                inputProps={{
                                                    min: data
                                                }}/>
                                        </FormControl>

                                    </form>
                                </div>
                                <div>
                                    <form className={classes.root} >
                                        <FormControl className={classes.margin}>

                                            <Input id='date' placeholder='Qualification *' type='text' style={{
                                                borderRadius: 4,
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                width: 'auto',
                                                padding: '10px 12px',
                                                marginLeft: '4ch'
                                            }} />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input placeholder="Description *" id='text' style={{
                                                borderRadius: 4,
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                width: '65ch',
                                                padding: '10px 12px',
                                                marginLeft: '112px'

                                            }} />
                                        </FormControl>

                                    </form>
                                </div>
                                <div>
                                    <form className={classes.root} >
                                        <FormControl className={classes.margin}>

                                            <Input id='date' type='text' placeholder='school *' style={{
                                                borderRadius: 4,
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                width: 'auto',
                                                padding: '10px 12px',
                                                marginLeft: '2ch'
                                            }} />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input id='date' type='date' style={{
                                                borderRadius: 4,
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                width: 'auto',
                                                padding: '10px 12px',
                                                marginLeft: '14ch'
                                            }} 
                                                inputProps={{
                                                    min: new Date().toISOString().slice(0, 10)
                                                }}
                                                onChange={(e)=>{handleChange(e)}}   />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input id='date' type='date' style={{
                                                borderRadius: 4,
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                width: 'auto',
                                                padding: '10px 12px',
                                                marginLeft: '16ch'

                                            }} 
                                                inputProps={{
                                                    min: value
                                                }}/>
                                        </FormControl>

                                    </form>
                                </div>
                                <div>
                                    <form className={classes.root} >
                                        <FormControl className={classes.margin}>

                                            <Input id='date' placeholder='Qualification *' type='text' style={{
                                                borderRadius: 4,
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                width: 'auto',
                                                padding: '10px 12px',
                                                marginLeft: '4ch'
                                            }} />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input placeholder="Description *" id='text' style={{
                                                borderRadius: 4,
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                width: '65ch',
                                                padding: '10px 12px',
                                                marginLeft: '112px'

                                            }} />
                                        </FormControl>

                                    </form>
                                </div>
                            </form>
                        </Paper>

                    </Grid>

                </Grid>
            </div>
        </>
    );
}
