import type { PaginatedResponse } from './common/pagination.interface';

export interface Stock {
  date: string;
  last_change_date: string | null;
  supplier_article: string | null;
  tech_size: string | null;
  barcode: number;
  quantity: number;
  is_supply: boolean | null;
  is_realization: boolean | null;
  quantity_full: number | null;
  warehouse_name: string;
  in_way_to_client: number | null;
  in_way_from_client: number | null;
  nm_id: number;
  subject: string | null;
  category: string | null;
  brand: string | null;
  sc_code: number | null;
  price: string | null;
  discount: string | null;
}

export type StockResponse = PaginatedResponse<Stock>;
