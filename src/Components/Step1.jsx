import React from "react";
import MainContainer from "./MainContainer";
import { Typography } from "@material-ui/core";
import Form from "./Form";
import { useForm } from "react-hook-form";
import PrimaryButton from "./PrimaryButton";
import Input from "./Input";
import { useHistory } from "react-router";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useData } from "../DataContext";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("First name is a required field"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
        .required("Last name is a required field"),
});

function Step1() {
    const { data, setValues } = useData()
    const { register, handleSubmit, errors } = useForm({
        mode: "onBlur",
        defaultValues: {
            firstName: data.firstName,
            lastName: data.lastName
        },
        resolver: yupResolver(schema)
    });

    const history = useHistory()

    const onSubmit = (data) => {
        history.push('./step2')
        setValues(data)
    };

    return (
        <MainContainer>
            <Typography
                //  className={styles.root}
                component="h2"
                variant="h5"
            >
                🦄 Step 1
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    ref={register}
                    id="firstName"
                    type="text"
                    label="First Name"
                    name="firstName"
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                    />
                <Input
                    ref={register}
                    id="lastName"
                    type="text"
                    label="Last Name"
                    name="lastName"
                    error={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                />
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    );
}

export default Step1;
