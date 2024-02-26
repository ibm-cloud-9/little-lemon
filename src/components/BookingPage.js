import {React, useState, useReducer} from "react";
import { BookingForm } from "./BookingForm";

function BookingPage(props) {

    const updateTimes = (availableTimes, date) => {

    };

    const initializeTimes = (initAvailableTimes) => [
        ...initAvailableTimes
    ];

    const [availableTimes, dispatchOnDateChange] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );

    return (
        <BookingForm 
            availableTimes = {availableTimes}
            dispatchOnDateChange = {dispatchOnDateChange}>
        </BookingForm>
    )
}

export default BookingPage;