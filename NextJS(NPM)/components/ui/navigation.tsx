"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Home, UserPlus, Settings } from 'lucide-react';

const Navigation = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/signup', label: 'Sign Up', icon: UserPlus },
    { href: '/onboarding', label: 'Onboarding', icon: Settings },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/dashboard" className="text-2xl font-bold text-gray-900">
          MyApp
        </Link>
        <div className="flex space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                  pathname === item.href
                    ? "bg-gray-900 text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;