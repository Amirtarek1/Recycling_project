import { images } from "../constants";

const categories =

    [
        {
            name: "أنواع الزيوت",
            image: images.type_oil,
            navi: 'Types_oil'
        },
        {
            name: "الخدمات المقابله",
            image: images.another_service,
            navi: 'ServicesOil'
        },
        {
            name: "جدول المواعيد",
            image: images.tables,
            navi: 'TimeTablePage'
        },
        {
            name: "شارك و اربح",
            image: images.share_and_win,
            // navi: 'Share_page'
            link: ''
        },
        {
            name: "أخري",
            image: images.another,
            // navi: alert("SOON")
        },

    ]






const Types_services =

    [
        {
            name: "فلوس",
            image: images.Money_exchange,
            number_points: 10,
            // navi: 'History_profile'
        },
        {
            name: "تبرعات",
            image: images.Donations_exchange,
            number_points: 50,
            navi: 'Voluntary'
        },
        {
            name: "منتجات",
            image: images.Products_exchange,
            number_points: 20,
            // navi: 'ss'
        },
        {
            name: "كوبون خصم",
            image: images.Sale_exchange,
            number_points: 100,
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
            name: "مؤسسه مجدي يعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 10,
            date: "10/2/2023",
            // navi: 'History_profile'
        },
        {
            name: "مؤسسه مجدي يعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 50,
            date: "10/2/2023",
            // navi: 'WriteProblem' tables.png
        },
        {
            name: "مؤسسه مجدي يعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 20,
            date: "10/2/2023",
            // navi: 'ss'
        },
        {
            name: "مؤسسه مجدي يعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 100,
            date: "10/2/2023",
            // navi: 'ss'
        }, {
            name: "مؤسسه مجدي يعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 10,
            date: "10/2/2023",
            // navi: 'History_profile'
        },
        {
            name: "مؤسسه مجدي يعقوب",
            image: images.magdi_yacoub_foundation_logo,
            number_points: 50,
            date: "10/2/2023",
            // navi: 'WriteProblem' tables.png
        },
        {
            name: "مؤسسه مجدي يعقوب",
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
            image: images.mac,
            number_points: 1000,
            about: "مؤسسه خيريه",
            navi: 'FoundationPage'
        },
        {
            name: "بنك الطعام المصري",
            image: images.Bank_elt3am_foundation_logo,
            number_points: 1050,
            date: "مؤسسه خيريه",
            navi: 'FoundationPage'
        },
        {
            name: "بنك الطعام المصري",
            image: images.Bank_elt3am_foundation_logo,
            number_points: 20,
            date: "مؤسسه خيريه",
            navi: 'FoundationPage'
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
            navi: 'FoundationPage'
        },
        {
            name: "جمعية رسالة",
            image: images.Resala_foundation_logo,
            number_points: 1050,
            date: "مؤسسه خيريه",
            navi: 'FoundationPage'
        },
        {
            name: "بنك الطعام المصري",
            image: images.Bank_elt3am_foundation_logo,
            number_points: 20,
            date: "مؤسسه خيريه",
            navi: 'FoundationPage'
        },
        {
            name: "جمعية الاورمان",
            image: images.Elorman_foundation_logo,
            number_points: 100,
            date: "مؤسسه خيريه",
            navi: 'FoundationPage'
        },


    ]
const money_archives_data = [
    {
        status: "مكتمل",
        date: "10/2/2023",
        type_of_transaction: "فودافون كاش",
        number_points: "200",
        cash: "0.00",
        image: images.Vodafone_logo,
    },
    {
        status: "مكتمل",
        date: "10/2/2023",
        type_of_transaction: "فودافون كاش",
        number_points: "200",
        cash: "0.00",
        image: images.Vodafone_logo,
    }, {
        status: "مكتمل",
        date: "10/2/2023",
        type_of_transaction: "فودافون كاش",
        number_points: "200",
        cash: "0.00",
        image: images.Vodafone_logo,
    }, {
        status: "مكتمل",
        date: "10/2/2023",
        type_of_transaction: "فودافون كاش",
        number_points: "200",
        cash: "0.00",
        image: images.Vodafone_logo,
    }, {
        status: "مكتمل",
        date: "10/2/2023",
        type_of_transaction: "فودافون كاش",
        number_points: "200",
        cash: "0.00",
        image: images.Vodafone_logo,
    }
];


