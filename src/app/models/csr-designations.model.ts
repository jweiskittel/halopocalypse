export class CSRDesignations {

    constructor(
        public name: string,
        public bannerImageUrl: string,
        public tiers: [{
            iconImageUrl: string,
            id: number,
            contentId: string
        }],
        public id: number,
        public contentId: string
    ) {}

}
