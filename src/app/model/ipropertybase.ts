export interface IPropertyBase {
    Id : number | null;
    SellRent : number | null;
    Name : string | null;
    FType : string | null;
    PType : string | null;
    BHK: number | null;
    BuiltArea: number | null;
    City: string | null;
    ReadyToMove: number | null;
    Price : number | null;
    Image ?: string;
}