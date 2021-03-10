import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import {
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@material-ui/core";
import React from "react";
import { useData } from "../DataContext";
import MainContainer from "./MainContainer";
import { InsertDriveFile } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: "20px",
    },
    table: {
        // marginBottom: '20px',
    },
    link: {
        textDecoration: "none",
        fontSize: "18px",
        padding: " 8px 35px",
        textAlign: "center",
        textTransform: "uppercase",
        transition: ".5s",
        backgroundSize: "200% auto",
        color: "#ccc",
        boxShadow: "0 0 20px #eee",
        borderRadius: "10px",
        display: "block",
        outline: "none",

        "&:hover": {
            borderRadius: "10px",
            backgroundPosition: "100%",
            backgroundImage:
                "linear-gradient(to right, rgb(255, 110, 127) 0%, rgb(191, 233, 255) 51%, rgb(255, 110, 127) 100%)",
            color: "#fff",
        },
    },
    button: {
        display: "block",
        width: "100%",
        backgroundColor: "inherit",
    },
}));

function Result() {
    const styles = useStyles();
    const { width, height } = useWindowSize();
    const [success, setSuccess] = useState(false);
    const { data } = useData();
    const entries = Object.entries(data).filter(
        (entry) => entry[0] !== "files" && entry[0] !== "hasPhone"
    );

    const { files } = data;

    const onSubmit = async () => {
        const formData = new FormData();

        if (data.files) {
            data.files.forEach((file) => {
                formData.append("files", file, file.name);
            });
        }

        entries.forEach((entry) => {
            formData.append(entry[0], entry[1]);
        });

        const res = await fetch("http://localhost:4000/", {
            method: "POST",
            body: formData,
        });

        if (res.status === 200) {
            Swal.fire(
                "Awesome!! Great Job!!!",
                "You've passed the challenge",
                "success"
            );
            setSuccess(true);
        }
    };

    if (success) {
        return <Confetti width={width} height={height} />;
    }

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                {`\uD83D\uDCAA`} Form Values
            </Typography>
            <TableContainer className={styles.root} component={Paper}>
                <Table className={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell> Field</TableCell>
                            <TableCell align="right"> Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.map((entry) => (
                            <TableRow key={entry[0]}>
                                <TableCell>{entry[0]}</TableCell>
                                <TableCell align="right">{entry[1]}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {!!files && !!files.length && (
                <>
                    <Typography component="h2" variant="h5">
                        {`\uD83D\uDCBC`} Files
                    </Typography>
                    <List>
                        {files.map((f, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <InsertDriveFile />
                                </ListItemIcon>
                                <ListItemText
                                    primary={f.name}
                                    secondary={f.size}
                                />
                            </ListItem>
                        ))}
                    </List>
                </>
            )}
            <PrimaryButton>
                <span
                    className={styles.button}
                    color="primary"
                    onClick={onSubmit}
                >
                    Submit
                </span>
            </PrimaryButton>

            <Link to="/" className={styles.link}>
                Start Over!
            </Link>
        </MainContainer>
    );
}

export default Result;
