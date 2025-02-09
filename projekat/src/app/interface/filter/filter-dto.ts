export interface Filter {
    state : string | null,
    city : string | null,
    minPrice : number | null,
    maxPrice : number | null,
    minArea : number | null,
    maxArea : number | null,
    floors : number | null,
    garage : boolean,
    pool : boolean,
    sort : string | null
}
