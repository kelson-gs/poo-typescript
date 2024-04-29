interface Location {
    latitude: number
    longetude: number
    readonly numberLocation: number
}

const getLocation = (location: Location): string => {
    return `${location.latitude} - ${location.longetude}`
}

const location: Location = {
    latitude: 135,
    longetude: 516,
    numberLocation: 5555
}
getLocation(location)


class LocationMap implements Location {
    latitude: number;
    longetude: number;
    numberLocation: number = 0;

    constructor(latitude: number, longetude: number){
        this.latitude = latitude;
        this.longetude = longetude
    }

    public getLocation(): string {
        return 'any'
    }
}

getLocation(new LocationMap(123,321))

export {}