import Transport from "../assets/images/accounts-dashboard/categories/transport.png";
import Groceries from "../assets/images/accounts-dashboard/categories/groceries.png";
import Entertainment from "../assets/images/accounts-dashboard/categories/entertainment.png";
import Restaurants from "../assets/images/accounts-dashboard/categories/restaurants.png";
import Utilities from "../assets/images/accounts-dashboard/categories/utilities.png";
import Gifts from "../assets/images/accounts-dashboard/categories/gifts.png";
import Services from "../assets/images/accounts-dashboard/categories/services.png";
import Health from "../assets/images/accounts-dashboard/categories/health.png";
import Clothes from "../assets/images/accounts-dashboard/categories/clothes.png";
import Subscribtions from "../assets/images/accounts-dashboard/categories/subscribtions.png";
import Alcohol from "../assets/images/accounts-dashboard/categories/alcohol.png";
import Travel from "../assets/images/accounts-dashboard/categories/travel.png";
import Shopping from "../assets/images/accounts-dashboard/categories/shopping.png";


const expenses = [
    {
        id: 1, type: 'expense',
        name: "Taxi to work",
        category: "Transport",
        created: "2022-06-16",
        amount: (5).toFixed(2),
        currency: "$",
        cover: Transport,
        note: '',
        bankAccount: "Card"
    },
    {
        id: 2, type: 'expense',
        name: "Supermarket shopping for fruits",
        category: "Groceries",
        created: "2022-06-16",
        amount: (8).toFixed(2),
        currency: "$",
        cover: Groceries,
        note: '', bankAccount: "Card"
    },
    {
        id: 3, type: 'expense',
        name: "Movies night",
        category: "Entertainment",
        created: "2022-06-17",
        amount: (15).toFixed(2),
        currency: "$",
        cover: Entertainment,
        note: '', bankAccount: "Card"
    },
    {
        id: 4, type: 'expense',
        name: "Burgers and fries",
        category: "Restaurants",
        created: "2022-06-17",
        amount: (12).toFixed(2),
        currency: "$",
        cover: Restaurants,
        note: '', bankAccount: "Card"
    },
    {
        id: 5, type: 'expense',
        name: "Visit Alex",
        category: "Transport",
        created: "2022-06-18",
        amount: (10).toFixed(2),
        currency: "$",
        cover: Transport,
        note: '', bankAccount: "Card"
    },

    {
        id: 6, type: 'expense',
        name: "Presents for Alex",
        category: "Gifts",
        created: "2022-06-18",
        amount: (22).toFixed(2),
        currency: "$",
        cover: Gifts,
        note: '', bankAccount: "Savings"
    },
    {
        id: 7, type: 'expense',
        name: "Taxi to work",
        category: "Transport",
        created: "2022-06-19",
        amount: (5).toFixed(2),
        currency: "$",
        cover: Transport,
        note: '', bankAccount: "Card"
    },
    {
        id: 8, type: 'expense',
        name: "Eating out",
        category: "Restaurants",
        created: "2022-06-19",
        amount: (11).toFixed(2),
        currency: "$",
        cover: Restaurants,
        note: '', bankAccount: "Card"
    },
    {
        id: 9, type: 'expense',
        name: "Haircut",
        category: "Services",
        created: "2022-06-19",
        amount: (8).toFixed(2),
        currency: "$",
        cover: Services,
        note: '', bankAccount: "Card"
    },
    {
        id: 10, type: 'expense',
        name: "Rental",
        category: "Services",
        created: "2022-06-20",
        amount: (1000).toFixed(2),
        currency: "$",
        cover: Services,
        note: '', bankAccount: "Card"
    },
    {
        id: 11, type: 'expense',
        name: "Telephone & Internet",
        category: "Utilities",
        created: "2022-06-20",
        amount: (30).toFixed(2),
        currency: "$",
        cover: Utilities,
        note: '', bankAccount: "Card"
    },
    {
        id: 12, type: 'expense',
        name: "Weekly groceries",
        category: "Groceries",
        created: "2022-06-21",
        amount: (100).toFixed(2),
        currency: "$",
        cover: Groceries,
        note: '', bankAccount: "Card"
    },
    {
        id: 13, type: 'expense',
        name: "Coffee and cake",
        category: "Restaurants",
        created: "2022-06-22",
        amount: (10).toFixed(2),
        currency: "$",
        cover: Restaurants,
        note: '', bankAccount: "Card"
    },
    {
        id: 14, type: 'expense',
        name: "Tomato sauce",
        category: "Groceries",
        created: "2022-06-22",
        amount: (2).toFixed(2),
        currency: "$",
        cover: Groceries,
        note: '', bankAccount: "Card"
    },
    {
        id: 15, type: 'expense',
        name: "Books",
        category: "Entertainment",
        created: "2022-06-28",
        amount: (7).toFixed(2),
        currency: "$",
        cover: Entertainment,
        note: '', bankAccount: "Card"
    },
    {
        id: 16, type: 'expense',
        name: "Fancy dinner",
        category: "Restaurants",
        created: "2022-06-29",
        amount: (20).toFixed(2),
        currency: "$",
        cover: Restaurants,
        note: '', bankAccount: "Card"
    },
    {
        id: 17, type: 'expense',
        name: "Taxi to work",
        category: "Transport",
        created: "2022-06-30",
        amount: (5).toFixed(2),
        currency: "$",
        cover: Transport,
        note: '', bankAccount: "Card"
    },
    {
        id: 18, type: 'expense',
        name: "Optalmologist",
        category: "Health",
        created: "2022-07-01",
        amount: (50).toFixed(2),
        currency: "$",
        cover: Health,
        note: '', bankAccount: "Card"
    },
    {
        id: 19, type: 'expense',
        name: "Eye drops",
        category: "Health",
        created: "2022-07-01",
        amount: (12).toFixed(2),
        currency: "$",
        cover: Health,
        note: '', bankAccount: "Card"
    },
    {
        id: 20, type: 'expense',
        name: "Glasses repair",
        category: "Health",
        created: "2022-07-02",
        amount: (21).toFixed(2),
        currency: "$",
        cover: Health,
        note: '', bankAccount: "Card"
    },
    {
        id: 21, type: 'expense',
        name: "T-shirt",
        category: "Clothes",
        created: "2022-07-03",
        amount: (9).toFixed(2),
        currency: "$",
        cover: Clothes,
        note: '', bankAccount: "Card"
    },
    {
        id: 22, type: 'expense',
        name: "Dress",
        category: "Clothes",
        created: "2022-07-03",
        amount: (18).toFixed(2),
        currency: "$",
        cover: Clothes,
        note: '', bankAccount: "Card"
    },
    {
        id: 23, type: 'expense',
        name: "Taxi home",
        category: "Transport",
        created: "2022-07-03",
        amount: (10).toFixed(2),
        currency: "$",
        cover: Transport,
        note: '', bankAccount: "Card"
    },
    {
        id: 24, type: 'expense',
        name: "Netflix subscription",
        category: "Subscribtions",
        created: "2022-07-04",
        amount: (100).toFixed(2),
        currency: "$",
        cover: Subscribtions,
        note: '', bankAccount: "Card"
    },
    {
        id: 25, type: 'expense',
        name: "Veggies",
        category: "Groceries",
        created: "2022-07-04",
        amount: (13).toFixed(2),
        currency: "$",
        cover: Groceries,
        note: '', bankAccount: "Card"
    },
    {
        id: 26, type: 'expense',
        name: "Yearly bus card",
        category: "Transport",
        created: "2022-07-05",
        amount: (130).toFixed(2),
        currency: "$",
        cover: Transport,
        note: '', bankAccount: "Card"
    },
    {
        id: 27, type: 'expense',
        name: "Cheese",
        category: "Groceries",
        created: "2022-07-05",
        amount: (10).toFixed(2),
        currency: "$",
        cover: Groceries,
        note: '', bankAccount: "Card"
    },
    {
        id: 28, type: 'expense',
        name: "2 Wine bottles",
        category: "Alcohol",
        created: "2022-07-05",
        amount: (18).toFixed(2),
        currency: "$",
        cover: Alcohol,
        note: '', bankAccount: "Card"
    },
    {
        id: 29, type: 'expense',
        name: "Bread, eggs, milk",
        category: "Groceries",
        created: "2022-07-06",
        amount: (11).toFixed(2),
        currency: "$",
        cover: Groceries,
        note: '', bankAccount: "Card"
    },
    {
        id: 30, type: 'expense',
        name: "Ticket to Buenos Aires",
        category: "Travel",
        created: "2022-07-07",
        amount: (500).toFixed(2),
        currency: "$",
        cover: Travel,
        note: '', bankAccount: "Savings"
    },
    {
        id: 31, type: 'expense',
        name: "Sushi",
        category: "Restaurants",
        created: "2022-07-08",
        amount: (14).toFixed(2),
        currency: "$",
        cover: Restaurants,
        note: '', bankAccount: "Card"
    },
    {
        id: 32, type: 'expense',
        name: "Kitchen accessories",
        category: "Shopping",
        created: "2022-07-09",
        amount: (20).toFixed(2),
        currency: "$",
        cover: Shopping,
        note: '', bankAccount: "Card"
    },
    {
        id: 33, type: 'expense',
        name: "Table",
        category: "Shopping",
        created: "2022-07-09",
        amount: (43).toFixed(2),
        currency: "$",
        cover: Shopping,
        note: '', bankAccount: "Card"
    },
    {
        id: 34, type: 'expense',
        name: "Bread and eggs",
        category: "Groceries",
        created: "2022-07-10",
        amount: (9).toFixed(2),
        currency: "$",
        cover: Groceries,
        note: '', bankAccount: "Card"
    },
    {
        id: 35, type: 'expense',
        name: "Beer",
        category: "Alcohol",
        created: "2022-07-10",
        amount: (12).toFixed(2),
        currency: "$",
        cover: Alcohol,
        note: '', bankAccount: "Card"
    },
    {
        id: 36, type: 'expense',
        name: "Socks",
        category: "Clothes",
        created: "2022-07-10",
        amount: (2).toFixed(2),
        currency: "$",
        cover: Clothes,
        note: '', bankAccount: "Card"
    },
    {
        id: 37, type: 'expense',
        name: "Airpods",
        category: "Shopping",
        created: "2022-07-12",
        amount: (400).toFixed(2),
        currency: "$",
        cover: Shopping,
        note: '', bankAccount: "Card"
    },
    {
        id: 38, type: 'expense',
        name: "Meat and eggs",
        category: "Groceries",
        created: "2022-07-12",
        amount: (14).toFixed(2),
        currency: "$",
        cover: Groceries,
        note: '', bankAccount: "Card"
    },
    {
        id: 39, type: 'expense',
        name: "Taxi to work",
        category: "Transport",
        created: "2022-07-13",
        amount: (8).toFixed(2),
        currency: "$",
        cover: Transport,
        note: '', bankAccount: "Card"
    },
    {
        id: 40, type: 'expense',
        name: "Sushi",
        category: "Restaurants",
        created: "2022-07-13",
        amount: (13).toFixed(2),
        currency: "$",
        cover: Restaurants,
        note: '', bankAccount: "Card"
    },
]


export default expenses;