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
            name: "جدول المواعيد",
            image: images.share_and_win,
            // navi: 'ss'
        },

    ]




const Typeoil =

    [
        {
            name: "زيت طعام 1 كيلو",
            image: images.type_oil,
            number_points: 10
            // navi: 'History_profile'
        },
        {
            name: "زيت طعام 5 كيلو",
            image: images.food_oil,
            number_points: 50
            // navi: 'WriteProblem' tables.png
        },
        {
            name: "زيت عربيات 1 كيلو",
            image: images.cars_oils,
            number_points: 20
            // navi: 'ss'
        },
        {
            name: "زيت عربيات 5 كيلو",
            image: images.cars_oil_for_3K,
            number_points: 100
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


export {
    categories,
    Typeoil,
    Types_services

}