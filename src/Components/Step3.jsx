import { Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import FileInput from "./FileInput";
import Form from "./Form";

import MainContainer from "./MainContainer";

function Step3() {
    const { control, handleSubmit, } = useForm();


    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                {"\uD83D\uDCC2"} Step 3
            </Typography>
            <Form>
                <FileInput name='files' control={control} />
            </Form>
        </MainContainer>
    );
}

export default Step3;
