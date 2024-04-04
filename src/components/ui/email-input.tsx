import * as React from "react";
import { Input, InputProps } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FieldErrors } from "react-hook-form";
import { ContactForm } from "@/lib/types";

export interface EmailInputProps extends InputProps {
  withLabel?: boolean;
  labelClassName?: string;
  containerClassName?: string;
  withPlaceholder?: boolean;
  errors: FieldErrors<ContactForm>;
  type?: "email";
}

const EmailInput = React.forwardRef<HTMLInputElement, EmailInputProps>(
  ({ className, ...props }, ref) => {
    const {
      withLabel,
      withPlaceholder,
      labelClassName,
      errors,
      containerClassName,
    } = props;

    return (
      <div className={containerClassName}>
        {withLabel && (
          <label
            htmlFor="email"
            className={cn(
              "block text-sm font-medium text-gray-700",
              labelClassName
            )}
          >
            Email:
          </label>
        )}

        <Input
          type="email"
          id="email"
          className={cn("min-w-full", className)}
          ref={ref}
          {...props}
          placeholder={withPlaceholder ? "Enter your email" : undefined}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">
            {errors.email.message}
            {errors.email.type === "pattern" && "Invalid email"}
          </p>
        )}
      </div>
    );
  }
);
EmailInput.displayName = "Input";

export { EmailInput };
