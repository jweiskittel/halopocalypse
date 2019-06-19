export class Weapon {
    constructor(
        public name: string,
        public description: string,
        public type: string,
        public largeIconImageUrl: string,
        public smallIconImageUrl: string,
        public isUsableByPlayer: boolean,
        public id: number,
        public contentId: string
    ) {}
}
