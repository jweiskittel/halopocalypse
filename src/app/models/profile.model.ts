export class Profile {
    constructor(
        public Gamertag: string,
        public LastModifiedUtc: {
            ISO8601Date: string
        },
        public FirstModifiedUTC: {
            ISO8601Date: string
        },
        public ServiceTag: string,
        public Company: {
            Id: string,
            Name: string
        }) {}
}
