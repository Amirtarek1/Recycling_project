import { images } from "../constants";

const categories =

    [
        {
            name: "أنواع الزيوت",
            image: images.type_oil,
            // navi: 'History_profile'
        },
        {
            name: "الخدمات المقابله",
            image: images.another_service,
            // navi: 'WriteProblem' tables.png
        },
        {
            name: "جدول المواعيد",
            image: images.tables,
            // navi: 'ss'
        },
        {
            name: "شارك و اربح",
            image: images.share_and_win,
            // navi: 'ss'
        },

    ]






const Types_services =

    [
        {
            name: "فلوس",
            image: images.Money_exchange,
            number_points: 10
            // navi: 'History_profile'
        },
        {
            name: "تبرعات",
            image: images.Donations_exchange,
            number_points: 50
            // navi: 'WriteProblem' tables.png
        },
        {
            name:"منتجات",
            image: images.Products_exchange,
            number_points: 20
            // navi: 'ss'
        },
        {
            name: "كوبونات خصم",
            image: images.Sale_exchange,
            number_points: 100
            // navi: 'ss'
        },

    ]


    
    const Oils = 

        [
            {
                id: 1,
                name: "زيت طعام 1 كيلو",
                image: images.type_oil,
                number_points: 10,
                initial: 0
                // navi: 'History_profile'
            },
            {
                id: 2,
                name: "زيت طعام 5 كيلو",
                image: images.food_oil,
                number_points: 50,
                initial: 0
                // navi: 'WriteProblem' tables.png
            },
            {
                id: 3,
                name: "زيت عربيات 1 كيلو",
                image: images.cars_oils,
                number_points: 20,
                initial: 0
                // navi: 'ss'
            },
            {
                id: 4,
                name: "زيت عربيات 5 كيلو",
                image: images.cars_oil_for_3K,
                number_points: 100,
                initial: 0
                // navi: 'ss'
            },

        ]


export {
    categories,
    Types_services,
    Oils

}