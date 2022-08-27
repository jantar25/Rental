import { Accordions,Logo,District,Comment,Member } from "./Types/Types"
import i18next from './i18next/i18next';

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
        comment:i18next.t('sotherComment') as string
    },
    {
        id:2,
        names:'Thedy Uwase',
        image:Client4,
        comment:i18next.t('thedyComment') as string
    },
    {
        id:3,
        names:'Uwakabebe Mwiza',
        image:Client5,
        comment:i18next.t('uwakabebeComment') as string
    },
    {
        id:4,
        names:'Gigs Masaro',
        image:Client2,
        comment:i18next.t('gigsComment') as string
    },
    {
        id:5,
        names:'Chris Ndiwayesu',
        image:Client3,
        comment:i18next.t('chrisComment') as string
    },
    {
        id:6,
        names:'Penelope kabaye',
        image:Client6,
        comment:i18next.t('penelopeComment') as string
    },
]


export const OurMembers : Member[] = [
    {
        id:1,
        names:'Glody Bulambo',
        image:Client1,
        title:"CEO and Founder",
        comment:i18next.t('member1Comment') as string
    },
    {
        id:2,
        names:'Karen Anne',
        image:Client4,
        title:"Chief Director",
        comment:i18next.t('member2Comment') as string
    },
    {
        id:3,
        names:'Angel Marie',
        image:Client5,
        title:"Chief Commissioners",
        comment:i18next.t('member3Comment') as string
    },
]


export const Accodions : Accordions[] = [
    {
        id:1,
        intro:i18next.t('accordeon1Into') as string,
        paragraph:i18next.t('accordeon1Paragraph') as string,
    },
    {
        id:2,
        intro:i18next.t('accordeon2Into') as string,
        paragraph:i18next.t('accordeon2Paragraph') as string,
    },
    {
        id:3,
        intro:i18next.t('accordeon3Into') as string,
        paragraph:i18next.t('accordeon3Paragraph') as string,
    },
    {
        id:4,
        intro:i18next.t('accordeon4Into') as string,
        paragraph:i18next.t('accordeon4Paragraph') as string,
    },
]