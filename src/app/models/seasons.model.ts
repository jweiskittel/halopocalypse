export class Seasons {

    constructor(
        public playlists: [{
            name: string,
            description: string,
            isRanked: boolean,
            imageUrl: string,
            gameMode: string,
            isActive: boolean,
            id: string,
            contentId: string
        }],
        public iconUrl: string,
        public name: string,
        public startDate: string,
        public endDate: string,
        public isActive: boolean,
        public id: string,
        public contentId: string
    ) {}

}
