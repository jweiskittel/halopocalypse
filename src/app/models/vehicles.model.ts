export class Vehicles {

    constructor(
        public name: string,
        public description: string,
        public largeIconImageUrl: string,
        public smallIconImageUrl: string,
        public isUsableByPlayer: boolean,
        public id: number,
        public contentId: string
    ) {}

}
