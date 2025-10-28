import Image from "./Image";
import City from "./City";

export default interface Trip {
        cities: City[],
        date?: string,
        description?: string,
        images?: Image[]
    }