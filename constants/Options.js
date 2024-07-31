export const SelectTravelerList=[
    {
        id:1,
        title:'Just Me',
        description:'A solo Traveler',
        icon:'🗿',
        people:'1 Person'
    },
    {
        id:2,
        title:'Me and My Partner',
        description:'A couple',
        icon:'👫',
        people:'2 People'
    },
    {
        id:3,
        title:'Me and My Family',
        description:'A family of 3 or more',
        icon:'👨‍👩‍👧‍👦',
        people:'3 to 5 People'

    },
    {
        id:4,
        title:'Me and My Friends',
        description:'A group of friends',
        icon:'👨👦‍👦',
        people:'4 to 10 People'
    }
]


export const selectBudget=[
    {
        id:1,
        title:'Cheap',
        description:'Stay Conscious on the cost',
        icon:'💵'
    },
    {
        id:2,
        title:'Moderate',
        description:'All Costs on an Average',
        icon:'💳'
    },
    {
        id:3,
        title:'Luxury',
        description:'Costly Tour',
        icon:'💰'
    }
]



export const AI_PROMPT= "Generate Travel Plan for Location: {location}, for {totalDays} Days and {totalNights} Night for {traveler} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to sit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for {totalDays} days and {totalNights} night with each day plan with best time to visit in JSON format"