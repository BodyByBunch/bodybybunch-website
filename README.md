# Next.js App Template

A modern, feature-based Next.js template with TypeScript, Tailwind CSS, Shadcn/ui, and best practices for scalable applications.

## ✨ Features

- **Next.js 15** with App Router
- **TypeScript** with strict mode
- **Tailwind CSS 4** for styling
- **Shadcn/ui** for beautiful, accessible components
- **Feature-based architecture** for scalability
- **Typed API layer** for external integrations
- **ESLint & Prettier** for code quality
- **Import sorting** for consistent code organization
- **Bun** as package manager (with npm fallback)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. **Clone the template:**
   ```bash
   git clone <your-template-repo> my-app
   cd my-app
   ```

2. **Install dependencies:**
   ```bash
   # Using Bun (recommended)
   bun install
   
   # Or using npm
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start the development server:**
   ```bash
   bun dev
   # Or npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Shadcn/ui Components

This template comes pre-configured with Shadcn/ui for beautiful, accessible components.

### Adding New Components

```bash
# Add a new component
bun run ui:add button
bun run ui:add card
bun run ui:add input

# Or using npm
npm run ui:add button
```

### Available Scripts

```bash
bun ui:add <component>    # Add a Shadcn/ui component
bun ui:init               # Re-initialize Shadcn/ui (if needed)
```

### Using Components

```tsx
import { Button, Card, Input } from '@/components/ui';

export function MyForm() {
  return (
    <Card>
      <Input placeholder="Enter name..." />
      <Button>Submit</Button>
    </Card>
  );
}
```

### Customizing Components

Shadcn/ui components are copied to your project and can be customized:

```tsx
// src/components/ui/button.tsx
// Edit this file to customize the button component
```

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── api/                 # API route handlers
│
├── components/              # Shared UI components
│   ├── ui/                  # Shadcn/ui components
│   │   └── index.ts         # Barrel exports
│   └── layout/              # Layout components
│
├── features/                # Domain-specific modules
│   ├── auth/                # Authentication feature
│   └── users/               # User management feature
│       ├── components/      # Feature-specific UI
│       ├── hooks.ts         # Feature hooks
│       ├── types.ts         # Feature types
│       └── index.ts         # Feature exports
│
├── lib/                     # Framework utilities
│   ├── api/                 # API client layer
│   ├── utils.ts             # General utilities (cn function)
│   └── env.ts               # Environment variables
│
├── providers/               # React context providers
├── styles/                  # Global styles
└── types/                   # Global TypeScript types
```

## 🛠 Development

### Available Scripts

```bash
# Development
bun dev              # Start development server
bun build            # Build for production
bun start            # Start production server

# Code Quality
bun lint             # Run ESLint
bun lint:fix         # Fix ESLint issues
bun format           # Format code with Prettier
bun type-check       # Run TypeScript type checking

# Shadcn/ui
bun ui:add           # Add a component
bun ui:init          # Initialize Shadcn/ui
```

### Adding New Features

1. **Create a feature directory:**
   ```bash
   mkdir -p src/features/my-feature/{components,hooks,types}
   ```

2. **Add feature-specific components:**
   ```tsx
   // src/features/my-feature/components/MyComponent.tsx
   import { Button } from '@/components/ui';
   
   export function MyComponent() {
     return <Button>My Feature Component</Button>;
   }
   ```

3. **Create feature hooks:**
   ```tsx
   // src/features/my-feature/hooks.ts
   export function useMyFeature() {
     // Feature logic here
   }
   ```

4. **Export from feature index:**
   ```tsx
   // src/features/my-feature/index.ts
   export { MyComponent } from './components/MyComponent';
   export { useMyFeature } from './hooks';
   ```

### API Integration

The template includes a typed API client for external API integration:

```tsx
// src/lib/api/my-api.ts
import { apiClient } from './client';

export interface MyData {
  id: string;
  name: string;
}

export async function fetchMyData(): Promise<MyData[]> {
  return apiClient.get<MyData[]>('/my-endpoint');
}
```

### Environment Variables

Environment variables are centralized and typed in `src/lib/env.ts`:

```tsx
import { env } from '@/lib/env';

// Type-safe access to environment variables
const apiUrl = env.NEXT_PUBLIC_API_BASE_URL;
```

## 🎨 Styling and Components

### Shadcn/ui Components

The template uses Shadcn/ui with the "new-york" style and zinc base color:

```tsx
// Example component with Shadcn/ui
import { Button, Card, Input } from '@/components/ui';

<Card>
  <Input placeholder="Enter text..." />
  <Button variant="outline">Action</Button>
</Card>
```

### Tailwind CSS

The template uses Tailwind CSS 4 with CSS variables for theming:

```tsx
// Example component with Tailwind
<div className="flex items-center justify-between p-4 bg-background rounded-lg border">
  <h2 className="text-xl font-semibold text-foreground">Title</h2>
  <Button variant="outline">Action</Button>
</div>
```

### Custom Styling

Add custom styles in `src/styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .my-custom-class {
    @apply bg-primary text-primary-foreground px-4 py-2 rounded;
  }
}
```

## 🔧 Configuration

### Shadcn/ui Configuration

The template includes `components.json` for Shadcn/ui:

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "css": "src/styles/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui"
  }
}
```

### TypeScript

Strict TypeScript configuration with path aliases:

```json
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/features/*": ["src/features/*"]
    }
  }
}
```

### ESLint

Extended Next.js configuration with import ordering:

```javascript
// eslint.config.mjs
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "import/order": ["error", {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true }
      }]
    }
  }
];
```

## 📚 Best Practices

### Import Organization

```tsx
// External libraries first
import React from 'react';
import { NextPage } from 'next';

// Internal imports (aliased)
import { Button } from '@/components/ui';
import { useMyFeature } from '@/features/my-feature';
import { apiClient } from '@/lib/api';

// Relative imports last
import './component.css';
```

### Component Structure

```tsx
// Feature component example
export function MyFeatureComponent() {
  const { data, isLoading } = useMyFeature();
  
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div className="space-y-4">
      {/* Component JSX */}
    </div>
  );
}
```

### Type Definitions

- Domain types live in their feature folder
- Shared types go in `src/types/`
- API response types are co-located with API functions

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The template works with any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🧪 Testing

Add testing libraries as needed:

```bash
# Add testing dependencies
bun add -D jest @testing-library/react @testing-library/jest-dom
```

Create test files alongside components:

```tsx
// src/features/my-feature/components/__tests__/MyComponent.test.tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from '../MyComponent';

test('renders component', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

## 🤝 Contributing

1. Fork the template
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🆘 Support

- Check the [documentation](docs/)
- Open an [issue](../../issues)
- Join our [discussions](../../discussions)

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Shadcn/ui. 