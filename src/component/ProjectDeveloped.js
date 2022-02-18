import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navigation from './Navigation';
import {
    alpha,
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import TitleIcon from '@material-ui/icons/Title';
import LinkIcon from '@material-ui/icons/Link';
import DescriptionIcon from '@material-ui/icons/Description';
import { Input, InputAdornment } from '@material-ui/core';

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
    textField: {
        // marginLeft: theme.spacing(1),
        // marginRight: theme.spacing(1),
        width: '565ch',
    },
    margin: {
        margin: theme.spacing(2),
        marginLeft: 100
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize: 30,
    },
}));
const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 550,
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
        
    },
}))(InputBase);
console.log(BootstrapInput)

export default function ProjectDeveloped() {
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
                                    <Paper className={classes.paper}>Project Developed</Paper>
                                </Grid>

                            </Grid>
                            <form className={classes.root}  >
                                Project 1
                                   <div>
                                    <form className={classes.root} >
                                        <FormControl className={classes.margin}>
                                            <Input defaultValue="react-bootstrap"  style={{
                                                width: '65ch', 
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize:'small'

                                                }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <TitleIcon />
                                                </InputAdornment>
                                            }
                                            />
                                        </FormControl>

                                    </form>
                                </div>
                                <div>
                                    <form className={classes.root} >
                                         <FormControl className={classes.margin}>
                                            <Input defaultValue="react-bootstrap"  style={{
                                                width: '65ch', 
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize:'small'

                                                }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <LinkIcon />
                                                </InputAdornment>
                                            }
                                            />
                                        </FormControl>

                                    </form>
                                </div>
                                <div>
                                    <form className={classes.root} >
                                         <FormControl className={classes.margin}>
                                            <Input defaultValue="react-bootstrap"  style={{
                                                width: '65ch', 
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize:'small'

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
                            <br></br>
                            <form className={classes.root}  >
                                Project 2
                                   <div>
                                    <form className={classes.root} >
                                         <FormControl className={classes.margin}>
                                            <Input defaultValue="react-bootstrap"  style={{
                                                width: '65ch', 
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize:'small'

                                                }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <TitleIcon />
                                                </InputAdornment>
                                            }
                                            />
                                        </FormControl>

                                    </form>
                                </div>
                                <div>
                                    <form className={classes.root} >
                                         <FormControl className={classes.margin}>
                                            <Input defaultValue="react-bootstrap"  style={{
                                                width: '65ch', 
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize:'small'

                                                }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <LinkIcon />
                                                </InputAdornment>
                                            }
                                            />
                                        </FormControl>

                                    </form>
                                </div>
                                <div>
                                    <form className={classes.root} >
                                         <FormControl className={classes.margin}>
                                            <Input defaultValue="react-bootstrap"  style={{
                                                width: '65ch', 
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize:'small'

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
