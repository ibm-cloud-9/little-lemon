import React from 'react';
import CustomButton from './CustomButton'

function ReservationButton(props) {
    return <CustomButton name={props.name} value={props.value} type={props.type} role="submit" style={{fontWeight: 'bold', backgroundColor: '#FFFF00', color: '#000000', height: '36px', borderRadius: '8px', width: '120px'}}></CustomButton>
}

export default ReservationButton;