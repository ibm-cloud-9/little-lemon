import './TestimonialCard.css';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Default.css'
function TestimonialCard({testimonialItem}) {

    
    return (
        <>
        <article className="testimonial-card">
            

            <p className="testimonial-card-rating"><img src='rating-star.png' width='24px' height='24px' alt='rating star' />
            <img src='rating-star.png' width='24px' height='24px' alt='rating star' />
            <img src='rating-star.png' width='24px' height='24px' alt='rating star' />
            <img src='rating-star.png' width='24px' height='24px' alt='rating star' /></p>
            <img className="testimonial-card-image" src={testimonialItem.image} width="300px" height="250px" alt={testimonialItem.alt} />
            <div className="testimonial-card-body">
                <h3 className="testimonial-card-header">{testimonialItem.name}</h3>
                <p className="testimonial-card-text">{testimonialItem.review}</p>
                <button className="default-button">Review</button>
            </div>
        </article>
        </>
    );
}

export default TestimonialCard;