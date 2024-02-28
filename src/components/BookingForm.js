import React, { useState } from "react";
import ReservationButton from './ReservationButton';
import './BookingForm.css'
import { submitAPI } from "./Api";

const DateErrorMessage = () => { 
    return ( 
      <p className="FieldError">A date is required.</p> 
    ); 
};

const TimeErrorMessage = () => { 
    return ( 
        <p className="FieldError">A time is required.</p> 
    ); 
};

const GuestsErrorMessage = () => { 
    return ( 
        <p className="FieldError">Between 1 and 10 guests can be reserved.</p> 
    ); 
};


function BookingForm({availableTimes, dispatchOnDateChange}) {
    const [date, setDate] = useState('');
    const [guests, setGuests] = useState(0);
    const [occasion, setOccasion] = useState('');
    const [time, setTime] = useState('');
    const [confirmation, setConfirmation] = useState('failed');


    const resetForm = () => { 
        setDate('');
        setTime('');
        setGuests(0);
        setOccasion('');
    };

    const isFormValid = () => {
        return ( 
            date && 
            time && 
            guests >=1 && guests <=10
          ); 
    };

    const buildMessage = (formData) => {
        return (
            "On " + formData.date + "\nat " + formData.time + "\nwith " + formData.guests + " guest(s) " + (formData.occasion === '' ?  '' : '\nfor your ' + formData.occasion)
        )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {

            var data = new FormData(e.target);
            var formData = Object.fromEntries(data.entries());          

            if (formData != null) {
                if (submitAPI(formData)) {
                    setConfirmation("success")
                    alert("Thank you, Your reservation has been created!:\n\n" + buildMessage(formData));
                }
            }

            resetForm();
        }
        else {
            setConfirmation("failed")
        }
    };

    const handleDateChange = (e) => {

        if (e.target.name === 'date') {
            dispatchOnDateChange(e.target.value);
            setDate(e.target.value);
        }
    };

    return (

        <form className="booking-form" onSubmit={handleSubmit}>

            <label htmlFor="date" className="booking-label-required">Choose date</label>
            <input 
                type="date" 
                id="date" 
                name="date"
                value={date}
                onChange={handleDateChange}
                placeholder="Reservation Date"
                required/>
            {date.value === '' ? (<DateErrorMessage /> ) : null} 

            <label htmlFor="time" className="booking-label-required">Choose time</label>
            <select 
                id="time" 
                name="time"
                value={time} 
                onChange={(e) => {
                setTime(e.target.value);
                }}
                required
                >

                {availableTimes.map(time => (
                    <option key={time}>{time}</option>
                ))}

            </select>
            {time.value === '' ? (<TimeErrorMessage /> ) : null} 
            <label htmlFor="guests" className="booking-label-required">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests" 
                name="guests"
                value={guests}
                onChange={(e) => {
                    setGuests(e.target.value)
                }}
                required />
            {(guests.number < 1 || guests.number > 10) ? (<GuestsErrorMessage /> ) : null} 

            <label htmlFor="occasion">Occasion</label>
            <select 
                id="occasion" 
                name="occasion"
                value={occasion} 
                onChange={(e) => {
                    setOccasion(e.target.value)
                }}
                >
                <option disabled></option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <input 
                type="hidden" 
                id="confirmation" 
                name="confirmation"
                value={confirmation}
                placeholder="confirmation"
                />

            <ReservationButton 
                type="submit" 
                name="reservation-button" 
                value="Reserve Table" 
                disabled={!isFormValid()}>
            </ReservationButton>
        </form>
    )
}

export default BookingForm;