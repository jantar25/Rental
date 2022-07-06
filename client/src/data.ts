import { Logo } from "./Types/Types"
import { District } from "./Types/Types"

const Logo1 = require("./Images/image1.png")
const Logo2 = require("./Images/image2.png")
const Logo3 = require("./Images/image3.png")
const Logo4 = require("./Images/image4.png")
const Logo5 = require("./Images/image5.png")
const Logo6 = require("./Images/image6.png")

const District1 = require("./Images/district1.jpg")
const District2 = require("./Images/district2.jpg")
const District3 = require("./Images/district3.jpg")

const Client1 = require("./Images/client1.jpg")
const Client2 = require("./Images/client2.jpg")
const Client3 = require("./Images/client3.jpg")
const Client4 = require("./Images/client4.jpg")
const Client5 = require("./Images/client5.jpg")
const Client6 = require("./Images/client6.png")


export const logos : Logo[] = [
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



export const districtResidences : District[] = [
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
    {
        id:4,
        district:'All',
        properties:10490,
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