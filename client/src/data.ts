import { Accordions,Logo,District,Comment,Member } from "./Types/Types"
import { MdVerifiedUser } from 'react-icons/md';

const Logo1 = require("./Images/image1.png")
const Logo2 = require("./Images/image2.png")
const Logo3 = require("./Images/image3.png")
const Logo4 = require("./Images/image4.png")
const Logo5 = require("./Images/image5.png")
const Logo6 = require("./Images/image6.png")

const District1 = require("./Images/district1.jpg")
const District2 = require("./Images/district2.jpg")
const District3 = require("./Images/district3.jpg")
const AllDistrict = require("./Images/all.jpg")

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
        townImage:District1
    },
    {
        id:2,
        district:'Gasabo',
        townImage:District2
    },
    {
        id:3,
        district:'Kicukiro',
        townImage:District3
    },
    {
        id:4,
        district:'All',
        townImage:AllDistrict
    },
]

export const ClientsComments : Comment[] = [
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


export const OurMembers : Member[] = [
    {
        id:1,
        names:'Glody Bulambo',
        image:Client1,
        title:"CEO and Founder",
        comment:"It never too late to build something amazing"
    },
    {
        id:2,
        names:'Karen Anne',
        image:Client4,
        title:"Chief Director",
        comment:"We work as we live"
    },
    {
        id:3,
        names:'Angel Marie',
        image:Client5,
        title:"Chief Commissioners",
        comment:"Nothing worth a wonderfull day on work"
    },
]


export const Accodions : Accordions[] = [
    {
        id:1,
        intro:'Best interest rate on the market',
        paragraph:'We charge 5% on transaction which is the best interest rate on market that you can find compared to any other compagny or commissioner interest charge',
    },
    {
        id:2,
        intro:'Prevent unstable prices',
        paragraph:'we guarantee no price changes on your property due to various unexpected costs that may come',
    },
    {
        id:3,
        intro:'Best price on the market',
        paragraph:'Price we provide is the best for you, We consider everybody possibilities and give accordindly an adequate residence',
    },
    {
        id:4,
        intro:'Security of your data',
        paragraph:'Every personal Information you entered is confidential and protected',
    },
]