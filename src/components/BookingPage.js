import {React, useState} from "react";
import { BookingForm } from "./BookingForm";

function BookingPage(props) {

    const [availableTimes, setAvailableTimes] = useState([]);

    return (
        <BookingForm bookings={props.availableTimes}></BookingForm>
    )
}

export default BookingPage;