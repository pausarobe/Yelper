import axios from 'axios'

const token ='Bearer RmHQV-aiyyC-8L0UnKViDsgcCxXiTpIFvV2tfqO5TM4l6poX81umJNu8pctONiOpdMD1JAC27_LD0NeNNfS1_q_nXe9es8bAYol8MXOL_Up4OAMDc8vfmCo6rXPkWXYx'

const statisId={
    "reviews": [
        {
            "url": "https://www.yelp.com/biz/kibuka-barcelona?hrid=ZH-A-VqiT8G4EmKdrt4nzA&adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "text": "Loved it. Super busy and fresh! We had the salmon, and a couple of the noodle dishes. Not large portions so if your hungry add some great looking sushi!",
            "rating": 5,
            "user": {
                "image_url": null,
                "name": "Willie S."
            },
            "time_created": "2017-08-01 13:39:54"
        },
        {
            "url": "https://www.yelp.com/biz/kibuka-barcelona?hrid=YUMcSeefX5f0cbrA8KzQKg&adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "text": "This will sound odd for a sushi place review but, if you like south american desserts come to this place (yes, go figure). Starting from the end of the...",
            "rating": 4,
            "user": {
                "image_url": "https://s3-media4.fl.yelpcdn.com/photo/Znjd1UyRUzFeUi6pAwYmYQ/o.jpg",
                "name": "Gui G."
            },
            "time_created": "2017-05-20 13:56:41"
        },
        {
            "url": "https://www.yelp.com/biz/kibuka-barcelona?hrid=MCvQgq7ByFKUu43sOxDA3g&adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "text": "Mediocre food, horrid service.\n\nFood:\nThe menu boasts a variety of Japanese fusion sushi rolls with different ethnic themes, such as a Thai roll, a Greek...",
            "rating": 1,
            "user": {
                "image_url": "https://s3-media2.fl.yelpcdn.com/photo/yhX2Um8x-lzlRzrv0I4GFA/o.jpg",
                "name": "Rachel M."
            },
            "time_created": "2017-02-19 05:04:44"
        }
    ],
    "total": 66,
    "possible_languages": [
        "fr",
        "de",
        "en",
        "nb",
        "es"
    ]}
