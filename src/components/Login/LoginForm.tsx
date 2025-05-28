import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react'; // CRITICAL: Import from lucide-react

// MANDATORY: Define explicit interface with proper types
interface LoginFormProps {
  className?: string;
  // Callbacks for external navigation or state changes can be added here if needed
  // e.g., onLoginSuccess?: (userData: { email: string }) => void;
  // e.g., onNavigateSignUp?: () => void;
  // e.g., onNavigateForgotPassword?: () => void;
}

// CRITICAL: Use React.FC with the proper interface
const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  // CRITICAL: Proper state management with explicit typing
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // MANDATORY: Implement proper event handlers with useCallback
  const handleLogin = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null); // Clear previous errors

    // Basic client-side validation
    if (!email.trim() || !password.trim()) {
      setError("Email and password are required.");
      return;
    }
    
    setIsLoading(true);

    // Simulate API call (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      
      // CRITICAL: Example dummy validation logic
      if (email === "test@example.com" && password === "password123") {
        console.log('Login successful for:', email);
        // onLoginSuccess?.({ email }); // Example: Call a success callback
        // setEmail(''); // Optionally clear fields on success
        // setPassword('');
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (err) {
      // console.error('Login API call failed:', err); // For debugging
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, [email, password]);

  // CRITICAL: Use proper JSX structure with Shadcn components and Tailwind CSS
  return (
    <div className={cn("bg-card p-6 shadow-md rounded-lg w-full max-w-xs", className)}>
      <h1 className="text-2xl font-bold text-center mb-6 text-foreground">
        Welcome
      </h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-xs font-medium text-muted-foreground">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // HTML5 validation for empty field
            className={cn(
              "block w-full px-0 py-1.5 border-0 border-b-2 border-input bg-transparent text-sm text-foreground placeholder-muted-foreground rounded-none",
              "focus:ring-0 focus:border-primary focus-visible:ring-offset-0" // Custom focus for bottom-border style
            )}
            autoComplete="email"
            disabled={isLoading}
          />
        </div>
        
        <div className="space-y-1.5">
          <Label htmlFor="password" className="text-xs font-medium text-muted-foreground">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required // HTML5 validation for empty field
            className={cn(
              "block w-full px-0 py-1.5 border-0 border-b-2 border-input bg-transparent text-sm text-foreground placeholder-muted-foreground rounded-none",
              "focus:ring-0 focus:border-primary focus-visible:ring-offset-0" // Custom focus for bottom-border style
            )}
            autoComplete="current-password"
            disabled={isLoading}
          />
        </div>

        {/* Error message display area */} 
        {error && (
          <p className="text-xs text-destructive text-left -mt-2 pt-1">{error}</p>
        )}
        
        {/* Container for Forgot Password link, adjusts spacing if error is shown */} 
        <div className={cn("text-right", error ? "-mt-1 pt-1" : "-mt-2 pt-2")}>
          <Button 
            variant="link" // CRITICAL: Use documented Shadcn variant
            type="button" // Important for links within forms not to submit
            className="text-xs font-medium text-accentLink hover:text-accentLink/90 p-0 h-auto hover:underline"
            onClick={() => console.log('Forgot Password clicked')} // Replace with actual navigation/action
            disabled={isLoading}
          >
            Forgot Password
          </Button>
        </div>

        <div className="pt-2"> {/* Spacing above login button */}
          <Button 
            type="submit" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90" // Style using Tailwind utilities and theme colors
            disabled={isLoading}
          >
            {/* CRITICAL: Use lucide icon for loading state */}
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {isLoading ? 'Logging in...' : 'Login'}
          </Button>
        </div>
      </form>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Don't have an account?{' '}
        <Button 
          variant="link" 
          type="button" 
          className="font-medium text-accentLink hover:text-accentLink/90 p-0 h-auto text-xs underline hover:underline"
          onClick={() => console.log('Navigate to SignUp page')} // Replace with actual navigation/action
          disabled={isLoading}
        >
          SignUp
        </Button>
      </p>
    </div>
  );
};

export default LoginForm;
