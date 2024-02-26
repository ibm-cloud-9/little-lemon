import MenuCard from "./MenuCard";

const menuItems = [

    {
        name: 'Greek Salad',
        description: 'The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, granished with crunchy garlic and rosemary croutines.',
        price: '$12.99',
        image: 'greek-salad.jpg',
        alt: 'greek salad picture'
    },
    {
        name: 'Brushetta',
        description: 'Our Brushetta is mae from grilled bread that has been smeard with garlic and seasoned with salt and olive oil.',
        price: '$5.99',
        image: 'brushetta.jpg',
        alt: 'brushetta picture'
    },
    {
        name: 'Lemon Dessert',
        description: 'This comes from grandma\'s recipe book, every last ingredient has been sourced and is authentic as can be imagined.',
        price: '$5.00',
        image: 'lemon-dessert.jpg',
        alt: 'lemon-desert picture'
    }
];

function Specials() {

    return (
        <>
        <main className="menu-cards">
            {menuItems.map((item, index) => 
                <MenuCard key={index} menuItem={item} />
            )}
        </main>
        </>
    );
}

export default Specials;