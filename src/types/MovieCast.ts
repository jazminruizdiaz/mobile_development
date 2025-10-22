export type CastMember = {
    id: number;
    name: string;
    character: string;
    profile_path: string | null
}

export type MovieCast = {
    id: number;
    cast: CastMember[];
}