let staticbusinesses={
    "businesses": [
        {
            "id": "avana-sushi-boston",
            "name": "Avana Sushi",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/y8RWhhblmgUTajfeg1E23g/o.jpg",
            "is_closed": true,
            "url": "https://www.yelp.com/biz/avana-sushi-boston?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 834,
            "categories": [
                {
                    "alias": "japanese",
                    "title": "Japanese"
                },
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 42.3515433311481,
                "longitude": -71.0609420250346
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$",
            "location": {
                "address1": "42 Beach val00e8ncia",
                "address2": "",
                "address3": "",
                "city": "Boston",
                "zip_code": "02111",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "42 Beach St",
                    "Boston, MA 02111"
                ]
            },
            "phone": "+16178187782",
            "display_phone": "(617) 818-7782",
            "distance": 941.1159606919999
        },
        {
            "id": "fuji-at-ink-block-boston",
            "name": "Fuji at Ink Block",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/LzzBsnkSyyHO0C_uzyY-DQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/fuji-at-ink-block-boston?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 188,
            "categories": [
                {
                    "alias": "japanese",
                    "title": "Japanese"
                },
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "cocktailbars",
                    "title": "Cocktail Bars"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 42.345077,
                "longitude": -71.063505
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "352 Harrison Ave",
                "address2": "Ste B",
                "address3": null,
                "city": "Boston",
                "zip_code": "02118",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "352 Harrison Ave",
                    "Ste B",
                    "Boston, MA 02118"
                ]
            },
            "phone": "+16179363282",
            "display_phone": "(617) 936-3282",
            "distance": 706.2499593498
        },
        {
            "id": "douzo-boston",
            "name": "Douzo",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/6NmCl9jJRNy3E8B4DC5NcA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/douzo-boston?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 891,
            "categories": [
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "japanese",
                    "title": "Japanese"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 42.3468979763336,
                "longitude": -71.0755712773849
            },
            "transactions": [
                "delivery"
            ],
            "price": "$$$",
            "location": {
                "address1": "131 Dartmouth St",
                "address2": null,
                "address3": "",
                "city": "Boston",
                "zip_code": "02116",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "131 Dartmouth St",
                    "Boston, MA 02116"
                ]
            },
            "phone": "+16178598886",
            "display_phone": "(617) 859-8886",
            "distance": 370.742368328
        },
        {
            "id": "o-ya-boston",
            "name": "O Ya",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/twwtpCru5XgOyVCdECSO1w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/o-ya-boston?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 597,
            "categories": [
                {
                    "alias": "japanese",
                    "title": "Japanese"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 42.3514083135866,
                "longitude": -71.056866645813
            },
            "transactions": [
                "restaurant_reservation"
            ],
            "price": "$$$$",
            "location": {
                "address1": "9 East St Pl",
                "address2": "",
                "address3": "",
                "city": "Boston",
                "zip_code": "02111",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "9 East St Pl",
                    "Boston, MA 02111"
                ]
            },
            "phone": "+16176549900",
            "display_phone": "(617) 654-9900",
            "distance": 1246.016528138
        },
        {
            "id": "oppa-sushi-boston-2",
            "name": "Oppa Sushi",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/06h4_oaVqOfSphKiuzB43w/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/oppa-sushi-boston-2?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 150,
            "categories": [
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "japanese",
                    "title": "Japanese"
                },
                {
                    "alias": "seafood",
                    "title": "Seafood"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 42.350904,
                "longitude": -71.1313152
            },
            "transactions": [
                "pickup",
                "delivery",
                "restaurant_reservation"
            ],
            "price": "$$",
            "location": {
                "address1": "185 Harvard Ave",
                "address2": "",
                "address3": "",
                "city": "Boston",
                "zip_code": "02134",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "185 Harvard Ave",
                    "Boston, MA 02134"
                ]
            },
            "phone": "+16172023808",
            "display_phone": "(617) 202-3808",
            "distance": 4948.493100258
        },
        {
            "id": "irashai-sushi-and-teriyaki-boston",
            "name": "Irashai Sushi and Teriyaki",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/dIoQyu8QOG10bbo6a6mLSQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/irashai-sushi-and-teriyaki-boston?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 351,
            "categories": [
                {
                    "alias": "japanese",
                    "title": "Japanese"
                },
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 42.35105,
                "longitude": -71.06256
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "8 Kneeland St",
                "address2": "",
                "address3": "",
                "city": "Boston",
                "zip_code": "02111",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "8 Kneeland St",
                    "Boston, MA 02111"
                ]
            },
            "phone": "+16173506888",
            "display_phone": "(617) 350-6888",
            "distance": 787.6257697412
        },
        {
            "id": "love-art-sushi-boston",
            "name": "Love Art Sushi",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/ZQTNR9Rp0ENVo3GeTUBeDQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/love-art-sushi-boston?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 136,
            "categories": [
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 42.34662,
                "longitude": -71.08747
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "1 Haviland St",
                "address2": "",
                "address3": null,
                "city": "Boston",
                "zip_code": "02115",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "1 Haviland St",
                    "Boston, MA 02115"
                ]
            },
            "phone": "+16179826953",
            "display_phone": "(617) 982-6953",
            "distance": 1340.5499644079998
        },
        {
            "id": "oishii-boston-boston",
            "name": "Oishii Boston",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/-RxSocFATVnAwe0RgIRmWg/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/oishii-boston-boston?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 609,
            "categories": [
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "japanese",
                    "title": "Japanese"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 42.343216559683,
                "longitude": -71.066379535192
            },
            "transactions": [
                "restaurant_reservation"
            ],
            "price": "$$$$",
            "location": {
                "address1": "1166 Washington St",
                "address2": null,
                "address3": "",
                "city": "Boston",
                "zip_code": "02118",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "1166 Washington St",
                    "Boston, MA 02118"
                ]
            },
            "phone": "+16174828868",
            "display_phone": "(617) 482-8868",
            "distance": 651.7370913044
        },
        {
            "id": "pabu-boston-boston-3",
            "name": "PABU Boston",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/otNRYsYwD9iUwSRrel8nUw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/pabu-boston-boston-3?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 192,
            "categories": [
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "izakaya",
                    "title": "Izakaya"
                },
                {
                    "alias": "venues",
                    "title": "Venues & Event Spaces"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 42.3562862,
                "longitude": -71.0594073
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "3 Franklin St",
                "address2": "",
                "address3": null,
                "city": "Boston",
                "zip_code": "02110",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "3 Franklin St",
                    "Boston, MA 02110"
                ]
            },
            "phone": "+18573277228",
            "display_phone": "(857) 327-7228",
            "distance": 1351.556079734
        },
        {
            "id": "fins-sushi-and-grill-boston",
            "name": "Fin's Sushi and Grill",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/xpn0UwYESbolGbZhoYstow/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/fins-sushi-and-grill-boston?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 327,
            "categories": [
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "japanese",
                    "title": "Japanese"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 42.34957,
                "longitude": -71.09527
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "636 Beacon St",
                "address2": "",
                "address3": "",
                "city": "Boston",
                "zip_code": "02215",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "636 Beacon St",
                    "Boston, MA 02215"
                ]
            },
            "phone": "+16172678888",
            "display_phone": "(617) 267-8888",
            "distance": 1984.55923034
        },
        {
            "id": "crudo-boston",
            "name": "Crudo",
            "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/-jf8eCGGawIiEv0q_LO_uw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/crudo-boston?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 148,
            "categories": [
                {
                    "alias": "japanese",
                    "title": "Japanese"
                },
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "asianfusion",
                    "title": "Asian Fusion"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 42.3636849645937,
                "longitude": -71.0559069509264
            },
            "transactions": [],
            "price": "$$$",
            "location": {
                "address1": "78 Salem St",
                "address2": "",
                "address3": "",
                "city": "Boston",
                "zip_code": "02113",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "78 Salem St",
                    "Boston, MA 02113"
                ]
            },
            "phone": "+16173676500",
            "display_phone": "(617) 367-6500",
            "distance": 2165.8819588
        },
        {
            "id": "yoki-express-boston",
            "name": "Yoki Express",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/KSVhrSAIH8SQTedqb5Eaug/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/yoki-express-boston?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 46,
            "categories": [
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "japanese",
                    "title": "Japanese"
                },
                {
                    "alias": "poke",
                    "title": "Poke"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 42.3508518924201,
                "longitude": -71.0462842608361
            },
            "transactions": [
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "53 Boston Wharf Rd",
                "address2": "",
                "address3": null,
                "city": "Boston",
                "zip_code": "02210",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "53 Boston Wharf Rd",
                    "Boston, MA 02210"
                ]
            },
            "phone": "+18572637418",
            "display_phone": "(857) 263-7418",
            "distance": 2135.32381088
        },
        {
            "id": "laughing-monk-cafe-boston",
            "name": "Laughing Monk Cafe",
            "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/uFZoKyX3WXzI-wcarGRI_A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/laughing-monk-cafe-boston?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 66,
            "categories": [
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "thai",
                    "title": "Thai"
                },
                {
                    "alias": "asianfusion",
                    "title": "Asian Fusion"
                }
            ],
            "rating": 4.5,
            "coordinates": {
                "latitude": 42.3340845,
                "longitude": -71.1053358
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "737 Huntington Ave",
                "address2": null,
                "address3": "",
                "city": "Boston",
                "zip_code": "02115",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "737 Huntington Ave",
                    "Boston, MA 02115"
                ]
            },
            "phone": "+16172328000",
            "display_phone": "(617) 232-8000",
            "distance": 3203.6840089459997
        },
        {
            "id": "q-restaurant-boston",
            "name": "Q Restaurant",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/jkO_YpeQOQAowJLPId0wSQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/q-restaurant-boston?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 745,
            "categories": [
                {
                    "alias": "chinese",
                    "title": "Chinese"
                },
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "hotpot",
                    "title": "Hot Pot"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 42.3517075922991,
                "longitude": -71.0625610949003
            },
            "transactions": [
                "delivery"
            ],
            "price": "$$",
            "location": {
                "address1": "660 Washington St",
                "address2": "",
                "address3": "",
                "city": "Boston",
                "zip_code": "02111",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "660 Washington St",
                    "Boston, MA 02111"
                ]
            },
            "phone": "+18573503968",
            "display_phone": "(857) 350-3968",
            "distance": 832.887523824
        },
        {
            "id": "sushi-station-boston",
            "name": "Sushi Station",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/0v0SEuT4BFtIx0TaCiC17Q/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sushi-station-boston?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 159,
            "categories": [
                {
                    "alias": "japanese",
                    "title": "Japanese"
                },
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 42.332906,
                "longitude": -71.101709
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "1562 Tremont St",
                "address2": "Ste 1",
                "address3": "",
                "city": "Boston",
                "zip_code": "02120",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "1562 Tremont St",
                    "Ste 1",
                    "Boston, MA 02120"
                ]
            },
            "phone": "+16177380888",
            "display_phone": "(617) 738-0888",
            "distance": 3004.7410996279996
        },
        {
            "id": "state-street-sushi-boston",
            "name": "State Street Sushi",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/XA2CRUjJFDec5iJdO8wl7A/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/state-street-sushi-boston?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 6,
            "categories": [
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "japanese",
                    "title": "Japanese"
                },
                {
                    "alias": "salad",
                    "title": "Salad"
                }
            ],
            "rating": 5,
            "coordinates": {
                "latitude": 42.35924,
                "longitude": -71.05532
            },
            "transactions": [
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "92 State St",
                "address2": "",
                "address3": null,
                "city": "Boston",
                "zip_code": "02109",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "92 State St",
                    "Boston, MA 02109"
                ]
            },
            "phone": "+18572335083",
            "display_phone": "(857) 233-5083",
            "distance": 1820.58357774
        },
        {
            "id": "new-sushi-boston-5",
            "name": "New Sushi",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/mi5obvXNiRsEAOnr0tBNaw/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/new-sushi-boston-5?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 71,
            "categories": [
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "poke",
                    "title": "Poke"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 42.36106,
                "longitude": -71.06318
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "106 Cambridge St",
                "address2": null,
                "address3": "",
                "city": "Boston",
                "zip_code": "02114",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "106 Cambridge St",
                    "Boston, MA 02114"
                ]
            },
            "phone": "+18572770981",
            "display_phone": "(857) 277-0981",
            "distance": 1610.436926144
        },
        {
            "id": "sakanaya-boston",
            "name": "Sakanaya",
            "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/JIHmZRWRYTzHSWpgk2NzUQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/sakanaya-boston?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 118,
            "categories": [
                {
                    "alias": "seafood",
                    "title": "Seafood"
                },
                {
                    "alias": "japanese",
                    "title": "Japanese"
                },
                {
                    "alias": "seafoodmarkets",
                    "title": "Seafood Markets"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 42.352581779668,
                "longitude": -71.130359172821
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "75 Linden St",
                "address2": "",
                "address3": "",
                "city": "Boston",
                "zip_code": "02134",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "75 Linden St",
                    "Boston, MA 02134"
                ]
            },
            "phone": "+16172540009",
            "display_phone": "(617) 254-0009",
            "distance": 4886.20649237
        },
        {
            "id": "cafe-sushi-cambridge",
            "name": "Cafe Sushi",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/e2qCbCkkpXHw07wlKjn7cQ/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/cafe-sushi-cambridge?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 530,
            "categories": [
                {
                    "alias": "sushi",
                    "title": "Sushi Bars"
                },
                {
                    "alias": "japanese",
                    "title": "Japanese"
                }
            ],
            "rating": 4,
            "coordinates": {
                "latitude": 42.3707199,
                "longitude": -71.1132889
            },
            "transactions": [],
            "price": "$$",
            "location": {
                "address1": "1105 Massachusetts Ave",
                "address2": "",
                "address3": "",
                "city": "Cambridge",
                "zip_code": "02138",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "1105 Massachusetts Ave",
                    "Cambridge, MA 02138"
                ]
            },
            "phone": "+16174920434",
            "display_phone": "(617) 492-0434",
            "distance": 4300.524696992
        },
        {
            "id": "umai-boston",
            "name": "Umai",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/5oPS4KJv-T3NulzXcZVmow/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/umai-boston?adjust_creative=Vacw_PM1GrG1l8yK3yFyCQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=Vacw_PM1GrG1l8yK3yFyCQ",
            "review_count": 171,
            "categories": [
                {
                    "alias": "japanese",
                    "title": "Japanese"
                }
            ],
            "rating": 3.5,
            "coordinates": {
                "latitude": 42.34971,
                "longitude": -71.08115
            },
            "transactions": [
                "delivery",
                "pickup"
            ],
            "price": "$$",
            "location": {
                "address1": "224 Newbury St",
                "address2": "",
                "address3": "",
                "city": "Boston",
                "zip_code": "02116",
                "country": "US",
                "state": "MA",
                "display_address": [
                    "224 Newbury St",
                    "Boston, MA 02116"
                ]
            },
            "phone": "+16172622228",
            "display_phone": "(617) 262-2228",
            "distance": 841.68240599
        }
    ],
    "total": 498,
    "region": {
        "center": {
            "longitude": -71.0712432861,
            "latitude": 42.3478416945
        }
    }}

export function getYelpData (query){
	const url= `https://yelp-api-proxy.herokuapp.com/businesses/search?term=${query}&location=Barcelona`
    return axios.get(url,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data.businesses)
}

export function getYelpDataById (id){
  const url= `https://yelp-api-proxy.herokuapp.com/businesses/${id}/reviews`
    return axios.get(url,{
        headers: {
           Authorization: `${token}`
        }
    })
    .then(response => response.data.reviews)
}

export function getYelpDataStatic(){
  return staticbusinesses.businesses
}

export function getYelpDataStaticById(){
  return statisId.reviews
} 

    