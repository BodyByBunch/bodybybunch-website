import { PatientInfo } from '@/types/user';

export interface PatientInvitePayload {
  email: string;
  organization_id: string;
  first_name?: string;
  last_name?: string;
  role?: string;
}

export interface PatientInviteResponse {
  success: boolean;
  message: string;
  invitation_id?: string;
}

export async function requestPatientInvite(payload: PatientInvitePayload): Promise<PatientInviteResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/invitations/workos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
} 