


export interface Location {
    lat: number,
    long: number,
}

export interface Candidates {
    name: string,
    rating: number,
}


export interface Pusher {
    candidates: Candidates[],
    location: Location,
    date: Date
}

