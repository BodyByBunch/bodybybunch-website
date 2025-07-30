import type { PostRegistrationFlow } from '@/types/tenant';

export type NextStep =
  | 'externalRedirect'
  | 'forceAccount'
  | 'offerAccount'
  | 'guestSuccess'

export function decideNextStep(postRegFlow: PostRegistrationFlow | undefined | null): NextStep {
  console.log('🔍 decideNextStep called with:', postRegFlow);
  
  if (!postRegFlow) {
    console.log('⚠️ No post_registration_flow, defaulting to guestSuccess');
    return 'guestSuccess'
  }

  // Check for external redirect scenarios
  if (postRegFlow.existing_portal_redirect || postRegFlow.account_requirement === 'external_only') {
    console.log('🔄 External redirect detected:', {
      existing_portal_redirect: postRegFlow.existing_portal_redirect,
      account_requirement: postRegFlow.account_requirement
    });
    return 'externalRedirect'
  }

  // Check for required account scenarios
  if (postRegFlow.account_requirement === 'required') {
    return 'forceAccount'
  }

  // Check for hosted portal with account encouragement
  const isHostedPortal = postRegFlow.hosted_portal_preference === 'fully_hosted' || 
                        postRegFlow.hosted_portal_preference === 'white_label_hosted'
  
  if (isHostedPortal && postRegFlow.show_account_creation_cta) {
    return 'offerAccount'
  }

  // Default to guest success
  return 'guestSuccess'
} 