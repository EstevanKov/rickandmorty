import './location'


class Character{
    id: number;
    name: string;
    status: string;
    gender: string;
    image: string;
    Location: Location

    constructor(
        id: number,
        name: string,
        status: string,
        gender: string,
        image: string,
        Location: Location   
    ){
        this.id =id;
        this.name = name;
        this.status = status;
        this.gender = gender;
        this.image = image;
        this.Location = Location;
    }


}

export default Character;