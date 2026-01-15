// ...existing code...
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// ...existing code...


const HederApp=()=>{
    return(
        <div className='app-header'>
            <div className='app-logp'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdn1Gs_VIL7n-v95M1Paz1cAUf0O_YDLjqt762Dd7xZ1adjvabC84vPtk&s" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resObj = [
  {
    "type": "restaurant",
    "info": {
      "resId": 19297804,
      "name": "Mehfil",
      "image": {
        "url": "https://b.zmtcdn.com/data/dish_photos/c68/5a386e7affea7b37382906efa04dbc68.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/4/19297804/8000ad385c12727b6ffee751a4c5a21c_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.1",
        "rating_text": "4.1",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "294.6K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "4.1",
            "reviewCount": "621",
            "reviewTextSmall": "621 Reviews",
            "subtext": "621 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "4.1",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.1",
            "reviewCount": "294K",
            "reviewTextSmall": "294K Reviews",
            "subtext": "294K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.1",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹1,000 for two"
      },
      "cfo": {
        "text": "₹400 for one"
      },
      "locality": {
        "name": "Dilsukhnagar, Hyderabad",
        "address": "D 16-11-739/2-9, Ground Floor, 1st & 2nd Floor, Dilsukhnagar, Hyderabad",
        "localityUrl": "hyderabad/dilsukhnagar-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
          "name": "Biryani"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          "url": "https://www.zomato.com/hyderabad/restaurants/kebab/",
          "name": "Kebab"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
          "name": "Chinese"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
          "name": "Mughlai"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA3M1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/grilled-chicken/",
          "name": "Grilled Chicken"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDlcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/hyderabadi/",
          "name": "Hyderabadi"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          "url": "https://www.zomato.com/hyderabad/restaurants/desserts/",
          "name": "Desserts"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹400 for one"
      }
    },
    "order": {
      "deliveryTime": "47 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/hyderabad/mehfil-dilsukhnagar/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/hyderabad/mehfil-dilsukhnagar/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      "clickActionDeeplink": ""
    },
    "distance": "4.9 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"4425d7f9-547c-446e-b759-f78ff2948f88\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19297804\",\"element_type\":\"listing\",\"rank\":1}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [],
    "isDisabled": false,
    "bottomContainers": []
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 92136,
      "name": "Hotel Nayaab - Since 1986",
      "image": {
        "url": "https://b.zmtcdn.com/data/dish_photos/37b/8767db46f4cf4c936232db5a9c03237b.jpeg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/6/92136/9353567af7744b6201fef94337241954_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.2",
        "rating_text": "4.2",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "24.7K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "4.4",
            "reviewCount": "582",
            "reviewTextSmall": "582 Reviews",
            "subtext": "582 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "4.4",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.0",
            "reviewCount": "24.2K",
            "reviewTextSmall": "24.2K Reviews",
            "subtext": "24.2K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.0",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹850 for two"
      },
      "cfo": {
        "text": "₹350 for one"
      },
      "locality": {
        "name": "Charminar, Hyderabad",
        "address": "22-8-111 and 112, Nassir Complex, Nayapul Road, Opposite MI Xiaomi Showroom, Chatta Bazar, Darulshifa, Hyderabad",
        "localityUrl": "hyderabad/charminar-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
          "name": "Mughlai"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
          "name": "Chinese"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          "url": "https://www.zomato.com/hyderabad/restaurants/desserts/",
          "name": "Desserts"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹350 for one"
      }
    },
    "order": {
      "deliveryTime": "32 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/hyderabad/hotel-nayaab-since-1986-charminar/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/hyderabad/hotel-nayaab-since-1986-charminar/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      "clickActionDeeplink": ""
    },
    "distance": "412 m",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"4425d7f9-547c-446e-b759-f78ff2948f88\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"92136\",\"element_type\":\"listing\",\"rank\":2}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "₹100 OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": []
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 19503249,
      "name": "City Diamond Haleem",
      "image": {
        "url": "https://b.zmtcdn.com/data/dish_photos/044/3b22ab963b38cf7559227c8cf27d9044.jpeg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/9/19503249/882c4fe3c41aa6d75f5419736471482d_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "3.9",
        "rating_text": "3.9",
        "rating_subtitle": "Good",
        "rating_color": "9ACD32",
        "votes": "13.1K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.7",
            "reviewCount": "18",
            "reviewTextSmall": "18 Reviews",
            "subtext": "18 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.7",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "500"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.1",
            "reviewCount": "13.1K",
            "reviewTextSmall": "13.1K Reviews",
            "subtext": "13.1K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.1",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹500 for two"
      },
      "cfo": {
        "text": "₹200 for one"
      },
      "locality": {
        "name": "Mehdipatnam, Hyderabad",
        "address": "12-1-487/33/A & 33/2, Asif Nagar, Jhirra Road, Mehdipatnam, Hyderabad",
        "localityUrl": "hyderabad/mehdipatnam-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
          "name": "Biryani"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
          "name": "Mughlai"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
          "name": "Chinese"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹200 for one"
      }
    },
    "order": {
      "deliveryTime": "60 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/hyderabad/city-diamond-haleem-mehdipatnam/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/hyderabad/city-diamond-haleem-mehdipatnam/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      "clickActionDeeplink": ""
    },
    "distance": "3.5 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"4425d7f9-547c-446e-b759-f78ff2948f88\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19503249\",\"element_type\":\"listing\",\"rank\":3}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "₹100 OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": []
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 93761,
      "name": "Hotel Rumaan",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/1/93761/e4683618d51d3d7e12c027e2be79954f_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/1/93761/50f01c5b53eb9ca1a1fde1dedb2b5bc6_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.1",
        "rating_text": "4.1",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "58.8K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.9",
            "reviewCount": "776",
            "reviewTextSmall": "776 Reviews",
            "subtext": "776 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.9",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "600"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.2",
            "reviewCount": "58K",
            "reviewTextSmall": "58K Reviews",
            "subtext": "58K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.2",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹500 for two"
      },
      "cfo": {
        "text": "₹200 for one"
      },
      "locality": {
        "name": "Chandrayanagutta, Hyderabad",
        "address": "18/9/73-7/1, Circle 6, Chandrayanagutta, Hyderabad",
        "localityUrl": "hyderabad/chandrayanagutta-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDlcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/hyderabadi/",
          "name": "Hyderabadi"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
          "name": "Biryani"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
          "name": "Mughlai"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
          "name": "Chinese"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹200 for one"
      }
    },
    "order": {
      "deliveryTime": "",
      "isServiceable": false,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Currently not accepting orders",
        "clickUrl": "/hyderabad/hotel-rumaan-chandrayanagutta/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/hyderabad/hotel-rumaan-chandrayanagutta/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      "clickActionDeeplink": ""
    },
    "distance": "4.3 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"4425d7f9-547c-446e-b759-f78ff2948f88\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"93761\",\"element_type\":\"listing\",\"rank\":4}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "₹100 OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": []
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 21750762,
      "name": "Grand Cafe",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/2/21750762/98a770adddaa9142adb1841c22eca8af_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/2/21750762/98a770adddaa9142adb1841c22eca8af_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.3",
        "rating_text": "4.3",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "1,830",
        "subtext": "REVIEW",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "",
            "reviewCount": "0",
            "reviewTextSmall": "0 Reviews",
            "subtext": "Does not offer Dining",
            "color": "",
            "ratingV2": "-",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "100"
            },
            "textColorV2": {
              "type": "green",
              "tint": "500"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.3",
            "reviewCount": "1,830",
            "reviewTextSmall": "1,830 Reviews",
            "subtext": "1,830 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.3",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹250 for two"
      },
      "cfo": {
        "text": "₹100 for one"
      },
      "locality": {
        "name": "Charminar, Hyderabad",
        "address": "22-1-59/A, Jaam Bagh, Darulshifa, Circle 9, Kali Khabar Road, Charminar, Hyderabad",
        "localityUrl": "hyderabad/charminar-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
          "name": "Biryani"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/street-food/",
          "name": "Street Food"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          "url": "https://www.zomato.com/hyderabad/restaurants/beverages/",
          "name": "Beverages"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹100 for one"
      }
    },
    "order": {
      "deliveryTime": "33 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/hyderabad/grand-cafe-charminar/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/hyderabad/grand-cafe-charminar/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      "clickActionDeeplink": ""
    },
    "distance": "1.3 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"4425d7f9-547c-446e-b759-f78ff2948f88\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21750762\",\"element_type\":\"listing\",\"rank\":5}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "₹100 OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": []
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 20692800,
      "name": "Bismillah Hotel",
      "image": {
        "url": "https://b.zmtcdn.com/data/dish_photos/501/bcdf9ea3c3e161bf6bae8293ca67b501.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/0/20692800/406472fac3aae8106ea96544bebc2462_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "3.8",
        "rating_text": "3.8",
        "rating_subtitle": "Good",
        "rating_color": "9ACD32",
        "votes": "16.8K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.2",
            "reviewCount": "12",
            "reviewTextSmall": "12 Reviews",
            "subtext": "12 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.2",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "yellow",
              "tint": "400"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.3",
            "reviewCount": "16.8K",
            "reviewTextSmall": "16.8K Reviews",
            "subtext": "16.8K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.3",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹500 for two"
      },
      "cfo": {
        "text": "₹200 for one"
      },
      "locality": {
        "name": "Falaknuma, Hyderabad",
        "address": "19-4-278/A/9, Nawab Sahab Kunta, Near Saleheen Colony, Falaknuma, Hyderabad",
        "localityUrl": "hyderabad/falaknuma-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
          "name": "Mughlai"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
          "name": "Biryani"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹200 for one"
      }
    },
    "order": {
      "deliveryTime": "39 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/hyderabad/bismillah-hotel-1-falaknuma/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/hyderabad/bismillah-hotel-1-falaknuma/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      "clickActionDeeplink": ""
    },
    "distance": "3.6 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"4425d7f9-547c-446e-b759-f78ff2948f88\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20692800\",\"element_type\":\"listing\",\"rank\":6}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "₹100 OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": []
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 20088466,
      "name": "Jumera Hotel",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/6/20088466/e204f984e998528488d17bc78ecf1dd5_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/6/20088466/0ac50f261ce85eaccd0321238372a90d_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.3",
        "rating_text": "4.3",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "21.8K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "4.0",
            "reviewCount": "80",
            "reviewTextSmall": "80 Reviews",
            "subtext": "80 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "4.0",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.5",
            "reviewCount": "21.7K",
            "reviewTextSmall": "21.7K Reviews",
            "subtext": "21.7K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.5",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "800"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹300 for two"
      },
      "cfo": {
        "text": "₹150 for one"
      },
      "locality": {
        "name": "Chandrayanagutta, Hyderabad",
        "address": "18-10-78/B, Opposite Government School, Barkas, Chandrayanagutta, Hyderabad",
        "localityUrl": "hyderabad/chandrayanagutta-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
          "name": "Biryani"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹150 for one"
      }
    },
    "order": {
      "deliveryTime": "50 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/hyderabad/jumera-hotel-4-chandrayanagutta/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/hyderabad/jumera-hotel-4-chandrayanagutta/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      "clickActionDeeplink": ""
    },
    "distance": "5.3 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"4425d7f9-547c-446e-b759-f78ff2948f88\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20088466\",\"element_type\":\"listing\",\"rank\":7}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "₹100 OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": []
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 21434239,
      "name": "Raju Gari Biryani",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/9/21434239/5056503a694ae80dcba884e99a4b10e1_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/9/21434239/5056503a694ae80dcba884e99a4b10e1_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "3.8",
        "rating_text": "3.8",
        "rating_subtitle": "Good",
        "rating_color": "9ACD32",
        "votes": "22.5K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "",
            "reviewCount": "0",
            "reviewTextSmall": "0 Reviews",
            "subtext": "Does not offer Dining",
            "color": "",
            "ratingV2": "-",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "100"
            },
            "textColorV2": {
              "type": "green",
              "tint": "500"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "3.8",
            "reviewCount": "22.5K",
            "reviewTextSmall": "22.5K Reviews",
            "subtext": "22.5K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "3.8",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "600"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹300 for two"
      },
      "cfo": {
        "text": "₹150 for one"
      },
      "locality": {
        "name": "Kothapet, Hyderabad",
        "address": "Door 1-7-207, Chaitanyapuri, Kothapet, Hyderabad",
        "localityUrl": "hyderabad/kothapet-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
          "name": "Biryani"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
          "name": "Chinese"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          "name": "North Indian"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹150 for one"
      }
    },
    "order": {
      "deliveryTime": "44 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/hyderabad/raju-gari-biryani-kothapet/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/hyderabad/raju-gari-biryani-kothapet/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      "clickActionDeeplink": ""
    },
    "distance": "6 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"4425d7f9-547c-446e-b759-f78ff2948f88\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"21434239\",\"element_type\":\"listing\",\"rank\":8}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "₹100 OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": []
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 18421925,
      "name": "Sri Abhiruchi Biryani & Chinese Fast Food",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/5/18421925/383dc057d672e982befcc6bfeea518d0.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/5/18421925/57464c2713bed699d5ac40f0b17d3919_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.1",
        "rating_text": "4.1",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "41.4K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "4.0",
            "reviewCount": "705",
            "reviewTextSmall": "705 Reviews",
            "subtext": "705 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "4.0",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.2",
            "reviewCount": "40.7K",
            "reviewTextSmall": "40.7K Reviews",
            "subtext": "40.7K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.2",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹400 for two"
      },
      "cfo": {
        "text": "₹200 for one"
      },
      "locality": {
        "name": "Dilsukhnagar, Hyderabad",
        "address": "Shop 1, 16-11-477/6/1, Sai Towers Cellar, Dilsukhnagar, Hyderabad",
        "localityUrl": "hyderabad/dilsukhnagar-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
          "name": "Biryani"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
          "name": "Chinese"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/sea-food/",
          "name": "Seafood"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDlcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/hyderabadi/",
          "name": "Hyderabadi"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
          "url": "https://www.zomato.com/hyderabad/restaurants/sichuan/",
          "name": "Sichuan"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹200 for one"
      }
    },
    "order": {
      "deliveryTime": "42 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/hyderabad/sri-abhiruchi-biryani-chinese-fast-food-dilsukhnagar/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/hyderabad/sri-abhiruchi-biryani-chinese-fast-food-dilsukhnagar/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      "clickActionDeeplink": ""
    },
    "distance": "4.8 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"4425d7f9-547c-446e-b759-f78ff2948f88\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18421925\",\"element_type\":\"listing\",\"rank\":9}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "₹100 OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": []
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 19470170,
      "name": "Iqbal Cafe",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/0/19470170/242d60ee9d6d78b71dfe586c9d398664_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/0/19470170/4014e0fe9bcbc843b2b65bc5d14dd63c_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.1",
        "rating_text": "4.1",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "16.4K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.7",
            "reviewCount": "17",
            "reviewTextSmall": "17 Reviews",
            "subtext": "17 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.7",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "500"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.4",
            "reviewCount": "16.4K",
            "reviewTextSmall": "16.4K Reviews",
            "subtext": "16.4K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.4",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹300 for two"
      },
      "cfo": {
        "text": "₹150 for one"
      },
      "locality": {
        "name": "Charminar, Hyderabad",
        "address": "22-3-758 And 759, Purani Haveli, Charminar, Hyderabad",
        "localityUrl": "hyderabad/charminar-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDlcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/hyderabadi/",
          "name": "Hyderabadi"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
          "name": "Biryani"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹150 for one"
      }
    },
    "order": {
      "deliveryTime": "32 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/hyderabad/iqbal-cafe-1-charminar/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/hyderabad/iqbal-cafe-1-charminar/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      "clickActionDeeplink": ""
    },
    "distance": "725 m",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"4425d7f9-547c-446e-b759-f78ff2948f88\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19470170\",\"element_type\":\"listing\",\"rank\":10}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "₹100 OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": []
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 20878689,
      "name": "BLUE SEA DIAMOND MULTI CUISINE RESTAURANT",
      "image": {
        "url": "https://b.zmtcdn.com/data/dish_photos/0f2/d0fd75ca10eb2d70de0b1d7b72fe90f2.jpeg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/9/20878689/a025e66c5e065fd38020b2e296ee61a6_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.1",
        "rating_text": "4.1",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "14.8K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "",
            "reviewCount": "2",
            "reviewTextSmall": "2 Reviews",
            "subtext": "Does not offer Dining",
            "color": "",
            "ratingV2": "-",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "100"
            },
            "textColorV2": {
              "type": "green",
              "tint": "500"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.1",
            "reviewCount": "14.8K",
            "reviewTextSmall": "14.8K Reviews",
            "subtext": "14.8K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.1",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹400 for two"
      },
      "cfo": {
        "text": "₹200 for one"
      },
      "locality": {
        "name": "Chandrayanagutta, Hyderabad",
        "address": "Chandrayangutta, Chandrayanagutta, Hyderabad",
        "localityUrl": "hyderabad/chandrayanagutta-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
          "name": "Mughlai"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDlcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/hyderabadi/",
          "name": "Hyderabadi"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/chinese/",
          "name": "Chinese"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹200 for one"
      }
    },
    "order": {
      "deliveryTime": "40 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/hyderabad/blue-sea-diamond-multi-cuisine-restaurant-chandrayanagutta/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/hyderabad/blue-sea-diamond-multi-cuisine-restaurant-chandrayanagutta/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      "clickActionDeeplink": ""
    },
    "distance": "4.2 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"4425d7f9-547c-446e-b759-f78ff2948f88\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20878689\",\"element_type\":\"listing\",\"rank\":11}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "₹100 OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": []
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 20927956,
      "name": "Pista House Mandi",
      "image": {
        "url": "https://b.zmtcdn.com/data/dish_photos/176/96e55fad04927708042335e6d372e176.jpeg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/6/20927956/db481f0ea45fd33ebcb933ed52971c3f_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.1",
        "rating_text": "4.1",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "3,109",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "",
            "reviewCount": "0",
            "reviewTextSmall": "0 Reviews",
            "subtext": "Does not offer Dining",
            "color": "",
            "ratingV2": "-",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "100"
            },
            "textColorV2": {
              "type": "green",
              "tint": "500"
            },
            "newOnDining": false
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.1",
            "reviewCount": "3,109",
            "reviewTextSmall": "3,109 Reviews",
            "subtext": "3,109 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.1",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Ratings",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹200 for two"
      },
      "cfo": {
        "text": "₹100 for one"
      },
      "locality": {
        "name": "Charminar, Hyderabad",
        "address": "20-4-137/1 - 8, Shah Ali Banda, Circle 5, Charminar, Hyderabad",
        "localityUrl": "hyderabad/charminar-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTk2XCJdfSJd",
          "url": "https://www.zomato.com/hyderabad/restaurants/mandi/",
          "name": "Mandi"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/biryani/",
          "name": "Biryani"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNFwiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/arabian/",
          "name": "Arabian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTM3XCJdfSJd",
          "url": "https://www.zomato.com/hyderabad/restaurants/middle-eastern/",
          "name": "Middle Eastern"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
          "url": "https://www.zomato.com/hyderabad/restaurants/mughlai/",
          "name": "Mughlai"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          "url": "https://www.zomato.com/hyderabad/restaurants/kebab/",
          "name": "Kebab"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹100 for one"
      }
    },
    "order": {
      "deliveryTime": "33 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/hyderabad/pista-house-mandi-charminar/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/hyderabad/pista-house-mandi-charminar/order?contextual_menu_params=eyJkaXNoX3NlYXJjaCI6eyJ0aXRsZSI6IkJlc3QgaW4gQmlyeWFuaSIsImRpc2hfaWRzIjpbIjMwMzA4Il0sImN1aXNpbmVfaWRzIjpbXX19",
      "clickActionDeeplink": ""
    },
    "distance": "1.1 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"4425d7f9-547c-446e-b759-f78ff2948f88\",\"location_type\":\"delivery_cell\",\"location_id\":\"4308704762854899712\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20927956\",\"element_type\":\"listing\",\"rank\":12}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "₹100 OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": []
  }
];
const Cards=({res})=>{
    const {name,resId,image,rating,cuisine}=res.info;
    console.log(name)
    return(
        <div className='res-cards'>
            <img className ="card-img" src={image.url} />
            <h5 className='card-title'> {name} </h5>
            <h5 style ={{margin:10,marginRight:-10}}>{cuisine.map(x =>x.name).join(', ')}</h5>
            <h4 style ={{margin:20,paddingLeft:42}}>{rating.aggregate_rating} star</h4>
        </div>
    )
}

const BodyApp=()=>{
    return(
        <div className='app-body'>
        <div className = 'res-search'>
        SEARCH
        </div>
        <div className='app-cards'>
            {resObj.map(x=><Cards key = {x.info.resId} res={x} />)}
           
            </div>
        </div>
    )
}
const AppLayout = ()=>{
    return(
        <div className='app-root'>
            <HederApp />
            <BodyApp />
        </div>
    )

}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);