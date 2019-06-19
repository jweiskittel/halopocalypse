export class ArenaStats {

    constructor(
        public Results: [{
            Id: string,
            ResultCode: number,
            Result: {
                ArenaStats: {
                    ArenaPlaylistStats: [{
                        PlaylistId: string,
                        MeasurementMatchesLeft: number,
                        HighestCSR: {
                            Tier: number,
                            DesignationId: number,
                            Csr: number,
                            PercentToNextTier: number,
                            Rank: number
                        },
                        Csr: {
                            Tier: number,
                            DesignationId: number,
                            Csr: number,
                            PercentToNextTier: number,
                            Rank: number
                        },
                        CsrPercentile: number,
                        TotalKills: number,
                        TotalHeadshots: number,
                        TotalWeaponDamage: number,
                        TotalShotsFired: number,
                        TotalShotsLanded: number,
                        WeaponWithMostKills: {
                            WeaponId: {
                                StockId: number,
                                Attachments: [number]
                            },
                            TotalShotsFired: number,
                            TotalShotsLanded: number,
                            TotalHeadshots: number,
                            TotalKills: number,
                            TotalDamageDealt: number,
                            TotalPossessionTime: string
                        },
                        TotalMeleeKills: number,
                        TotalMeleeDamage: number,
                        TotalAssassinations: number,
                        TotalGroundPoundKills: number,
                        TotalGroundPoundDamage: number,
                        TotalShoulderBashKills: number,
                        TotalShoulderBashDamage: number,
                        TotalGrenadeDamage: number,
                        TotalPowerWeaponKills: number,
                        TotalPowerWeaponDamage: number,
                        TotalPowerWeaponGrabs: number,
                        TotalPowerWeaponPossessionTime: number,
                        TotalDeaths: number,
                        TotalAssists: number,
                        TotalGamesCompleted: number,
                        TotalGamesWon: number,
                        TotalGamesLost: number,
                        TotalGamesTied: number,
                        TotalTimePlayed: string,
                        TotalGrenadeKills: number,
                        MedalAwards: [{
                            MedalId: number,
                            Count: number
                        }],
                        DestroyedEnemyVehicles: [{
                            Enemy: {
                                BaseId: number,
                                Attachments: [number]
                            },
                            TotalKills: number
                        }],
                        EnemyKills: [{
                            Enemy: {
                                BaseId: number,
                                Attachments: [number]
                            },
                            TotalKills: number
                        }],
                        WeaponStats: [{
                            WeaponId: {
                                StockId: number,
                                Attachments: [number]
                            },
                            TotalShotsFired: number,
                            TotalShotsLanded: number,
                            TotalHeadshots: number,
                            TotalKills: number,
                            TotalDamageDealt: number,
                            TotalPossessionTime: string
                        }],
                        Impulses: [{
                            Id: number,
                            Count: number
                        }],
                        TotalSpartanKills: number
                    }],
                    HighestCsrAttained: {
                        Tier: number,
                        DesignationId: number,
                        Csr: number,
                        PercentToNextTier: number,
                        Rank: number
                    },
                    ArenaGameBaseVariantStats: [{
                        FlexibleStats: {
                            MedalStatCounts: [{
                                Id: string,
                                Count: number
                            }],
                            ImpulseStatCounts: [{
                                Id: string,
                                Count: number
                            }],
                            MedalTimelapses: [{
                                Id: string,
                                Timelapse: string
                            }]
                        },
                        GameBaseVariantId: string,
                        TotalKills: number,
                        TotalHeadshots: number,
                        TotalWeaponDamage: number,
                        TotalShotsFired: number,
                        TotalShotsLanded: number,
                        WeaponWithMostKills: {
                            WeaponId: {
                                StockId: number,
                                Attachements: [number]
                            },
                            TotalShotsFired: number,
                            TotalShotsLanded: number,
                            TotalHeadshots: number,
                            TotalKills: number,
                            TotalDamageDealt: number,
                            TotalPossessionTime: string
                        },
                        TotalMeleeKills: number,
                        TotalMeleeDamage: number,
                        TotalAssassinations: number,
                        TotalGroundPoundKills: number,
                        TotalGroundPoundDamage: number,
                        TotalShoulderBashKills: number,
                        TotalShoulderBashDamage: number,
                        TotalGrenadeDamage: number,
                        TotalPowerWeaponKills: number,
                        TotalPowerWeaponDamage: number,
                        TotalPowerWeaponGrabs: number,
                        TotalPowerWeaponPossessionTime: string,
                        TotalDeaths: number,
                        TotalAssists: number,
                        TotalGamesCompleted: number,
                        TotalGamesWon: number,
                        TotalGamesLost: number,
                        TotalGamesTied: number,
                        TotalTimePlayed: string,
                        TotalGrenadeKills: number,
                        MedalAwards: [{
                            MedalId: number,
                            Count: number
                        }],
                        DestroyedEnemyVehicles: [{
                            Enemy: {
                                BaseId: number,
                                Attachments: [number]
                            },
                            TotalKills: number
                        }],
                        EnemyKills: [{
                            Enemy: {
                                BaseId: number,
                                Attachments: [number]
                            },
                            TotalKills: number
                        }],
                        WeaponStats: [{
                            WeaponId: {
                                StockId: number,
                                Attachments: [number]
                            },
                            TotalShotsFired: number,
                            TotalShotsLanded: number,
                            TotalHeadshots: number,
                            TotalKills: number,
                            TotalDamageDealt: number,
                            TotalPossessionTime: string
                        }],
                        Impulses: [{
                            Id: number,
                            Count: number
                        }],
                        TotalSpartanKills: number
                    }],
                    TopGameBaseVariants: [{
                        GameBaseVariantRank: number,
                        NumberOfMatchesCompleted: number,
                        GameBaseVariantId: string,
                        NumberOfMatchesWon: number
                    }],
                    HighestCsrPlaylistId: string,
                    HighestCsrSeasonId: string,
                    ArenaPlaylistStatsSeasonId: string,
                    TotalKills: number,
                    TotalHeadshots: number,
                    TotalWeaponDamage: number,
                    TotalShotsFired: number,
                    TotalShotsLanded: number,
                    WeaponWithMostKills: {
                        WeaponId: {
                            StockId: number,
                            Attachments: [number]
                        },
                        TotalShotsFired: number,
                        TotalShotsLanded: number,
                        TotalHeadshots: number,
                        TotalKills: number,
                        TotalDamageDealt: number,
                        TotalPossessionTime: string
                    },
                    TotalMeleeKills: number,
                    TotalMeleeDamage: number,
                    TotalAssassinations: number,
                    TotalGroundPoundKills: number,
                    TotalGroundPoundDamage: number,
                    TotalShoulderBashKills: number,
                    TotalShoulderBashDamage: number,
                    TotalGrenadeDamage: number,
                    TotalPowerWeaponKills: number,
                    TotalPowerWeaponDamage: number,
                    TotalPowerWeaponGrabs: number,
                    TotalPowerWeaponPossessionTime: string,
                    TotalDeaths: number,
                    TotalAssists: number,
                    TotalGamesCompleted: number,
                    TotalGamesWon: number,
                    TotalGamesLost: number,
                    TotalGamesTied: number,
                    TotalTimePlayed: string,
                    TotalGrenadeKills: number,
                    MedalAwards: [{
                        MedalId: number,
                        Count: number
                    }],
                    DestroyedEnemyVehicles: [{
                        Enemy: {
                            BaseId: number,
                            Attachments: [number]
                        },
                        TotalKills: number
                    }],
                    EnemyKills: [{
                        Enemy: {
                            BaseId: number,
                            Attachments: [number]
                        },
                        TotalKills: number
                    }],
                    WeaponStats: [{
                        WeaponId: {
                            StockId: number,
                            Attachments: [number]
                        },
                        TotalShotsFired: number,
                        TotalShotsLanded: number,
                        TotalHeadshots: number,
                        TotalKills: number,
                        TotalDamageDealt: number,
                        TotalPossessionTime: string
                    }],
                    Impulses: [{
                        Id: number,
                        Count: number
                    }],
                    TotalSpartanKills: number
                },
                PlayerId: {
                    GamerTag: string,
                    Xuid: null
                },
                SpartanRank: number,
                Xp: number
            }
        }],
        Links: null
    ) {}

}
