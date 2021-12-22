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
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import TextField from '@mui/material/TextField';


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
                    <title>Whitepaper</title>
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
                                            <Typography textAlign="center">{page}</Typography>
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
                        WHITELIST
                    </h2>

                    <Grid container maxWidth='80%' spacing={5}>


                        <Grid item className={styles.stakeCards} xs={12} sm={12} md={12} lg={12}
                              style={{marginBottom: 100, alignItems: 'center'}}>

                            <img src="images/assets/policeman.gif" style={{width: '10%', float: 'left'}}></img>
                            <img src="images/assets/smokingPrisoner.gif" style={{width: '10%', float: 'right'}}></img>
                            <Typography variant="h6" sx={{width: '100%', marginBottom: 5}}>
                                The time has come, and the Prison Escape is upon us. The criminals have banded together,
                                and are planning an escape for centuries to come. The only obstacle standing between
                                them and their $FREE are the guards.
                            </Typography>

                            <Typography variant="h6" sx={{width: '100%', marginBottom: 5}}>
                                The guards are on the lookout for criminals and their $FREE. They’ll stop at nothing to
                                make sure every criminal helping plan the escape is brought to justice. The only rule
                                they follow, is to leave the criminals who are not participating alone, and charge them
                                a 20% tax for staying in the prison.
                            </Typography>

                            <Typography variant="h6" sx={{width: '100%', marginBottom: 5}}>
                                However, whenever a criminal decides to go stray and escape, the guards forget anything
                                about any rules.
                            </Typography>

                            <img src="images/assets/suitedOfficer.png"
                                 style={{width: '20%', align: 'center', marginBottom: 50}}></img>

                            <Typography variant="h6" sx={{width: '100%', marginBottom: 5}}>
                                Prison Escape is a risk protocol for NFTs with unique tokenomics behind it. For the very
                                first time, through the recent P2E NFT trend, NFT’s can steal other tokens. The NFT’s
                                can also train to increase their advantage compared to other participants. Prison Escape
                                is learning from the mistakes, and vulnerabilities of past NFT P2E games, while also
                                focusing heavily on $FREE utility and burning mechanisms to ensure the growth of the
                                game and ecosystem. Prison Escape promises nothing but an Escape that begins the very
                                second the first NFT is minted.
                            </Typography>

                            <Typography variant="h6" sx={{width: '100%', marginBottom: 5}}>
                                Everything in The Prison Escape happens 100% on-chain: the decisioning, the results, the
                                probabilities, and the generation of the NFTs themselves. The entire game is automatic,
                                so the only decisions you need to make are the key ones such as staking/unstaking. The
                                rest is all played out for you while you sleep, eat, and anything else.
                            </Typography>


                            <Typography variant="h4" sx={{width: '100%', marginBottom: 5}}>
                                MINTING
                            </Typography>

                            <Typography variant="h6" sx={{width: '100%', marginBottom: 5}}>
                                The genesis collection of The Prison Escape includes 10,000 total NFT’s. 1000 Guards,
                                and 9,000 criminals.
                                <br></br><br></br>
                                Each NFT costs 0.055 ETH to mint.
                                <br></br><br></br>
                                Future phases will ideally be minted using $FREE or Ethereum.
                                <br></br><br></br>
                            </Typography>

                            <img src="images/assets/moneyBag.gif"
                                 style={{width: '20%', align: 'center', marginBottom: 50}}></img>

                            <Typography variant="h4" sx={{width: '100%', marginBottom: 5}}>
                                $FREE
                            </Typography>

                            <Typography variant="h6" sx={{width: '100%', marginBottom: 5}}>
                                $FREE is the primary currency for The Prison Escape, and all will continue to be so for
                                all of our future phases.
                                <br></br><br></br>
                                Criminals generate $FREE, while guards steal, and charge taxes on that $FREE.
                                <br></br><br></br>
                                $FREE can be used in further phases to mint valuable items, characters and so on, to
                                give yourself an advantage over other players. Further $FREE utility will include
                                collaborations, WL, giveaways, and so on.
                                <br></br><br></br>
                            </Typography>

                            <Typography variant="h6" sx={{width: '100%', marginBottom: 5}}>
                                <b>$FREE is an infinite supply token, this allows us to add a variety of future rewards
                                    and
                                    scale as the project grows. To offset this inflation, there are/will be many burning
                                    mechanisms put in place.</b>
                            </Typography>

                            <Typography variant="h4" sx={{width: '100%', marginBottom: 15}}>
                                Criminals Vs Guards
                            </Typography>

                            <Typography variant="h4" sx={{width: '100%', marginBottom: 10}}>
                                Criminals (9,000/10,000)
                            </Typography>

                            <img src="images/assets/robber.gif"
                                 style={{width: '20%', align: 'center', marginBottom: 50}}></img>


                            <Grid container xs={12} style={{marginBottom: 30}}>
                                <Grid item xs={4} className={styles.tableData}><Typography
                                    variant='p'
                                > Activity </Typography></Grid>
                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > Effect </Typography></Grid>
                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > Risk </Typography></Grid>

                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > Staked </Typography></Grid>
                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > Staked criminals generate 20 $FREE per day but pay 20% taxes to
                                    guards. </Typography></Grid>
                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > No risk. </Typography></Grid>

                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > Unstaked </Typography></Grid>
                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > Un staked criminals generate 30 $FREE per day without paying any taxes.
                                </Typography></Grid>
                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > Chance of being caught and losing 20-75% of $FREE </Typography></Grid>

                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > Claim </Typography></Grid>
                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > You claim all your generated $FREE and at this point is where taxes are deducted from
                                    staked criminals
                                </Typography></Grid>
                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > No risk, unless un-staked, than can be caught by guard. </Typography></Grid>

                            </Grid>


                            <Typography variant="h4" sx={{width: '100%', marginBottom: 5}}>
                                Guards (1,000/10,000)
                            </Typography>


                            <img src="images/assets/policemanShocked.png"
                                 style={{width: '20%', align: 'center', marginBottom: 50}}></img>


                            <Grid container xs={12} style={{marginBottom: 30}}>
                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > Activity </Typography></Grid>
                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > Effect </Typography></Grid>
                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > Risk </Typography></Grid>

                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > Staked </Typography></Grid>
                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > Staked guards are in training. When staked and in training, guards cannot steal $FREE
                                    nor partake in the 20% tax.
                                    <br/><br/>
                                    All guards start at level 0, and can reach a level 3 through 7 total days of
                                    training.
                                    <br/><br/>
                                    - Level 0 guards steal 20% of a criminals $FREE.
                                    <br/><br/>
                                    - Level 1 guards steal 40% of a criminals $FREE, and require 1 day of staking to
                                    reach.
                                    <br/><br/>
                                    - Level 2 guards steal 60% of a criminals $FREE, and require 3 total days of
                                    staking to reach.
                                    <br/><br/>
                                    - Level 3 guards steal 75% of a criminals $FREE, and require 7 total days of
                                    staking to reach.
                                    <br/><br/>
                                    ** All guards can choose to time lock their guard into 7 days of staking, or choose
                                    to have their guard unstake at every level, but then need to pay the gas fees to
                                    restake. Time Locked guards can be unstaked by burning $FREE as well as any guard in
                                    the middle of levels. </Typography></Grid>
                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > No risk. </Typography></Grid>

                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > Unstaked </Typography></Grid>
                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > Un-staked guards generate $FREE through the 20% tax on staked criminals,
                                    <br></br><br></br>and by
                                    stealing $FREE from catching criminals, depending on their certain level.
                                </Typography></Grid>
                                <Grid item xs={4} className={styles.tableData}><Typography
                                    style={{wordWrap: 'break-word'}} variant='p'
                                > Chance of being caught and losing 20-75% of $FREE </Typography></Grid>


                            </Grid>

                            <Typography variant="h4" sx={{width: '100%', marginBottom: 5}}>
                                FUTURE PHASES
                            </Typography>

                            <Typography variant="h6" sx={{width: '100%', marginBottom: 5}}>
                                Future phases of The Prison Escape beyond Phase 1, include prison cells, weapons,
                                military, hackers, prison games, daily bonuses, and bribing to name a few. $FREE will
                                continue to be the currency of The Prison Escape as long as it exists, and more and more
                                phases will continue to be built on $FREE.
                            </Typography>


                            <img src="images/assets/flickerRoom.gif"
                                 style={{width: '20%', align: 'center', marginBottom: 50}}></img>


                        </Grid>
                    </Grid>


                </main>

                <footer className={styles.footer}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by the Man

                    </a>
                </footer>
            </div>

        </ThemeProvider>
    )
}
