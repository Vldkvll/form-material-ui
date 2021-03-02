import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "Permanent Marker",
        margin: theme.spacing(3, 0, 2),
        textAlign: "center",
        fontSize: "40px",
        color: "#c74f8f",
        textShadow: "1px 1px #571c57",
    },
}));

function Header() {
    const styles = useStyles();

    return (
        <Typography className={styles.root} component="h1" variant="h5">
            The Full Form App
        </Typography>
    );
}

export default Header;
