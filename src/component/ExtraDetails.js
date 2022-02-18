import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navigation from './Navigation';
import {
    makeStyles,
} from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { FormControl, Input} from '@material-ui/core';

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

export default function ExtraDetails() {
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
                                    <Paper className={classes.paper}>Extra Details</Paper>
                                </Grid>

                            </Grid>
                            <form className={classes.root}  >
                                <div>
                                    <form className={classes.root} >
                                        <h4 style={{ marginRight: '55rem' }}><CheckCircleIcon />Skills/Language</h4>
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Skill 1" style={{
                                                width: '40ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small',
                                                marginRight: '60px'
                                            }}
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Skill 2" style={{
                                                width: '40ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small'

                                            }}
                                            
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Skill 3" style={{
                                                width: '40ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small',
                                                marginLeft: '60px'


                                            }}
                                             
                                            />
                                        </FormControl>

                                    </form>
                                    <form className={classes.root} >
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Skill 4" style={{
                                                width: '40ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small',
                                                marginRight: '60px'
                                            }}
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Skill 5" style={{
                                                width: '40ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small'

                                            }}
                                            
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Skill 6" style={{
                                                width: '40ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small',
                                                marginLeft: '60px'


                                            }}
                                                
                                            />
                                        </FormControl>

                                    </form>
                                </div>
                                <div>
                                    <form className={classes.root} >
                                            <h4 style={{ marginRight: '55rem' }}><CheckCircleIcon />Interest</h4>
                                        <FormControl className={classes.margin}>
                                            <Input defaultValue="Interest 1" style={{
                                                width: '40ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small',
                                                marginRight: '60px'
                                            }}
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Interest 2" style={{
                                                width: '40ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small'

                                            }}
                                             
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Interest 3" style={{
                                                width: '40ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small',
                                                marginLeft: '60px'


                                            }}
                                                
                                            />
                                        </FormControl>

                                    </form>
                                    <form className={classes.root} >
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Interest 4" style={{
                                                width: '40ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small',
                                                marginRight: '60px'
                                            }}
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Interest 5" style={{
                                                width: '40ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small'

                                            }}
                                                
                                            />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input defaultValue="Interest 6" style={{
                                                width: '40ch',
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize: 'small',
                                                marginLeft: '60px'


                                            }}
                                                
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
