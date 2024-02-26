import React, { useState } from "react";
import ReservationButton from './ReservationButton';
import './BookingForm.css'

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
    const [time, setTime] = availableTimes[0];
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

 
    const resetForm = () => { 
        setDate('');
        setTime('12:00');
        setGuests(1);
        setOccasion('Birthday');
    };

    const isFormValid = () => {
        return ( 
            date && 
            time && 
            occasion &&
            guests >=1 && guests <=10
          ); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {

        } else {

        }
        // Reset form input
        resetForm()
    };

    const handleDateChange = (e) => {
        if (e.target.name === 'res-date') {
            dispatchOnDateChange(e.target.value);
        }
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                name="res-date"
                value={date}
                onChange={handleDateChange}
                placeholder="Reservation Date"
                />
            {date.value == '' ? (<DateErrorMessage /> ) : null} 

            <label htmlFor="res-time">Choose time</label>
            <select 
                id="res-time" 
                name="res-time"
                value={time} 
                onChange={(e) =>{
                setTime(e.target.value);
                }}>

                {availableTimes.map(time => (
                    <option key={time}>{time}</option>
                ))}

            </select>
            {time.value == '' ? (<TimeErrorMessage /> ) : null} 
            <label htmlFor="guests">Number of guests</label>
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
                }}/>
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
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <ReservationButton 
                type="submit" 
                name="reservation-button" 
                value="Reserve Table" 
                disabled={!isFormValid()}>
            </ReservationButton>
        </form>
    )
}

export {BookingForm};