const owner = require("./Images/owner.jpg")

const Logo1 = require("./Images/image1.png")
const Logo2 = require("./Images/image2.png")
const Logo3 = require("./Images/image3.png")
const Logo4 = require("./Images/image4.png")
const Logo5 = require("./Images/image5.png")
const Logo6 = require("./Images/image6.png")

const House1 = require("./Images/house1.jpg")
const House2 = require("./Images/house2.jpg")
const House3 = require("./Images/house3.jpg")
const House4 = require("./Images/house4.png")
const House5 = require("./Images/house5.jpg")
const House6 = require("./Images/house6.jpg")

const District1 = require("./Images/district1.jpg")
const District2 = require("./Images/district2.jpg")
const District3 = require("./Images/district3.jpg")

const Client1 = require("./Images/client1.jpg")
const Client2 = require("./Images/client2.jpg")
const Client3 = require("./Images/client3.jpg")
const Client4 = require("./Images/client4.jpg")
const Client5 = require("./Images/client5.jpg")
const Client6 = require("./Images/client6.png")


export const logos = [
    {
    id:1,
    image:Logo1
    },
    {
    id:2,
    image:Logo2
    },
    {
    id:3,
    image:Logo3
    },
    {
    id:4,
    image:Logo4
    },
    {
    id:5,
    image:Logo5
    },
    {
    id:6,
    image:Logo6
    },  
];


export const residencesAvailables = [
    {
        id:1,
        title:'Gisozi Gheto',
        address: 'Cafe Gisozi/Rukeri No 503',
        coordinates: "27.2046° N, 77.4977° E",
        price: '40 000',
        FrontImage:House1,
        OtherImages:[House1,House2,House3,House4,House5,House6],
        Bedroom:1,
        BathRooms:0,
        Kitchen:0,
        Livingrooms:1,
        Floors:0,
        Avaiable:true,
        District:'Nyarugenge',
        Description:"An attractive good house for rent located in GISOZI with a nice view and an awesome garden which brings you a fresh air ",
        OwnerDetails:{
            names:"KAREKEZI Jean Marie",
            line1:"0786120934",
            line2:"0725868316",
            email:'jeanmari@gmail.com',
            photo:owner,
        }
    },
    {
        id:2,
        title:'Class Gheto House',
        address: 'ULK Gisozi/Ruhango No 503',
        coordinates: "27.2046° N, 77.4977° E",
        price: '70 000',
        FrontImage:House2,
        OtherImages:[House1,House2,House3,House4,House5,House6],
        Bedroom:1,
        BathRooms:0,
        Kitchen:0,
        Livingrooms:1,
        Floors:0,
        Avaiable:true,
        District:'Nyarugenge',
        Description:"An attractive good house for rent located in GISOZI with a nice view and an awesome garden which brings you a fresh air ",
        OwnerDetails:{
            names:"KILIMUMBALO Claude",
            line1:"0786120934",
            line2:"0725868316",
            email:'claude@gmail.com',
            photo:owner,
        }
    },
    {
        id:3,
        title:'Smart Gisozi House',
        address: 'Cafe Gisozi/Rukeri No 503',
        coordinates: "27.2046° N, 77.4977° E",
        price: '200 000',
        FrontImage:House3,
        OtherImages:[House1,House2,House3,House4,House5,House6],
        Bedroom:4,
        BathRooms:2,
        Kitchen:2,
        Livingrooms:1,
        Floors:1,
        Avaiable:false,
        District:'Gasabo',
        Description:"An attractive good house for rent located in GISOZI with a nice view and an awesome garden which brings you a fresh air ",
        OwnerDetails:{
            names:"BWIRA Chance",
            line1:"0786120934",
            line2:"0725868316",
            email:'bwirachance@gmail.com',
            photo:'',
        }
    },
    {
        id:4,
        title:'Green Garden House',
        address: 'ULK Gisozi/Ruhango No 503',
        coordinates: "27.2046° N, 77.4977° E",
        price: '250 000',
        FrontImage:House4,
        OtherImages:[House1,House2,House3,House4,House5,House6],
        Bedroom:3,
        BathRooms:1,
        Kitchen:2,
        Livingrooms:1,
        Floors:2,
        Avaiable:true,
        District:'Gasabo',
        Description:"An attractive good house for rent located in GISOZI with a nice view and an awesome garden which brings you a fresh air ",
        OwnerDetails:{
            names:"KILIMUMBALO Claude",
            line1:"0786120934",
            line2:"0725868316",
            email:'claude@gmail.com',
            photo:owner,
        } 
    },
    {
        id:5,
        title:'Smart Apartement',
        address: 'Cafe Gisozi/Rukeri No 503',
        coordinates: "27.2046° N, 77.4977° E",
        price: '100 000',
        FrontImage:House5,
        OtherImages:[House1,House2,House3,House4,House5,House6],
        Bedroom:4,
        BathRooms:2,
        Kitchen:2,
        Livingrooms:2,
        Floors:3,
        Avaiable:false,
        District:'Kicukiro',
        Description:"An attractive good house for rent located in GISOZI with a nice view and an awesome garden which brings you a fresh air ",
        OwnerDetails:{
            names:"KAREKEZI Jean Marie",
            line1:"0786120934",
            line2:"0725868316",
            email:'jeanmari@gmail.com',
            photo:owner,
        } 
    },
    {
        id:6,
        title:'Home House',
        address: 'Kibagabaga/Rukeri No 503',
        coordinates: "27.2046° N, 77.4977° E",
        price: '150 000',
        FrontImage:House6,
        OtherImages:[House1,House2,House3,House4,House5,House6], 
        Bedroom:3,
        BathRooms:2,
        Kitchen:1,
        Livingrooms:1,
        Floors:2,
        Avaiable:true,
        District:'Kicukiro',
        Description:"An attractive good house for rent located in GISOZI with a nice view and an awesome garden which brings you a fresh air ",
        OwnerDetails:{
            names:"BWIRA Chance",
            line1:"0786120934",
            line2:"0725868316",
            email:'bwirachance@gmail.com',
            photo:'',
        }
    }
]

export const districtResidences = [
    {
        id:1,
        district:'Nyarugenge',
        properties:2456,
        townImage:District1
    },
    {
        id:2,
        district:'Gasabo',
        properties:890,
        townImage:District2
    },
    {
        id:3,
        district:'Kicukiro',
        properties:449,
        townImage:District3
    },
]

export const ClientsComments = [
    {
        id:1,
        names:'Sother Ndimubanzi',
        image:Client1,
        comment:"Fell in love with the platform the moment I saw it. its clean and simple design was what sealed the deal for me."
    },
    {
        id:2,
        names:'Thedy Uwase',
        image:Client4,
        comment:"This platform just made my life easy as I usually shift places"
    },
    {
        id:3,
        names:'Uwakabebe Mwiza',
        image:Client5,
        comment:"I got a beautifull chip residence here,so far so good"
    },
    {
        id:4,
        names:'Gigs Masaro',
        image:Client2,
        comment:"Contacting support was simple and easy. I was suprise by how quickly they actually get back to you."
    },
    {
        id:5,
        names:'Chris Ndiwayesu',
        image:Client3,
        comment:"The resources availability, that's what caugh my attention about this platform"
    },
    {
        id:6,
        names:'Penelope kabaye',
        image:Client6,
        comment:"Easy and affordable way to find a residence"
    },
]