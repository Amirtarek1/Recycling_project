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
            name: "منتجات",
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



const Voluntary_dataset =

    [
        {
            name: "مؤسسه مجدي بعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 10,
            date: "10/2/2023",
            // navi: 'History_profile'
        },
        {
            name: "مؤسسه مجدي بعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 50,
            date: "10/2/2023",
            // navi: 'WriteProblem' tables.png
        },
        {
            name: "مؤسسه مجدي بعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 20,
            date: "10/2/2023",
            // navi: 'ss'
        },
        {
            name: "مؤسسه مجدي بعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 100,
            date: "10/2/2023",
            // navi: 'ss'
        }, {
            name: "مؤسسه مجدي بعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 10,
            date: "10/2/2023",
            // navi: 'History_profile'
        },
        {
            name: "مؤسسه مجدي بعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 50,
            date: "10/2/2023",
            // navi: 'WriteProblem' tables.png
        },
        {
            name: "وب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 20,
            date: "10/2/2023",
            // navi: 'ss'
        },


    ]


    const Share_The_Good_Dataset =

    [
        {
            name: "مؤسسه مجدي بعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 1000,
            about: "مؤسسه خيريه",
            // navi: 'History_profile'
        },
        {
            name: "بنك الطعام المصري",
            image: images.Bank_elt3am_foundation_logo,
            number_points: 1050,
            date: "مؤسسه خيريه",
            // navi: 'WriteProblem' tables.png
        },
        {
            name: "بنك الطعام المصري",
            image: images.Bank_elt3am_foundation_logo,
            number_points: 20,
            date: "مؤسسه خيريه",
            // navi: 'ss'
        },
        {
            name: "جمعية الاورمان",
            image: images.Elorman_foundation_logo,
            number_points: 100,
            date: "مؤسسه خيريه",
            // navi: 'ss'
        }, 
         {
            name: "مصر الخير",
            image: images.Masr_elkhar_foundation_logo,
            number_points: 1000,
            about: "مؤسسه خيريه",
            // navi: 'History_profile'
        },
        {
            name: "جمعية رسالة",
            image: images.Resala_foundation_logo,
            number_points: 1050,
            date: "مؤسسه خيريه",
            // navi: 'WriteProblem' tables.png
        },
        {
            name: "بنك الطعام المصري",
            image: images.Bank_elt3am_foundation_logo,
            number_points: 20,
            date: "مؤسسه خيريه",
            // navi: 'ss'
        },
        {
            name: "جمعية الاورمان",
            image: images.Elorman_foundation_logo,
            number_points: 100,
            date: "مؤسسه خيريه",
            // navi: 'ss'
        },



    ]



export {
    categories,
    Types_services,
    Oils,
    Voluntary_dataset,
    Share_The_Good_Dataset
}