
import type { Kit } from '@/types/kit';
import type { Result } from '@/types/result';
import type { PatientInfo } from '@/types/user';
import type { PostRegistrationFlow, TenantConfig } from '@/types/tenant';


const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8001/v2/public';
const CLIENT_API_KEY = process.env.NEXT_PUBLIC_CLIENT_API_KEY;

// Helper function to get headers with authentication
function getAuthHeaders(): HeadersInit {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };
  
  if (CLIENT_API_KEY) {
    headers['X-API-Key'] = CLIENT_API_KEY;
  }
  
  return headers;
}

export async function getKitType(kitId: string): Promise<{ 
  tenant: TenantConfig | null;
  kit_type: {
    code: string;
    name: string;
    description: string;
    panels: string[];
  } | null;
}> {
  // Correct endpoint for getting kit information
  console.log(`🔍 Looking up kit type for Kit ID: ${kitId}`);
  console.log(`📡 API Endpoint: ${API_BASE_URL}/kits/${kitId}`);
  
  const response = await fetch(`${API_BASE_URL}/kits/${kitId}`, {
    headers: getAuthHeaders(),
  });
  
  if (!response.ok) {
    console.error(`❌ Failed to fetch kit type. Status: ${response.status} ${response.statusText}`);
    throw new Error('Failed to fetch kit type');
  }
  
  const kitData = await response.json();
  console.log('✅ Received kit data from backend:', JSON.stringify(kitData, null, 2));
  
  // Extract complete kit type information from nested structure
  const kitTypeInfo = {
    tenant: kitData.tenant || null,
    kit_type: kitData.kit_type ? {
      code: kitData.kit_type.code || '',
      name: kitData.kit_type.name || 'Unknown Kit',
      description: kitData.kit_type.description || '',
      panels: kitData.kit_type.panels || []
    } : null
  };
  
  console.log('📦 Extracted kit type info:', JSON.stringify(kitTypeInfo, null, 2));
  return kitTypeInfo;
}

export async function registerKit(data: { kitId: string; patientInfo: PatientInfo }): Promise<Kit> {
  // Transform camelCase to snake_case for backend API
  const backendPayload = {
    kit_id: data.kitId,
    registered_to: {
      first_name: data.patientInfo.firstName,
      last_name: data.patientInfo.lastName,
      date_of_birth: data.patientInfo.dateOfBirth,
      email: data.patientInfo.email,
      sex: data.patientInfo.sex,
      phone: data.patientInfo.phone,
    }
  };

  // Log the payload being sent to backend for debugging
  console.log('🚀 Sending kit registration data to backend:', JSON.stringify(backendPayload, null, 2));

  const response = await fetch(`${API_BASE_URL}/kits/register`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(backendPayload),
  });
  if (!response.ok) {
    throw new Error('Failed to register kit');
  }
  return response.json();
}

export async function getResults(kitId: string, dob: string): Promise<Result[]> {
  const response = await fetch(`${API_BASE_URL}/results/kit/${kitId}?dob=${dob}`, {
    headers: getAuthHeaders(),
  });
  if (!response.ok) {
    throw new Error('Failed to fetch results');
  }
  return response.json();
}
