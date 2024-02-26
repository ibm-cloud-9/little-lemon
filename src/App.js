import './App.css';
import React, {useState} from 'react';
import Nav from './components/Nav';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Specials from './components/Specials';

function App() {

  const [currentLocation, setCurrentLocation] = useState(window.location);
  const [bookings, setBookings] = React.useState([]);

  console.clear();

  console.log('PathName: ', currentLocation);

  return (
      <>
      <Nav/>
      </>
  );
}

export default App;
