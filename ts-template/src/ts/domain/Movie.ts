import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly genre: Array<string>,
        readonly time: number | string,
        readonly img: string,
        readonly imax: boolean,
        readonly originalName: string
    ) { }
}