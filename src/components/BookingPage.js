import React from "react";
import { BookingForm } from "./BookingForm";

function BookingPage(props) {

    const [availableTimes, setAvailableTimes] = useState([]);

    function updateTimes() {
        return availableTimes;
    }

    function initializeTimes() {
        return availableTimes;
    }
    
    return (
        <BookingForm bookings={props.availableTimes}></BookingForm>
    )
}

export default BookingPage;