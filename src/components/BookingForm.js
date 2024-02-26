import React, { useState, useReducer} from "react";
import ReservationButton from './ReservationButton';
import './BookingForm.css'

function validateBooking() {

}

function BookingForm(props) {
    const [date, setDate] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');
    const [time, setTime] = useState("12:00");
    //const [availableTimes, setAvailableTimes] = useState([]);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input 
                type="date" 
                id="res-date" 
                value={date}
                onChange={(e) => {
                    setDate(e.target.value)
                }}
                placeholder="Reservation Date"
                ></input>

            <label htmlFor="res-time">Choose time</label>
            <select 
                id="res-time " 
                value={time} 
                onChange={(e) =>{
                setTime(e.target.value);
                }}>

                {/*setAvailableTimes([
                    ...availableTimes, 
                    {id: id, date: date, time: time, guests: guests, occasion: occasion}
                ])*/}

                {/*availableTimes.map(availableTimes => (
                    <option key={availableTimes.id}>{availableTimes.time}</option>
                ))*/}

                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input 
                type="number" 
                placeholder="1" 
                min="1" 
                max="10" 
                id="guests" 
                value={guests}
                onChange={(e) => {
                    setGuests(e.target.value)
                }}>

            </input>

            <label htmlFor="occasion">Occasion</label>
            <select 
            id="occasion" 
            value={occasion} 
            onChange={(e) => {
                setOccasion(e.target.value)
            }}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

{/*}
            <div>
		<h1></h1>
		<h1>: {state.money}</h1>
			<div>
			<button onClick={() => dispatch({type: 'book_reservation'})}>Book Reservation</button>
			<button onClick={() => dispatch({type: 'cancel_reservation'})}>Cancel Reservation</button>
			</div>
		</div> */}




            <ReservationButton 
                type="submit" 
                name="reservation-button" 
                value="Reserve Table" 
                disabled={!isFormValid()}>
            </ReservationButton>
        </form>
    )
}

export {BookingForm, validateBooking};