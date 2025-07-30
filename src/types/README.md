# Types Organization

This directory contains all TypeScript interfaces and types organized by domain for better maintainability.

## Structure

```
types/
├── index.ts          # Re-exports all types for easy importing
├── kit.ts           # Kit registration and kit type interfaces
├── tenant.ts        # Multi-tenant configuration interfaces
├── user.ts          # User and patient information interfaces
├── result.ts        # Test result interfaces
└── README.md        # This documentation
```

## Usage

### Importing Types

```typescript
// Import all types (recommended)
import { Kit, TenantFeatures, PatientInfo } from '@/types';

// Import specific domain types (for focused imports)
import { TenantConfig, TenantFeatures } from '@/types/tenant';
import { Kit, KitType } from '@/types/kit';
```

### Adding New Types

1. **Determine the domain** - Does it relate to kits, users, tenants, or results?
2. **Add to appropriate file** - Add the interface to the relevant domain file
3. **Export from index.ts** - Add the export to `index.ts` for easy access
4. **Update documentation** - Update this README if adding a new domain

## Type Categories

### Kit Types (`kit.ts`)
- `Kit` - Complete kit information with tenant config
- `KitType` - Kit type definition with panels and description

### Tenant Types (`tenant.ts`)
- `TenantConfig` - Complete tenant configuration
- `TenantFeatures` - Feature flags for post-registration routing

### User Types (`user.ts`)
- `RegisteredTo` - Patient information from registration
- `PatientInfo` - Form data structure for patient info

### Result Types (`result.ts`)
- `Result` - Lab test result structure

## Backward Compatibility

The root `types.ts` file re-exports all types from this directory, maintaining compatibility with existing imports throughout the codebase. 