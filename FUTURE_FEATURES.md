# Future Features & Implementation Guide

This document outlines the planned features for Body By Bunch and how to implement them.

## 🚀 Planned Features

### 1. **Authentication System (WorkOS)**
- **Status**: Infrastructure ready, implementation pending
- **Files**: `src/types/auth.ts`, `src/providers/auth-context.tsx`, `src/lib/auth.ts`
- **Implementation**:
  ```bash
  # Install WorkOS
  bun add @workos-inc/node
  
  # Set up environment variables
  NEXT_PUBLIC_WORKOS_PUBLISHABLE_KEY=pk_...
  WORKOS_SECRET_KEY=sk_...
  NEXT_PUBLIC_WORKOS_REDIRECT_URI=http://localhost:3000/auth/callback
  ```

### 2. **Contact Form Integration**
- **Status**: API route ready, frontend integration pending
- **Files**: `src/app/api/contact/route.ts`
- **Implementation**: 
  - Add form validation with React Hook Form
  - Integrate with email service (SendGrid, Resend)
  - Add success/error notifications

### 3. **Client Portal/Dashboard**
- **Status**: Auth infrastructure ready
- **Features**:
  - Client login/registration
  - Progress tracking
  - Workout plans
  - Nutrition logs
  - Appointment scheduling

### 4. **Appointment Booking (Calendly Integration)**
- **Status**: Ready to implement
- **Implementation**:
  ```bash
  # Install Calendly SDK
  bun add @calendly/integrations
  ```

### 5. **AI Chatbot Integration**
- **Status**: Ready to implement
- **Options**:
  - OpenAI GPT integration
  - Custom fitness AI
  - Pre-built chatbot platforms

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js 14 app router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── about/             # About page
│   ├── plans/             # Pricing page
│   ├── testimonials/      # Client stories
│   ├── contact/           # Contact page
│   └── layout.tsx         # Root layout with theme provider
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── theme-provider.tsx # Dark mode provider
│   └── mode-toggle.tsx   # Theme toggle
├── lib/                   # Utilities and configurations
│   ├── api/              # API client and utilities
│   ├── auth.ts           # Authentication utilities
│   ├── env.ts            # Environment configuration
│   └── utils.ts          # General utilities
├── providers/             # React context providers
│   └── auth-context.tsx  # Authentication context
├── types/                 # TypeScript type definitions
│   ├── auth.ts           # Authentication types
│   ├── user.ts           # User/client types
│   └── index.ts          # Type exports
└── styles/               # Global styles
    └── globals.css       # Tailwind CSS with custom theme
```

## 🎨 Design System

### Colors
- **Primary**: `teal-600` (#0d9488) - Body By Bunch teal
- **Secondary**: `#99874a` - Body By Bunch gold
- **Dark Mode**: Fully supported with custom color scheme

### Components
- **shadcn/ui**: Pre-built, accessible components
- **Custom Theme**: Brand colors integrated throughout
- **Responsive**: Mobile-first design approach

## 🔧 Development Commands

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Add new shadcn/ui components
bun run ui:add <component-name>

# Build for production
bun run build

# Start production server
bun run start
```

## 📝 Environment Variables

```env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Body By Bunch

# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api

# Contact Form
NEXT_PUBLIC_CONTACT_EMAIL=lane@bodybybunch.com

# WorkOS Authentication (future)
NEXT_PUBLIC_WORKOS_PUBLISHABLE_KEY=
WORKOS_SECRET_KEY=
NEXT_PUBLIC_WORKOS_REDIRECT_URI=http://localhost:3000/auth/callback

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_CONTACT_FORM=true
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Compatible with Next.js
- **Railway**: Good for full-stack apps
- **AWS/GCP**: For advanced deployments

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [WorkOS Documentation](https://workos.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs) 