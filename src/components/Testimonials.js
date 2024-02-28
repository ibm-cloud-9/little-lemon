import Footer from "./Footer";
import TestimonialCard from "./TestimonialCard";
import { Rating } from "./Rating";

const testimonialItems = [

    {
        name: 'Reviewer #1',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        rating: Rating(4),
        image: 'testimonial1.png',
        alt: 'testimonial1 picture'
    },  
    {
        name: 'Reviewer #2',
        review: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        rating: Rating(5),
        image: 'testimonial2.png',
        alt: 'testimonial2 picture'
    },
    {
        name: 'Reviewer #3',
        review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        rating: Rating(5),
        image: 'testimonial3.png',
        alt: 'testimonial3 picture'
    },
    {
        name: 'Reviewer #4',
        review: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        rating: Rating(4),
        image: 'testimonial4.png',
        alt: 'testimonial4 picture'
    }    
];

function Testimonials() {

    return (
        <>
        <main className="testimonial-cards">
            {testimonialItems.map((item, index) => 
                <TestimonialCard key={index} testimonialItem={item} />
            )}
        </main>
        <Footer />
        </>
    );
}

export default Testimonials;