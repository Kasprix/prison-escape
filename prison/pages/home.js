import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import {createTheme, styled, ThemeProvider} from '@mui/material/styles';

import "@fontsource/press-start-2p";


const theme = createTheme({
    typography: {
        fontFamily: 'Press Start 2P'
    },
});


const pages = ['HOME', 'WHITEPAPER', 'MINT'];


export default function Home() {


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (

        <ThemeProvider theme={theme}>

            <div>
                <Head>
                    <title>Prison Escape</title>
                    <meta name="description" content="Generated by create next app"/>
                    <link rel="icon" href="/images/assets/suitedOfficer.png"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>

                </Head>


                <AppBar position="fixed" sx={{backgroundColor: '#041157', marginBottom: 20}}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
                            >
                            </Typography>

                            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: {xs: 'block', md: 'none'},
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography
                                                textAlign="center"> href={`/${page.toLowerCase()}`}{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <IconButton sx={{p: 0}}>
                                <Link href="/"><Avatar src="images/assets/policemanShocked.png"
                                                       style={{marginRight: 20}}/></Link>
                            </IconButton>
                            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>


                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{my: 2, color: 'white', display: 'block'}}
                                    >
                                        <Typography textAlign="center"><a
                                            href={`/${page.toLowerCase()}`}>{page}</a></Typography>
                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>


                <main className={styles.main}>


                    <h2 className={styles.title} style={{marginBottom: 150, marginTop: 150}}>
                        PRISON ESCAPE GAME
                    </h2>

                    <Grid container maxWidth='80%' spacing={3}>
                        <Grid item className={styles.multipleCard} xs={12} sm={12} md={12} lg={12}
                              style={{marginBottom: 100, justifyContent: 'center', alignItems: 'center'}}>

                            <Grid item xs={12} sm={12} md={12} lg={12} style={{marginBottom: 100}}>

                                <Grid container maxWidth='100%'>
                                    <Grid item sx={{}} xs={4} sm={2} md={2}>
                                        <img src="images/assets/policeman.gif" style={{width: '50%'}}></img>
                                    </Grid>

                                    <Grid item xs={4} sm={8} md={8}>
                                        <div style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                            It was just an ordinary day. The criminals gathered around like they did
                                            every
                                            night
                                            for a friendly game of poker.
                                        </div>
                                    </Grid>

                                    <Grid item sx={{}} xs={4} sm={2} md={2}>
                                        <img src="images/assets/smokingPrisoner.gif" style={{width: '50%'}}></img>
                                    </Grid>
                                </Grid>
                                <br></br><br></br>
                                The guards filed around the criminals and watched the game unfold,
                                making sure bickering stayed bickering, and no fighting broke out. At exactly an hour
                                till
                                midnight, all the criminals got up and returned to their cells, ready for the night. The
                                guards
                                made sure everyone was asleep and then went home to their families.<br></br><br></br>

                                At exactly midnight, the lights flickered, which had never happened before. It woke up a
                                lot
                                of
                                the criminals, who quickly assumed it was just an error and fell right back
                                asleep.<br></br><br></br>

                                If they would have listened close enough though, they would have been able to hear the
                                laughter
                                of The Warden, which was echoing through the vents from his office far
                                away.<br></br><br></br>

                                <Button variant="contained" href='/whitepaper' style={{
                                    marginTop: 30,
                                    width: '50%',
                                    backgroundColor: '#041157'
                                }}><Typography variant='h6'>WHITEPAPER</Typography></Button>
                                <br></br><br></br>
                                <Button variant="contained" href='/mint' style={{
                                    marginTop: 30,
                                    width: '50%',
                                    backgroundColor: '#041157'
                                }}><Typography variant='h6'>MINT</Typography></Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container maxWidth='80%' spacing={3}
                          style={{justifyContent: 'center', alignItems: 'stretch', marginTop: 10}}>


                        <Grid item xs={12} sm={12} md={3}>
                            <div className={styles.multipleCard}
                                 style={{backgroundColor: 'rgb(4, 17, 87, 0.7)'}}>
                                <Typography variant='h5'> GUARD<br></br><br></br></Typography>

                                <Typography variant='h6'>Protectors of the prison. They only have one thought, Criminals
                                    must be imprisoned.
                                    Patience
                                    to level up will yield you more $FREE or does duty call, we’ll see.</Typography>
                            </div>

                        </Grid>

                        <Grid item

                              xs={12} sm={12} md={6}>
                            <div className={styles.multipleCard}>
                                <Typography variant='h5'>$FREE<br></br><br></br></Typography>

                                <Typography variant='h6'>
                                    $FREE is the primary currency for The Prison Escape, and all will continue to be so
                                    for
                                    all of our future phases.
                                    <br/><br/>
                                    Criminals generate $FREE, while guards steal, and charge taxes on that $FREE.
                                    <br/><br/>
                                    $FREE can be used in further phases to mint valuable items, characters and so on, to
                                    give yourself an advantage over other players. Further $FREE utility will include
                                    collaborations, WL, giveaways, and so on.</Typography></div>

                        </Grid>

                        <Grid item xs={12} sm={12} md={3}>
                            <div className={styles.multipleCard}
                                 style={{backgroundColor: 'rgb(4, 17, 87, 0.7)'}}>
                                <Typography variant='h5'>CRIMINALS<br></br><br></br></Typography>

                                <Typography variant='h6'>
                                    A group of rough-housing bandits looking to fill their bags. Lurking in the shadows
                                    to
                                    avoid
                                    Getting caught, these individuals are hard to spot. Will the guards be able to catch
                                    them or
                                    Will they be $FREE?</Typography></div>
                        </Grid>


                    </Grid>


                    <Grid container maxWidth='80%' spacing={3}
                          style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10}}>


                        <Grid item className={styles.multipleCard} sx={{}} xs={12} sm={12} md={4}>
                            <Grid container maxWidth='100%' spacing={2}
                                  style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Grid item
                                      xs={4} sm={4} md={4}>
                                    <a href='https://vercel.com' target="_blank" rel="noreferrer"><img
                                        src="images/assets/etherscan.png" style={{width: '50%'}}/></a>
                                </Grid>

                                <Grid item
                                      xs={4} sm={4} md={4}>
                                    <a href='https://vercel.com' target="_blank" rel="noreferrer"><img
                                        src="images/assets/opensea.png" style={{width: '50%'}}/></a>
                                </Grid>

                                <Grid item
                                      xs={4} sm={4} md={4}>
                                    <a href='https://vercel.com' target="_blank" rel="noreferrer"><img
                                        src="images/assets/twitter.png" style={{width: '50%'}}/></a>
                                </Grid>

                            </Grid>


                        </Grid>
                    </Grid>


                </main>

                <footer className={styles.footer}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by the Warden

                    </a>
                </footer>
            </div>

        </ThemeProvider>
    )
}
