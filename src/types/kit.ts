import { TenantConfig } from './tenant';
import { RegisteredTo } from './user';

export interface Kit {
  id: number;
  kit_id: string;
  kit_type: KitType;
  tenant?: TenantConfig | null;
  kit_status: string;
  sample_status: string;
  shipment_to_customer?: object;
  registered_to?: RegisteredTo;
  sample?: object;
  created_at: string;
  updated_at: string;
}

export interface KitType {
  code: string;
  name: string;
  description: string;
  panels: string[];
} 