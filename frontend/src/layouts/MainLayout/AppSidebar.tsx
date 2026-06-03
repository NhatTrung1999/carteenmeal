import { Link, useLocation } from 'react-router';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import LogoLY from '@/assets/images/Logo-LY.png';
import {
  // BarChart2,
  // ClipboardList,
  LayoutDashboard,
  ScrollText,
  // Settings,
  ShieldCheck,
  // Users,
  // UtensilsCrossed,
} from 'lucide-react';

const NAV_MAIN = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  // { title: 'Meals', url: '/meals', icon: UtensilsCrossed },
  // { title: 'Orders', url: '/orders', icon: ClipboardList },
  // { title: 'Employees', url: '/employees', icon: Users },
  // { title: 'Reports', url: '/reports', icon: BarChart2 },
];

const NAV_SYSTEM = [
  { title: 'Permission', url: '/permission', icon: ShieldCheck },
  { title: 'Logs', url: '/logger', icon: ScrollText },
  // { title: 'Settings', url: '/settings', icon: Settings },
];

const AppSidebar = () => {
  const location = useLocation();

  const isActive = (url: string) => location.pathname === url;

  const menuItemClass = (url: string) =>
    isActive(url)
      ? 'bg-primary! text-primary-foreground! hover:bg-primary! hover:text-primary-foreground! shadow-sm'
      : '';

  return (
    <Sidebar collapsible="icon">
      {/* Logo */}
      <SidebarHeader className="pb-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 p-1 group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:p-1">
                  <img
                    src={LogoLY}
                    alt="Logo"
                    className="h-8 w-auto object-contain group-data-[collapsible=icon]:h-6"
                  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="text-sm font-semibold">LYG Carteen</span>
                  <span className="text-xs text-muted-foreground font-semibold">
                    Meal Management
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_MAIN.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    tooltip={item.title}
                    className={menuItemClass(item.url)}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NAV_SYSTEM.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    tooltip={item.title}
                    className={menuItemClass(item.url)}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* User + Logout */}
      {/* <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="Account">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                A
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="text-sm font-medium">Admin</span>
                <span className="text-xs text-muted-foreground">Administrator</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Logout"
              className="text-destructive hover:bg-destructive/10! hover:text-destructive!"
              onClick={() => navigate('/login')}
            >
              <LogOut />
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail /> */}
    </Sidebar>
  );
};

export default AppSidebar;
