import Image from 'next/image'

interface ImageExampleProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function ImageExample({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false
}: ImageExampleProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="object-cover w-full h-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}

// Example usage components for different image types
export function HeroImage() {
  return (
    <ImageExample
      src="/images/hero/hero-banner.jpg"
      alt="Body By Bunch - Transform Your Life"
      width={1920}
      height={1080}
      priority={true}
      className="w-full h-[60vh]"
    />
  )
}

export function ProfileImage() {
  return (
    <ImageExample
      src="/images/team/lane-profile.jpg"
      alt="Lane Bunch - NASM Certified Personal Trainer"
      width={400}
      height={400}
      className="w-32 h-32 rounded-full"
    />
  )
}

export function ServiceImage() {
  return (
    <ImageExample
      src="/images/services/personal-training.jpg"
      alt="Personal Training Session"
      width={800}
      height={600}
      className="w-full h-48"
    />
  )
} 