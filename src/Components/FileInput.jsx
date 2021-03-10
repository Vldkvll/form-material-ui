import React from "react";
import { Controller } from "react-hook-form";
import Dropzone from "react-dropzone";
import List from "@material-ui/core/List";
import { ListItem, ListItemIcon, ListItemText, Paper } from "@material-ui/core";
import { CloudUpload, InsertDriveFile } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#eee',
        color: '#333',
        textAlign: 'center',
        padding: '10px',
        cursor: 'pointer',
        marginTop: '20px'
    },
    icon: {
        // backgroundColor: '#eee',
        color: '#888',
        fontSize: '42px',
        marginTop: '16px'
    },
}));

function FileInput({ control, name }) {
    const styles = useStyles();
    
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={({ onChange, onBlur, value }) => (
                <>
                    <Dropzone onDrop={onChange}>
                        {({ getRootProps, getInputProps }) => (
                            <Paper
                            className={styles.root}
                            variant="outlined" {...getRootProps()}>
                                <CloudUpload className={styles.icon} />
                                <input
                                    {...getInputProps()}
                                    name={name}
                                    onBlur={onBlur}
                                />
                                <p>
                                    Drag 'n' drop files here, or click to select
                                    files
                                </p>
                            </Paper>
                        )}
                    </Dropzone>
                    <List>
                        {value.map((f, index) => (
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
        />
    );
}

export default FileInput;
