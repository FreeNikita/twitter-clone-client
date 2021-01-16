import React from 'react';
import {Button, makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/PeopleOutline";
import MessageIcon from "@material-ui/icons/ModeCommentOutlined";


const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: "100vh",
    },
    infoSide: {
        position: 'relative',
        overflow: 'hidden',
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        background: "#74cafe",
        flex: "0 0 50%",
    },
    infoSideBackgroundIcon: {
        position: "absolute",
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '350%',
        height: '350%'
    },
    infoSideListInfo: {
        position: 'relative',
        width: 380,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 600,
            fontSize: 20,
        }
    },
    infoSideListItem: {
        marginBottom: 40
    },
    infoSideListIcon: {
        fontSize: 34,
        marginRight: 15,
    },
    loginSide: {
        display: "flex",
        alignItems: 'center',
        justifyContent: "center",
        flex: "0 0 50%",
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 35,
        marginTop: 20,
    },
    loginSideSingInButton: {
        marginBottom: 20
    }
    // button: {
    //     fontWeight: 700
    // },
    // lightBulb: {
    //     verticalAlign: 'middle',
    //     marginRight: theme.spacing(1)
    // }
}))

export const SignIn = () => {

    const classes = useStyles();


    return (
        <div className={classes.wrapper}>
           <section className={classes.infoSide}>
               <TwitterIcon className={classes.infoSideBackgroundIcon} color='primary'/>
               <ul className={classes.infoSideListInfo}>
                   <li className={classes.infoSideListItem}>
                       <Typography variant='h6'>
                           <SearchIcon className={classes.infoSideListIcon} />
                           Follow your interests.
                       </Typography>
                   </li>
                   <li className={classes.infoSideListItem}>
                       <Typography variant='h6'>
                           <PeopleIcon className={classes.infoSideListIcon} />
                           Hear what people are talking about.
                       </Typography>
                   </li>
                   <li className={classes.infoSideListItem}>
                       <Typography variant='h6'>
                           <MessageIcon className={classes.infoSideListIcon} />
                           Join the conversation.
                       </Typography>
                   </li>
               </ul>
           </section>

           <section className={classes.loginSide}>
               <div className={classes.loginSideWrapper}>
                <TwitterIcon className={classes.loginSideTwitterIcon} color='primary'/>
                <Typography variant='h4' className={classes.loginSideTitle}>
                    See what’s happening in the world right now
                </Typography>
                <Typography>
                    <b>Join Twitter today.</b>
                </Typography>
                <br/>
                <Button
                    className={classes.loginSideSingInButton}
                    color="primary"
                    variant='contained'
                    fullWidth
                >
                    Sing up
                </Button>
                <Button color="primary" variant='outlined' fullWidth>Log in</Button>
               </div>
           </section>
        </div>
    )
}