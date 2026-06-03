import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown, LogOut, Settings, User } from 'lucide-react';

const PAGE_TITLES: Record<string, string> = {
  '/': 'Dashboard',
  '/meals': 'Meals',
  '/orders': 'Orders',
  '/employees': 'Employees',
  '/reports': 'Reports',
  '/permission': 'Permission',
  '/logger': 'Logs',
  '/settings': 'Settings',
};

import { LANGUAGES, type Language } from '@/constants/languages';

const AppHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [lang, setLang] = useState<Language>(LANGUAGES[0]);

  const pageTitle = PAGE_TITLES[location.pathname] ?? 'Dashboard';

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur-sm">
      {/* Left */}
      <SidebarTrigger className="-ml-1" />
      <span className="text-sm font-semibold text-foreground">{pageTitle}</span>

      {/* Right */}
      <div className="ml-auto flex items-center gap-1">

        {/* Language */}
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-1.5 rounded-full bg-muted px-3 text-muted-foreground hover:bg-muted/80 hover:text-foreground">
              <span className={`fi fi-${lang.fi} rounded-sm`} style={{ fontSize: '1rem' }} />
              <span className="hidden text-xs sm:inline">{lang.label}</span>
              <ChevronDown className="size-3 opacity-60" />
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
                <span className={`fi fi-${l.fi} rounded-sm`} style={{ fontSize: '0.95rem' }} />
                {l.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User */}
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-2 rounded-full bg-muted px-2 hover:bg-muted/80">
              <div className="flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground shadow-sm">
                A
              </div>
              <div className="hidden flex-col items-start leading-none sm:flex">
                <span className="text-sm font-semibold">Admin</span>
                <span className="text-[11px] text-muted-foreground">Administrator</span>
              </div>
              <ChevronDown className="size-3.5 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel className="flex items-center gap-2.5 py-2">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                A
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold leading-none">Admin</span>
                <span className="text-[11px] font-normal text-muted-foreground">admin@lyg.com</span>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={() => navigate('/profile')}>
              <User className="size-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate('/settings')}>
              <Settings className="size-4" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => navigate('/login')}
              className="text-destructive focus:bg-destructive/10 focus:text-destructive"
            >
              <LogOut className="size-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </header>
  );
};

export default AppHeader;
