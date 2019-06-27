export class Company {
    constructor(
        public Id: string,
        public Name: string,
        public Creator: {
            Gamertag: string,
            Xuid: null
        },
        public PeakMembershipCount: number,
        public SuspendedUntilDate: {
            ISO8601Date: string
        },
        public Members: [{
            Player: {
                Gamertag: string,
                Xuid: null
            },
            Role: number,
            JoinedDate: {
                ISO8601Date: string
            },
            LastModifiedDate: {
                ISO8601Date: string
            }
        }],
        public CreatedDate: {
            ISO8601Date: string
        },
        public LastModifiedDate: {
            ISO8601Date: string
        }
    ) {}
}
