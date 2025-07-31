interface BrandNameProps {
  variant?: 'modern' | 'bold' | 'elegant' | 'sporty' | 'clean';
  className?: string;
  format?: 'spaced' | 'camelCase';
}

export function BrandName({ variant = 'modern', className = '', format = 'spaced' }: BrandNameProps) {
  const variants = {
    modern: "text-xl font-extrabold tracking-tight text-foreground",
    bold: "text-xl font-black tracking-wide text-foreground",
    elegant: "text-xl font-light tracking-widest uppercase text-foreground",
    sporty: format === 'camelCase' 
      ? "text-xl font-bold tracking-wide text-foreground" 
      : "text-xl font-bold tracking-wide uppercase text-foreground",
    clean: "text-xl font-semibold tracking-normal text-foreground"
  };

  const fontStyles = {
    modern: { fontFamily: 'Inter, system-ui, sans-serif' },
    bold: { fontFamily: 'Inter, system-ui, sans-serif' },
    elegant: { fontFamily: 'Inter, system-ui, sans-serif' },
    sporty: { fontFamily: 'Inter, system-ui, sans-serif' },
    clean: { fontFamily: 'Inter, system-ui, sans-serif' }
  };

  const brandText = format === 'camelCase' ? 'BodyByBunch' : 'Body By Bunch';

  return (
    <h1 
      className={`${variants[variant]} ${className}`}
      style={fontStyles[variant]}
    >
      {brandText}
    </h1>
  );
} 