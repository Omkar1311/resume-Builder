import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Navigation from './Navigation';
import {
    makeStyles,
} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { Input, InputAdornment } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


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
        marginLeft:100
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize: 30,
    },
}));

export default function PersonalDetails() {
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
                                    <Paper className={classes.paper}>Personal Details</Paper>
                                </Grid>

                            </Grid>
                            <form className={classes.root}  >
                                <div>
                                    <form className={classes.root} >
                                        <FormControl className={classes.margin}>

                                            <Input placeholder="First Name *"  style={{
                                                width: '55ch', 
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize:'small'
                                            }}
                                                 />
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input placeholder='Last Name*'  style={{
                                                width: '55ch', 
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize:'small'

                                                }}
                                            
                                            />
                                        </FormControl>

                                    </form>
                                </div>
                                <div>
                                    <form className={classes.root} >
                                        <FormControl className={classes.margin}>

                                            <Input placeholder="Email *"  style={{
                                                width: '55ch', 
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize:'small'

                                                }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <EmailIcon />
                                                </InputAdornment>
                                            }/>
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input placeholder="Phone Number"  style={{
                                                width: '55ch', 
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize:'small'

                                                }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <PhoneIcon />
                                                </InputAdornment>
                                            }/>
                                        </FormControl>

                                    </form>
                                </div>
                                <div>
                                    <form className={classes.root} >
                                        <FormControl className={classes.margin}>

                                            <Input placeholder="Your Website"  style={{
                                                width: '55ch', 
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize:'small'

                                                }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <LanguageIcon />
                                                </InputAdornment>
                                            }/>
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input placeholder="GitHub"  style={{
                                                width: '55ch', 
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize:'small'

                                                }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <GitHubIcon />
                                                </InputAdornment>
                                            }/>
                                        </FormControl>

                                    </form>
                                </div>
                                <div>
                                    <form className={classes.root} >
                                        <FormControl className={classes.margin}>

                                            <Input placeholder="Linked In"  style={{
                                                width: '55ch', 
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize:'small'

                                                }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <LinkedInIcon />
                                                </InputAdornment>
                                            }/>
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input placeholder="Twitter"  style={{
                                                width: '55ch', 
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize:'small'

                                                }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <TwitterIcon />
                                                </InputAdornment>
                                            }/>
                                        </FormControl>

                                    </form>
                                </div>
                                <div>
                                    <form className={classes.root} >
                                        <FormControl className={classes.margin}>

                                            <Input placeholder="Facebook"  style={{
                                                width: '55ch', 
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize:'small'

                                                }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <FacebookIcon />
                                                </InputAdornment>
                                            }/>
                                        </FormControl>
                                        <FormControl className={classes.margin}>

                                            <Input placeholder="Instagram"  style={{
                                                width: '55ch', 
                                                borderRadius: 4,
                                                position: 'relative',
                                                border: '1px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 12px',
                                                tabSize:'small'

                                                }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <InstagramIcon />
                                                </InputAdornment>
                                            }/>
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
