import { useState } from 'react';
import LogoLY from '@/assets/images/Logo-LY.png';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { User, Lock, LogIn, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router';
import LoadingScreen from '@/components/LoadingScreen';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LANGUAGES, type Language } from '@/constants/languages';

const Login = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState<Language>(LANGUAGES[0]);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <>
      <LoadingScreen visible={loading} onDone={() => navigate('/')} />
      <div className={cn('flex flex-col gap-6', className)} {...props}>
        <Card className="overflow-hidden border-0 p-0 shadow-xl md:shadow-2xl">
          <CardContent className="grid p-0 md:grid-cols-2">
            {/* Left: Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center gap-5 p-6 sm:gap-7 sm:p-8 md:p-10"
            >
              {/* Logo */}
              <div className="flex items-center gap-2">
                <img
                  src={LogoLY}
                  alt="Logo LY"
                  className="h-10 w-auto object-contain"
                />
              </div>

              {/* Heading */}
              <div className="flex flex-col gap-1.5">
                <h1 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Welcome back
                </h1>
                <p className="text-sm text-muted-foreground">
                  Sign in to your account to continue (account link)
                </p>
              </div>

              {/* Fields */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="account">Account</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input
                      id="account"
                      type="text"
                      placeholder="Enter your account..."
                      className="pl-9"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password..."
                      className="pl-9"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full gap-2">
                Sign In
                <LogIn className="size-4" />
              </Button>

              {/* Footer branding */}
              <p className="text-center text-xs text-muted-foreground/60">
                LYG &mdash; Carteen Meal Management System
              </p>
            </form>

            {/* Right: Decoration panel */}
            <div className="relative hidden overflow-hidden md:flex md:flex-col md:items-center md:justify-center bg-linear-to-br from-primary to-primary/80 p-10">
              {/* Background blobs */}
              <div className="absolute -top-20 -right-20 size-72 rounded-full bg-white/10" />
              <div className="absolute -bottom-20 -left-20 size-72 rounded-full bg-white/10" />
              <div className="absolute inset-0 m-auto size-80 rounded-full bg-white/5" />

              {/* Language selector */}
              <div className="absolute top-3 right-3 z-20">
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1.5 rounded-full bg-white/15 px-3 text-white hover:bg-white/25"
                    >
                      <span className={`fi fi-${lang.fi} rounded-sm`} style={{ fontSize: '0.9rem' }} />
                      <span className="text-xs">{lang.label}</span>
                      <ChevronDown className="size-3 opacity-70" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuLabel className="text-xs text-muted-foreground">Language</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {LANGUAGES.map((l) => (
                      <DropdownMenuItem
                        key={l.code}
                        onClick={() => setLang(l)}
                        className={lang.code === l.code ? 'bg-accent text-accent-foreground' : ''}
                      >
                        <span className={`fi fi-${l.fi} rounded-sm`} style={{ fontSize: '0.9rem' }} />
                        {l.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Lottie animation */}
              <div className="relative z-10 w-full max-w-xs">
                <DotLottieReact
                  src="/animations/loading-login.json"
                  loop
                  autoplay
                  className="w-full"
                />
              </div>

              {/* Text */}
              <div className="relative z-10 mt-6 text-center">
                <p className="text-lg font-semibold text-white">
                  LYG Carteen Meal
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Canteen Meal Management System
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Login;
