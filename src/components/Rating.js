export function Rating(stars)
{
    let rating = '';
    const ratingBlock = "<img src='rating-star-png' width='24px' height='24px' alt='rating star' />,"
    for (let i=1; i <= stars; i++) {
        rating += ratingBlock;
    }

    return "\"" + rating + "\"";
}