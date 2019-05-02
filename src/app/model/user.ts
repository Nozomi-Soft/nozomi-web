export class User {
    id: string;
    username: string;
    password: string;
    name: string;
    lastName: string;
    email: string;
    location: Location;
    roles: string[] = [];
    status: string;

    constructor() {
        this.location = new Location();
        this.status = "INACTIVE";
    }
    
}

export class Location {
    country: string = '';
    language: string = '';
}
