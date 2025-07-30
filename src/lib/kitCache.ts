import type { Kit } from '@/types/kit';

const CACHE_KEYS = {
  REGISTERED_KIT_DATA: 'registeredKitData',
  PATIENT_INFO: 'patientInfo',
  KIT_TYPE_DATA: 'kitTypeData'
} as const;

/**
 * Kit data caching utilities for the registration flow
 */
export class KitCache {
  /**
   * Store complete kit data after successful registration
   */
  static storeRegisteredKit(kitData: Kit): void {
    try {
      localStorage.setItem(CACHE_KEYS.REGISTERED_KIT_DATA, JSON.stringify(kitData));
      console.log('📦 Stored registered kit data in cache:', kitData.kit_id);
    } catch (error) {
      console.error('Failed to store kit data in cache:', error);
    }
  }

  /**
   * Retrieve stored kit data
   */
  static getRegisteredKit(): Kit | null {
    try {
      const stored = localStorage.getItem(CACHE_KEYS.REGISTERED_KIT_DATA);
      if (!stored) return null;
      
      const kitData = JSON.parse(stored);
      console.log('📦 Retrieved kit data from cache:', kitData.kit_id);
      return kitData;
    } catch (error) {
      console.error('Failed to retrieve kit data from cache:', error);
      return null;
    }
  }

  /**
   * Store kit type data during the registration flow
   */
  static storeKitTypeData(kitTypeData: {
    code: string;
    name: string;
    description: string;
    panels: string[];
  }): void {
    try {
      localStorage.setItem(CACHE_KEYS.KIT_TYPE_DATA, JSON.stringify(kitTypeData));
      console.log('📦 Stored kit type data in cache:', kitTypeData.name);
    } catch (error) {
      console.error('Failed to store kit type data in cache:', error);
    }
  }

  /**
   * Retrieve stored kit type data
   */
  static getKitTypeData(): {
    code: string;
    name: string;
    description: string;
    panels: string[];
  } | null {
    try {
      const stored = localStorage.getItem(CACHE_KEYS.KIT_TYPE_DATA);
      if (!stored) return null;
      
      const kitTypeData = JSON.parse(stored);
      console.log('📦 Retrieved kit type data from cache:', kitTypeData.name);
      return kitTypeData;
    } catch (error) {
      console.error('Failed to retrieve kit type data from cache:', error);
      return null;
    }
  }

  /**
   * Clear all kit-related cache data
   */
  static clearAll(): void {
    try {
      localStorage.removeItem(CACHE_KEYS.REGISTERED_KIT_DATA);
      localStorage.removeItem(CACHE_KEYS.PATIENT_INFO);
      localStorage.removeItem(CACHE_KEYS.KIT_TYPE_DATA);
      console.log('🗑️ Cleared all kit cache data');
    } catch (error) {
      console.error('Failed to clear kit cache data:', error);
    }
  }

  /**
   * Clear only the registered kit data (keep patient info for account creation)
   */
  static clearRegisteredKit(): void {
    try {
      localStorage.removeItem(CACHE_KEYS.REGISTERED_KIT_DATA);
      localStorage.removeItem(CACHE_KEYS.KIT_TYPE_DATA);
      console.log('🗑️ Cleared registered kit data from cache');
    } catch (error) {
      console.error('Failed to clear registered kit data from cache:', error);
    }
  }
} 