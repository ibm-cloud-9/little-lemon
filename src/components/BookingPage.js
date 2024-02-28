import {React, useReducer} from "react";
import BookingForm  from "./BookingForm";
import {fetchAPI} from "./Api";

import './BookingPage.css';

function BookingPage() {

    const updateTimes = (availableTimes, date) => {

        const response = fetchAPI(new Date(date));
        return response.length > 0 ? response : availableTimes;

    };

    const initializeTimes = (initAvailableTimes) => [
        ...initAvailableTimes,
        ...fetchAPI(new Date())
    ];

    const [availableTimes, dispatchOnDateChange] = useReducer(
        updateTimes,
        [],
        initializeTimes
    );

    return (
        <>
        <article>
            <div>
                <h1 className="booking-page-title">Book Your Reservation</h1>
                <h2 className="booking-page-subtitle">at our Chicago location</h2>
            </div>
            <div>
            <BookingForm 
                availableTimes = {availableTimes}
                dispatchOnDateChange = {dispatchOnDateChange}>
            </BookingForm>
            </div>
        </article>
        </>
    )
}


export default BookingPage;