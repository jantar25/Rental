type OwnerDetails = {
    names: string,
    line1: number | string,
    line2: number | string,
    email: any | string,
    photo: string | any,
}

export type Logo = {
        id : number | string,
        image: string | any,
    }


export type Residence = {
    _id: number | string,
    title: string,
    address: string |any,
    coordinates: string |any,
    price: number | string,
    FrontImage: string | any,
    OtherImages: string[] | any[],
    Bedroom: number,
    BathRooms: number,
    Kitchen: number,
    Livingrooms:number,
    Floors: number,
    Avaiable: boolean,
    District: string,
    Description: string | any,
    OwnerDetails: OwnerDetails,
}

export type District = {
    id: number | string,
    district: string,
    townImage: string | any,
}
