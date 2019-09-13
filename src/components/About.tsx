import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme()

const useStyles = makeStyles({
    root: {
        position: "absolute",
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "652px",
        height: "476px",
        [theme.breakpoints.down('xs')]:{
            top: "50%",
            width: "80%",
            height: "auto"
        }
    },
    title: {
        textAlign: "center",
        font: "Bold 40px Arial",
        letterSpacing: "0.8px",
        color: "#FFFFFF",
        [theme.breakpoints.down('xs')]:{
            font: "Bold 30px Arial"
        }
    },
    text: {
        textAlign: "center",
        font: "Bold 16px Arial",
        letterSpacing: "0.4px",
        color: "#FFFFFF",
        [theme.breakpoints.down('xs')]:{
            font: "Bold 14px Arial"
        }
    }
})

function About(){
    const classes = useStyles()

    return(
        <React.Fragment>
            <Grid className={classes.root}>
                <p className={classes.title}>Sey</p>
                <p className={classes.text}>趣味 : Webフロント &amp; イラスト &amp; RPGゲーム &amp; Vtuber</p>
                <p className={classes.text}>スキル : HTML CSS JavaScript Ruby RoR React Unity</p>
                <p className={classes.text}>ゲーム : アトリエシリーズ(アーランド 黄昏 不思議シリーズプレイ済み)</p>
                <p className={classes.text}>特に好きなキャラ : トトリ ミミ フィリス イルメリア</p>
                <p className={classes.text}>音楽 : ずと真夜 相対性理論 アトリエシリーズサントラ</p>
                <p className={classes.text}>Vtuber : 月ノ美兎 鈴鹿詩子 本間ひまわり 名取さな</p>
            </Grid>
        </React.Fragment>
    )
}

export default About