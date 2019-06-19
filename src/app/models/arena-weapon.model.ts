export class ArenaWeapon {

    constructor(
        public WeaponId: {
            StockId: number,
            Attachments: [number]
        },
        public TotalShotsFired: number,
        public TotalShotsLanded: number,
        public TotalHeadshots: number,
        public TotalKills: number,
        public TotalDamageDealt: number,
        public TotalPossessionTime: string
    ) {}

}
