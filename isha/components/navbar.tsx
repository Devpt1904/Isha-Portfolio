"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

// ThemeSwitcher removed: site is dark-only
import { DATA } from "@/data";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = DATA.navigation;

  return (
    <Navbar
      isBordered
      className="bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* brand left (desktop), menu centered */}
      <NavbarContent className="relative flex items-center w-full">
        <motion.div
          className="hidden sm:block absolute left-6"
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Link
            className="font-bold text-inherit text-3xl bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 bg-clip-text text-transparent hover:from-primary-300 hover:via-secondary-300 hover:to-primary-400 transition-all duration-500 tracking-tight drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]"
            href="/"
            onClick={() => setIsMenuOpen(false)}
            style={{
              fontFamily: "'Poppins', 'Inter', sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.02em"
            }}
          >
            Isha
          </Link>
        </motion.div>

        <div className="mx-auto hidden sm:flex justify-center gap-2">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <NavbarItem key={item.name}>
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -10 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 group ${
                      isActive
                        ? "text-primary-500 font-semibold bg-primary-500/10"
                        : "text-foreground/80 hover:text-primary-500 hover:bg-white/5"
                    }`}
                    href={item.href}
                  >
                    <Icon 
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive ? "text-primary-500" : "text-foreground/60 group-hover:text-primary-500 group-hover:scale-110"
                      }`} 
                      icon={item.icon} 
                    />
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                        layoutId="navbar-indicator"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              </NavbarItem>
            );
          })}
        </div>

        {/* mobile: show brand and toggle on small screens */}
        <div className="sm:hidden flex items-center justify-between w-full px-4">
          <Link
            className="font-bold text-inherit text-2xl bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-500 bg-clip-text text-transparent tracking-tight drop-shadow-[0_0_12px_rgba(99,102,241,0.25)]"
            href="/"
            onClick={() => setIsMenuOpen(false)}
            style={{
              fontFamily: "'Poppins', 'Inter', sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.02em"
            }}
          >
            Isha
          </Link>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-foreground"
          />
        </div>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-background/95 backdrop-blur-xl pt-6 sm:hidden border-t border-white/10">
        <div className="mx-auto max-w-lg space-y-2 px-4">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <NavbarMenuItem key={item.name}>
                <motion.div
                  animate={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    className={`w-full flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-primary-500/15 text-primary-500 font-semibold shadow-lg shadow-primary-500/20"
                        : "hover:bg-white/5 text-foreground/80 hover:text-primary-500"
                    }`}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon 
                      className={`w-5 h-5 ${isActive ? "text-primary-500" : "text-foreground/60"}`} 
                      icon={item.icon} 
                    />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </motion.div>
              </NavbarMenuItem>
            );
          })}
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
