function make_album(artist: string, title: string, number: number = 1): {
    name: string;
    album: string;
    track: number;
} {
    return {
        name: artist,
        album: title,
        track: number
    }
}
console.log(make_album('Justin Bieber', 'Purpose', 3))
console.log(make_album('Michael Jackson', 'Thriller'))