export interface Abilities {
    slot: string;
    displayName: string;
    description: string;
    displayIcon: string | null;
}

export interface LegendsData {
    displayName: string;
    description: string;
    displayIcon: string;
    fullPortrait: string;
    role: string;
    abilities: Abilities[];
    video: string | null;
}
