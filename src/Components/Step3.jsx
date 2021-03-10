import { Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { useData } from "../DataContext";
import FileInput from "./FileInput";
import Form from "./Form";

import MainContainer from "./MainContainer";
import PrimaryButton from "./PrimaryButton";

function Step3() {
    const { data, setValues } = useData();
    const { control, handleSubmit } = useForm({
        defaultValues: { files: data.files },
    });

    const history = useHistory();

    const onSubmit = (data) => {
        history.push("./result");
        setValues(data);
    };

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                {"\uD83D\uDCC2"} Step 3
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FileInput name="files" control={control} />
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    );
}

export default Step3;
