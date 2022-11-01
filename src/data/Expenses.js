import Transport from "../assets/images/accounts-dashboard/categories/transport.png";
import Groceries from "../assets/images/accounts-dashboard/categories/groceries.png";
import Entertainment from "../assets/images/accounts-dashboard/categories/entertainment.png";
import Shopping from "../assets/images/accounts-dashboard/categories/shopping.png";
import Restaurants from "../assets/images/accounts-dashboard/categories/restaurants.png";
import Utilities from "../assets/images/accounts-dashboard/categories/utilities.png";
import Clothes from "../assets/images/accounts-dashboard/categories/clothes.png";
import Gifts from "../assets/images/accounts-dashboard/categories/gifts.png";
import Travel from "../assets/images/accounts-dashboard/categories/travel.png";
import Alcohol from "../assets/images/accounts-dashboard/categories/alcohol.png";
import Health from "../assets/images/accounts-dashboard/categories/health.png";
import Subscribtions from "../assets/images/accounts-dashboard/categories/subscribtions.png";
import Savings from "../assets/images/accounts-dashboard/categories/savings.png";
import Services from "../assets/images/accounts-dashboard/categories/services.png";
import Investments from "../assets/images/accounts-dashboard/categories/investments.png";

const expenses = [
    {
        id: 1,
        name: "Taxi to work",
        category: "Transport",
        created: "2022-06-16",
        amount: (5).toFixed(2),
        currency: "$",
        cover: Transport,
        note: '',
    },
    {
        id: 2,
        name: "Supermarket shopping for fruits",
        category: "Groceries",
        created: "2022-06-16",
        amount: (8).toFixed(2),
        currency: "$",
        cover: Groceries,
        note: '',
    },
    {
        id: 3,
        name: "Movies night",
        category: "Entertainment",
        created: "2022-06-17",
        amount: (15).toFixed(2),
        currency: "$",
        cover: Entertainment,
        note: '',
    },
    {
        id: 4,
        name: "Burgers and fries",
        category: "Restaurants",
        created: "2022-06-17",
        amount: (12).toFixed(2),
        currency: "$",
        cover: Restaurants,
        note: '',
    },
    {
        id: 5,
        name: "Visit Alex",
        category: "Transport",
        created: "2022-06-18",
        amount: (10).toFixed(2),
        currency: "$",
        cover: Transport,
        note: '',
    },

    {
        id: 6,
        name: "Presents for Alex",
        category: "Gifts",
        created: "2022-06-18",
        amount: (22).toFixed(2),
        currency: "$",
        cover: Gifts,
        note: '',
    },
    {
        id: 7,
        name: "Taxi to work",
        category: "Transport",
        created: "2022-06-19",
        amount: (5).toFixed(2),
        currency: "$",
        cover: Transport,
        note: '',
    },
    {
        id: 8,
        name: "Eating out",
        category: "Restaurants",
        created: "2022-06-19",
        amount: (11).toFixed(2),
        currency: "$",
        cover: Restaurants,
        note: '',
    },
    {
        id: 9,
        name: "Haircut",
        category: "Services",
        created: "2022-06-19",
        amount: (8).toFixed(2),
        currency: "$",
        cover: Services,
        note: '',
    },
    {
        id: 10,
        name: "Rental",
        category: "Services",
        created: "2022-06-20",
        amount: (1000).toFixed(2),
        currency: "$",
        cover: Services,
        note: '',
    },
    {
        id: 11,
        name: "Telephone & Internet",
        category: "Utilities",
        created: "2022-06-20",
        amount: (30).toFixed(2),
        currency: "$",
        cover: Utilities,
        note: '',
    },
]

export default expenses;