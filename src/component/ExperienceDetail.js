import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navigation from './Navigation';
import {
    makeStyles,
} from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { FormControl, Input, InputAdornment } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';
import EventSeatIcon from '@material-ui/icons/EventSeat';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import DescriptionIcon from '@material-ui/icons/Description';

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
        fontSize: 20,
    },
}));

export default function ExperienceDetails() {
    const classes = useStyles();

    return (
        <>
            <Navigation />
            <div className={classes.root}>
                <Grid container spacing={3} >
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Grid container >
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>Experience Details</Paper>
                                </Grid>

                            </Grid>
                            <form className={classes.root}  >
                                <div>
                                    <h4 style={{marginRight:'55rem'}}><CheckCircleIcon/>Experience Details</h4>
                                    <form className={classes.root} >
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Institute/Organisation *" style={{
                                                width: '30ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small',
                                                marginRight:'100px'
                                            }} endAdornment={
                                                <InputAdornment position="end">
                                                    <BusinessIcon />
                                                </InputAdornment>
                                            }
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Position *" style={{
                                                width: '30ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small'

                                            }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <EventSeatIcon />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Duration *" style={{
                                                width: '30ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small',
                                                marginLeft: '100px'


                                            }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <WatchLaterIcon />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>

                                    </form>
                                    <form>
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Description *" style={{
                                                width: '120ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small',
                                                
                                            }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <DescriptionIcon />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    </form>
                                </div>
                                <div>
                                    <h4 style={{marginRight:'55rem'}}><CheckCircleIcon/>Experience Details</h4>
                                    <form className={classes.root} >
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Institute/Organisation *" style={{
                                                width: '30ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small',
                                                marginRight:'100px'
                                            }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <BusinessIcon />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Position *" style={{
                                                width: '30ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small'

                                            }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <EventSeatIcon />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Duration *" style={{
                                                width: '30ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small',
                                                marginLeft: '100px'


                                            }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <WatchLaterIcon />
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>

                                    </form>
                                    <form>
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Description *" style={{
                                                width: '120ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small',
                                                
                                            }}
                                                
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <DescriptionIcon />
                                                    </InputAdornment>
                                                }
                                            />
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
