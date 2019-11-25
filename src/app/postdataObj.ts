export class Bill{
    Revstreams: number;
    customer_name: string;
    customer_phone: number;
    customer_email: string;
    narration: string;
    quantity: number;
    due_date: Date;
    generated_by: string;
}


export interface Bills {
    id: number;
    Revstreams: number;
    customer_name: string;
    customer_email: string;
    narration: string;
    subtotal: number;
    quantity: number;
    status: string;
    bill_id: string;
}

export interface RevenueStreams {
    id: number;
    name: string;
    revenue_description: string;
    Merchant_Owner: number;
    price: number;
    Industrys: string;
}