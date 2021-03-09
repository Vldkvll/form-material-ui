import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Form from "./Form";
import Input from "./Input";
import MainContainer from "./MainContainer";
import PrimaryButton from "./PrimaryButton";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import parsePhoneNumberFromString from "libphonenumber-js";

const schema = yup.object().shape({
    email: yup
        .string()
        .email("Email should have correct form")
        .required("Email is a required field"),
});

function Step2() {
    const { register, handleSubmit, errors, watch } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    const history = useHistory();

    const hasPhone = watch("hasPhone");

    const onSubmit = (data) => {
        console.log(data);
        history.push("./step3");
    };

    const normalizePhoneNumber = (value) => {
        const phoneNumber = parsePhoneNumberFromString(value);
        if (!phoneNumber) return value;

        return phoneNumber.formatInternational();
    };

    return (
        <MainContainer>
            <Typography
                //  className={styles.root}
                component="h2"
                variant="h5"
            >
                {/* {"\u260e"} Step 2 */}
                Step 2
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    id="email"
                    type="email"
                    label={`Email \u2709`}
                    name="email"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    ref={register}
                    required
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="hasPhone"
                            inputRef={register}
                            color="primary"
                        />
                    }
                    label={`\u260e Do you have a phone?`}
                />
                {hasPhone && (
                    <Input
                        ref={register}
                        name="phoneNumber"
                        id="phoneNumber"
                        type="tel"
                        label={`Phone number     \u260e`}
                        onChange={(event) => {
                            event.target.value = normalizePhoneNumber(
                                event.target.value
                            );
                        }}
                    />
                )}
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    );
}

export default Step2;
