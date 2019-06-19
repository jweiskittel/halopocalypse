export class GameBaseVariants {

    constructor(
        public name: string,
        public internalName: string,
        public iconUrl: string,
        public supportedGameModes: [string],
        public id: string,
        public contentId: string
    ) {}

}