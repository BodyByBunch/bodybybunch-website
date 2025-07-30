# Types Organization

This directory contains all TypeScript interfaces and types organized by domain for better maintainability.

## Structure

```
types/
├── index.ts          # Re-exports all types for easy importing
├── user.ts          # User and client information interfaces
└── README.md        # This documentation
```

## Usage

### Importing Types

```typescript
// Import all types (recommended)
import { User, PatientInfo } from '@/types';

// Import specific domain types (for focused imports)
import { RegisteredTo, PatientInfo } from '@/types/user';
```

### Adding New Types

1. **Determine the domain** - Does it relate to users, clients, or general app functionality?
2. **Add to appropriate file** - Add the interface to the relevant domain file
3. **Export from index.ts** - Add the export to `index.ts` for easy access
4. **Update documentation** - Update this README if adding a new domain

## Type Categories

### User Types (`user.ts`)
- `RegisteredTo` - Client registration information
- `PatientInfo` - Client demographic information

### Common Types (`index.ts`)
- `User` - Basic user information
- `AuthState` - Authentication state management
- `ApiResponse` - Standard API response format
- `FormField` - Form field configuration
- `NavItem` - Navigation menu items

## Backward Compatibility

The root `index.ts` file re-exports all types from this directory, maintaining compatibility with existing imports throughout the codebase. 