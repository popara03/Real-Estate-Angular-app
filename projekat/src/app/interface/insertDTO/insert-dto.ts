import { Bathroom } from "../bathroom/bathroom";
import { Bedroom } from "../Bedroom/bedroom";
import { Kitchen } from "../Kitchen/kitchen";
import { Room } from "../Room/room";

export interface InsertDTO {
    title: string;
    image: string;
    description: string;
    cityId: number;
    stateId: number;
    address: string;
    price: number,
    priceFixed: false,
    ownerPhone: string,
    ownerEmail:string,
    floors: number
    gardenArea: number,
    bedrooms: Bedroom[];
    bathrooms: Bathroom[];
    kitchens: Kitchen[];
    garages: Room[];
    pools: Room[];
}