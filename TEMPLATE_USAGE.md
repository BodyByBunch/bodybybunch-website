# Next.js App Template - Usage Guide

## 🎯 What This Template Provides

This template is a production-ready starting point for Next.js applications with:

- **Modern Architecture**: Feature-based organization for scalability
- **Type Safety**: Full TypeScript support with strict mode
- **Shadcn/ui**: Beautiful, accessible components with Tailwind CSS
- **API Layer**: Typed API client for external integrations
- **Code Quality**: ESLint, Prettier, and import sorting
- **Developer Experience**: Hot reload, type checking, and formatting

## 🚀 How to Use This Template

### Option 1: Clone and Customize

```bash
# Clone the template
git clone <your-template-repo> my-app
cd my-app

# Install dependencies
bun install

# Start development
bun dev
```

### Option 2: Create as NPM Package (Recommended)

1. **Publish to NPM:**
   ```bash
   cd nextjs-template
   npm publish
   ```

2. **Use with npx:**
   ```bash
   npx create-nextjs-app my-app
   cd my-app
   bun install
   bun dev
   ```

### Option 3: Use as GitHub Template

1. **Create GitHub repository** with this template
2. **Use "Use this template"** button on GitHub
3. **Clone the new repository**
4. **Install and run**

## 🎨 Shadcn/ui Setup

This template comes pre-configured with Shadcn/ui. Here's how to use it:

### Adding Components

```bash
# Add individual components
bun run ui:add button
bun run ui:add card
bun run ui:add input
bun run ui:add dialog
bun run ui:add form

# Or add multiple at once
bun run ui:add button card input form
```

### Available Components

Shadcn/ui provides many components. Some popular ones:

```bash
# Layout
bun run ui:add card
bun run ui:add separator
bun run ui:add sheet

# Forms
bun run ui:add input
bun run ui:add form
bun run ui:add select
bun run ui:add checkbox
bun run ui:add radio-group

# Navigation
bun run ui:add navigation-menu
bun run ui:add breadcrumb
bun run ui:add tabs

# Feedback
bun run ui:add alert
bun run ui:add toast
bun run ui:add progress
```

### Using Components

```tsx
import { Button, Card, Input, Label } from '@/components/ui';

export function MyForm() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
        <Button type="submit">Submit</Button>
      </div>
    </Card>
  );
}
```

### Customizing Components

Shadcn/ui components are copied to your project and can be customized:

```tsx
// src/components/ui/button.tsx
// Edit this file to customize the button component
import { cva, type VariantProps } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

## 🔧 Customization Steps

### 1. Update Project Information

```bash
# Update package.json
npm pkg set name="your-app-name"
npm pkg set description="Your app description"
```

### 2. Configure Environment Variables

```bash
# Copy and edit environment file
cp env.example .env.local
```

Edit `.env.local` with your specific configuration:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Your App Name"
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
```

### 3. Add Your Features

Create new feature modules in `src/features/`:

```bash
mkdir -p src/features/my-feature/{components,hooks,types}
```

Example feature structure:
```
src/features/my-feature/
├── components/
│   ├── MyComponent.tsx
│   └── MyForm.tsx
├── hooks.ts
├── types.ts
└── index.ts
```

### 4. Configure API Integration

Update `src/lib/api/` with your API endpoints:

```typescript
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

### 5. Add Authentication (Optional)

If you need authentication, add your auth provider:

```typescript
// src/providers/auth-context.tsx
import { createContext, useContext, ReactNode } from 'react';

interface AuthContextType {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // Your auth logic here
  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
}
```

## 📁 Template Structure Explained

### Core Directories

- **`src/app/`**: Next.js App Router pages
- **`src/components/ui/`**: Shadcn/ui components
- **`src/features/`**: Domain-specific modules
- **`src/lib/`**: Framework utilities and API layer
- **`src/providers/`**: React context providers
- **`src/types/`**: Global TypeScript types

### Key Files

- **`src/lib/env.ts`**: Typed environment variables
- **`src/lib/api/client.ts`**: Base API client
- **`src/lib/utils.ts`**: Utility functions (cn function for Shadcn/ui)
- **`src/components/ui/index.ts`**: Barrel exports for UI components
- **`components.json`**: Shadcn/ui configuration
- **`next.config.ts`**: Next.js configuration
- **`tsconfig.json`**: TypeScript configuration with path aliases

## 🎨 Styling and Components

### Shadcn/ui Components

The template uses Shadcn/ui with the "new-york" style and zinc base color:

```tsx
// Example component with Shadcn/ui
import { Button, Card, Input, Label } from '@/components/ui';

<Card className="p-6">
  <div className="space-y-4">
    <div>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter email" />
    </div>
    <Button type="submit">Submit</Button>
  </div>
</Card>
```

### Tailwind CSS with CSS Variables

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

## 🔌 API Integration

### Making API Calls

```tsx
import { fetchMyData } from '@/lib/api';

export function MyComponent() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchMyData()
      .then(setData)
      .catch(console.error);
  }, []);
  
  return <div>{/* Your JSX */}</div>;
}
```

### Error Handling

The API client includes built-in error handling:

```tsx
import { ApiError } from '@/lib/api';

try {
  const data = await fetchMyData();
} catch (error) {
  if (error instanceof ApiError) {
    console.error(`API Error ${error.status}: ${error.message}`);
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy automatically

### Other Platforms

The template works with any Next.js-compatible platform:
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

## 📚 Best Practices

### 1. Feature Organization

Keep related code together:
```
src/features/users/
├── components/     # User-specific UI
├── hooks.ts        # User-related hooks
├── types.ts        # User type definitions
└── index.ts        # Public API
```

### 2. Import Organization

Follow the import order:
```tsx
// 1. External libraries
import React from 'react';
import { NextPage } from 'next';

// 2. Internal imports (aliased)
import { Button } from '@/components/ui';
import { useUsers } from '@/features/users';

// 3. Relative imports
import './styles.css';
```

### 3. Type Safety

Always define types for your data:
```tsx
interface User {
  id: string;
  name: string;
  email: string;
}

function UserCard({ user }: { user: User }) {
  return <div>{user.name}</div>;
}
```

### 4. Shadcn/ui Best Practices

- Use the `cn` utility for conditional classes
- Customize components in `src/components/ui/`
- Follow the component composition pattern
- Use semantic HTML with proper accessibility

```tsx
import { cn } from '@/lib/utils';

function MyComponent({ className, ...props }) {
  return (
    <div className={cn("base-classes", className)} {...props}>
      Content
    </div>
  );
}
```

## 🆘 Getting Help

- Check the [README.md](README.md) for detailed documentation
- Review the example components in `src/components/examples/`
- Look at the API examples in `src/lib/api/`
- Check the feature examples in `src/features/`
- Visit [Shadcn/ui documentation](https://ui.shadcn.com/)

## 🔄 Updating the Template

To keep your template current:

1. **Fork the template repository**
2. **Make your improvements**
3. **Test thoroughly**
4. **Update documentation**
5. **Publish new version**

---

This template is designed to scale with your application. Start simple and add complexity as needed! 