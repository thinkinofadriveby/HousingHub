import { IPropertyBase } from "./ipropertybase";

export class Property implements IPropertyBase {
    Id!: number;
    SellRent!: number;
    Name!: string;
    PType!: string;
    BHK!: number;  
    FType!: string;
    Price!: number;
    BuiltArea!: number;
    CarpetArea?: number;
    Address!: string;
    Address2?: string;
    City!: string;
    FloorNo?: string;
    TotalFloor?: string;
    ReadyToMove!: number;
    AOP?: string;
    MainEntrance?: number;
    Security?: number;
    Gated?: number;
    Maintenance?: number;
    Possession?: string;
    Image?: string;
    Description!: string;
    PostedOn!: string;
    PostedBy!: number;
}