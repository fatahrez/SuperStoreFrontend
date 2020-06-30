export interface ProductBatch{
    id?: number;
    item: string;
    buying_price: number;
    quantity_bought: number;
    shop?: string;
    clerk: string;
    paid_for: boolean;
    date_received?: Date;
    supplier: string;


}
