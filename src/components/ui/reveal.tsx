'use client';

import React, { ReactNode, useMemo } from 'react';
import { motion, type MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

// Direction the element should enter from
export type Direction = 'left' | 'right' | 'up' | 'down';

export interface RevealProps extends MotionProps {
  /**
   * Children to be animated
   */
  children: ReactNode;
  /**
   * Direction the element slides in from (default: "left")
   */
  direction?: Direction;
  /**
   * Offset distance in pixels (default: 40)
   */
  distance?: number;
  /**
   * If true, animation only runs once when element enters viewport (default: true)
   */
  once?: boolean;
  /**
   * Tailwind / custom classes for outer clipping wrapper
   */
  className?: string;
}

/**
 * A small wrapper that reveals its children with a slide-and-fade entrance
 * while keeping overflow clipped, preventing horizontal scrollbar flicker.
 */
export function Reveal({
  children,
  direction = 'left',
  distance = 40,
  once = true,
  className,
  ...rest
}: RevealProps) {
  const offset = useMemo(() => {
    switch (direction) {
      case 'right':
        return { x: distance };
      case 'left':
        return { x: -distance };
      case 'up':
        return { y: -distance };
      case 'down':
        return { y: distance };
      default:
        return {};
    }
  }, [direction, distance]);

  return (
    <div className="overflow-hidden">
      <motion.div
        className={className}
        initial={{ opacity: 0, ...offset }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once }}
        {...rest}
      >
        {children}
      </motion.div>
    </div>
  );
}
