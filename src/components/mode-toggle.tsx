"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="hover:bg-brand-sky/10 hover:text-brand-sky hover:border-brand-sky/30">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")} className="hover:bg-brand-sky/10 hover:text-brand-sky focus:bg-brand-sky/10 focus:text-brand-sky">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="hover:bg-brand-sky/10 hover:text-brand-sky focus:bg-brand-sky/10 focus:text-brand-sky">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="hover:bg-brand-sky/10 hover:text-brand-sky focus:bg-brand-sky/10 focus:text-brand-sky">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 