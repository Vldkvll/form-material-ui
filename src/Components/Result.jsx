import { Link } from "react-router-dom";
import {
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

function Result() {
    const { data } = useData();
    const entries = Object.entries(data).filter(
        (entry) => entry[0] !== "files" && entry[0] !== "hasPhone"
    );
    console.log(entries);
    const { files } = data;
    console.log(files);


    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                {`\uD83D\uDCAA`} Form Values
            </Typography>
            <TableContainer component={Paper}>
                <Table>
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
            { !!files &&  !!files.length && (
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
            <Link to="/">Start Over!</Link>
        </MainContainer>
    );
}

export default Result;
