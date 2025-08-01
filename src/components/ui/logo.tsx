import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  variant?: 'default' | 'square' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  href?: string
  priority?: boolean
}

export function Logo({ 
  variant = 'default', 
  size = 'md', 
  className = '',
  href,
  priority = false 
}: LogoProps) {
  // Define logo variants and their corresponding images
  const logoVariants = {
    default: {
      src: '/images/brand/logo.png',
      srcDark: '/images/brand/logo-white.png',
      alt: 'Body By Bunch',
      width: 200,
      height: 60
    },
    square: {
      src: '/images/brand/logo.png',
      srcDark: '/images/brand/logo-white.png',
      alt: 'Body By Bunch',
      width: 60,
      height: 60
    },
    icon: {
      src: '/images/brand/logo.png',
      srcDark: '/images/brand/logo-white.png',
      alt: 'BBB',
      width: 32,
      height: 32
    }
  }

  // Define size classes
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  }

  const logo = logoVariants[variant]
  const sizeClass = sizeClasses[size]

  const LogoImages = () => (
    <div className="relative">
      {/* Light mode logo */}
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        priority={priority}
        className={`object-contain ${sizeClass} ${className} dark:hidden`}
      />
      {/* Dark mode logo */}
      <Image
        src={logo.srcDark}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        priority={priority}
        className={`object-contain ${sizeClass} ${className} hidden dark:block`}
      />
    </div>
  )

  // If href is provided, wrap in Link component
  if (href) {
    return (
      <Link href={href} className="inline-block">
        <LogoImages />
      </Link>
    )
  }

  return <LogoImages />
}

// Convenience components for common use cases
export function HeaderLogo() {
  return (
    <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
      <Image
        src="/images/brand/logo.png"
        alt="Body By Bunch"
        width={200}
        height={60}
        priority
        className="h-12 w-auto object-contain"
      />
    </Link>
  )
}

export function FooterLogo() {
  return (
    <Logo 
      variant="default" 
      size="sm" 
      href="/"
      className="opacity-90"
    />
  )
}

export function FaviconLogo() {
  return (
    <Logo 
      variant="icon" 
      size="sm"
      className="w-8 h-8"
    />
  )
} 