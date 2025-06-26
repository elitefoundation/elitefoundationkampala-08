
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden liquid-morph glass-ripple",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-orange-500 to-orange-600 backdrop-blur-md border border-orange-400/30 text-white hover:from-orange-600 hover:to-orange-700 hover:shadow-orange-glow hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        destructive: "bg-gradient-to-r from-error-500 to-red-600 backdrop-blur-md border border-red-400/30 text-white hover:from-red-600 hover:to-red-700 hover:shadow-lg hover:shadow-red-500/20 hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        outline: "border border-stone-300 bg-wrlds-light/10 backdrop-blur-md hover:bg-stone-50 hover:text-stone-700 hover:shadow-lg hover:shadow-stone-200/30 hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-stone-300/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        secondary: "bg-gradient-to-r from-stone-100 to-stone-200 backdrop-blur-md border border-stone-300/50 text-stone-700 hover:from-stone-200 hover:to-stone-300 hover:shadow-lg hover:shadow-stone-300/20 hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        ghost: "bg-wrlds-light/5 backdrop-blur-sm border border-stone-200/30 hover:bg-stone-100/50 hover:text-stone-700 hover:shadow-lg hover:shadow-stone-200/20 hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-stone-300/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        link: "text-orange-600 underline-offset-4 hover:underline bg-transparent backdrop-blur-0 relative hover:text-orange-700 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-orange-500/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500",
        glass: "bg-wrlds-light/15 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white/25 hover:shadow-xl hover:shadow-white/20 hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        "glass-dark": "bg-wrlds-dark/20 backdrop-blur-md border border-wrlds-dark/40 text-white shadow-lg hover:bg-wrlds-dark/30 hover:shadow-xl hover:shadow-wrlds-dark/30 hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        "glass-colored": "bg-gradient-to-r from-info-500/20 to-wrlds-teal/20 backdrop-blur-md border border-info-500/30 text-white shadow-lg hover:from-info-500/30 hover:to-wrlds-teal/30 hover:shadow-xl hover:shadow-info-500/20 hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        "glass-orange": "bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-md border border-orange-500/30 text-white shadow-lg hover:from-orange-500/30 hover:to-orange-600/30 hover:shadow-orange-glow hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