const Copones =

    [
        {
            id: "1",
            name: " خصم 25 %",
            image: images.mac,
            number_points: 1000,
            about: "مؤسسه خيريه",
        },
        {
            id: "2",
            name: "ماكدونلز خصم 25 %",
            image: images.Bank_elt3am_foundation_logo,
            number_points: 1050,
            date: "مؤسسه خيريه",
        },
        {
            id: "3",
            name: "ماكدونلز خصم 25 %",
            image: images.mac,
            number_points: 20,
            date: "مؤسسه خيريه",
        },
        {
            id: "4",
            name: " تيتتي 25 %",
            image: images.Elorman_foundation_logo,
            number_points: 100,
            date: "مؤسسه خيريه",
        },
        {
            id: "5",
            name: "ماكدونلز خصم 40%",
            image: images.Masr_elkhar_foundation_logo,
            number_points: 1000,
            about: "مؤسسه خيريه",
        },
        {
            id: "6",
            name: "جمعية رسالة",
            image: images.mac,
            number_points: 1050,
            date: "مؤسسه خيريه",
        },
        {
            id: "7",
            name: "بنك الطعام المصري",
            image: images.Bank_elt3am_foundation_logo,
            number_points: 20,
            date: "مؤسسه خيريه",
        },
        {
            id: "8",
            name: "جمعية الاورمان",
            image: images.mac,
            number_points: 100,
            date: "مؤسسه خيريه",
        },



    ]



const CartData =
    [
        {
            numOfBottles: 2,
            numOfPoints: 20
        },
        {
            numOfBottles: 2,
            numOfPoints: 20
        }
        ,
        {
            numOfBottles: 2,
            numOfPoints: 20
        }
        , {
            numOfBottles: 2,
            numOfPoints: 20
        },
        {
            numOfBottles: 2,
            numOfPoints: 20
        }
    ]

const ProfilePagedata =
    [
        {
            id: 1,
            text_content: "معلومات الحساب",
            icone: "user-circle",
            navi: 'Personal_Profile_page'
        },
        {
            id: 2,
            text_content: "تغيير كلمة السر",
            icone: "expeditedssl",
            navi: 'Change_password1'
        },
        {
            id: 3,
            text_content: "العناوين",
            icone: "location-arrow",
            navi: 'Address_page'
        },
        {
            id: 4,
            text_content: "قائمة الطلبات",
            icone: "shopping-bag",
            // navi: 'ss'
        },
        {
            id: 5,
            text_content: "تغيير اللغة",
            icone: "language",
            navi: 'Choose_language_page'
        },
        {
            id: 6,
            text_content: "الشكاوي والإقتراحات",
            icone: "question-circle",
            navi: 'Suggests'
        },
        {
            id: 7,
            text_content: "الشروط والأحكام",
            icone: "info-circle",
            // navi: 'ss'
        }
    ]


const Days = [
    {
        day: "السبت"
    },
    {
        day: "الاحد"
    },
    {
        day: "الاثنين"
    },
    {
        day: "الثلاثاء"
    },
    {
        day: "الاربعاء"
    },
    {
        day: "الخميس"
    },
    {
        day: "الجمعة"
    }
]



const orders_Data = [
    {
        statues: "done",
        orders_table: {
            photo: images.type_oil,
            order_id: "1",
            name_oil_order: "زيت طعام 3 كيلو",
            amount_oil_order: "15",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"

        }

    },
    {
        statues: "done",
        orders_table: {
            photo: images.cars_oils,
            name_oil_order: "زيت طعام 3 كيلو",
            order_id: "2",
            amount_oil_order: "3",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"


        }

    },
    {
        statues: "Waiting",
        orders_table: {
            photo: images.cars_oil_for_3K,
            name_oil_order: "زيت طعام 3 كيلو",
            order_id: "3",
            amount_oil_order: "51",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"

        }

    },
    {
        statues: "Waiting",
        orders_table: {
            photo: images.type_oil,
            name_oil_order: "زيت طعام 3 كيلو",
            order_id: "4",
            amount_oil_order: "52",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"
        }

    }, {
        statues: "Waiting",
        orders_table: {
            photo: images.type_oil,
            order_id: "5",
            name_oil_order: "زيت طعام 3 كيلو",
            amount_oil_order: "15",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"
        }

    },
    {
        statues: "done",
        orders_table: {
            photo: images.cars_oils,
            name_oil_order: "زيت طعام 3 كيلو",
            order_id: "6",
            amount_oil_order: "3",
            time_date: "10/2/2023",
            place_recieve: "قسم ثان -طنطا",
            num_points: "300",
            time_date_recive: "10/12/2023"

        }

    },
]
const Coupons_flatListData =[
    {
        company_logo:images.food_oil,
        company_name:"ماكدونالز",
        isUsed : true ,
        numOfPoints : 100
            },   {
                company_logo:images.Vodafone_logo,
                company_name:"ماكدونالز",
                isUsed : true ,
                numOfPoints : 100
                    },   {
                        company_logo:images.Vodafone_logo,
                        company_name:"ماكدونالز",
                        isUsed : true ,
                        numOfPoints : 100
                            },
                    {
                        company_logo:images.Mac_logo,
                        company_name:"ماكدونالز",
                        isUsed : false ,
                        numOfPoints : 100
                            },
                                
        ]

export {
    categories,
    Types_services,
    Oils,
    Voluntary_dataset,
    Share_The_Good_Dataset,
    money_archives_data,
    CartData,
    ProfilePagedata,
    Days,
    orders_Data,
<<<<<<< HEAD
    Coupons_flatListData
=======
    Copones
>>>>>>> 9aa0a6d81de8e1a243c4de24c46c32aedbaa8dcb
}