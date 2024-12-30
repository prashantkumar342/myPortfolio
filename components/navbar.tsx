/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/order */
"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";
import { useSelector, useDispatch } from "react-redux";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Logout } from "@mui/icons-material";
import { logoutUser } from "@/config/auth"; // Import the logout function
import { setAuthStatus, setUser } from "@/redux/slices/globalVar"; // Import the Redux action
import { useState } from "react";

interface RootState {
  globalVar: { isAuthenticated: boolean; user: { isAdmin: boolean } };
}

export const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  const [navMenu, setNavMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state for logout button
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.globalVar
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoading(true); // Set loading state to true when starting logout process
    const response = await logoutUser();

    if (response && response.status === 200) {
      dispatch(setUser(null));
      dispatch(setAuthStatus(false));
      router.push("/login");
    } else {
      console.error("Failed to logout");
    }
    setIsLoading(false); // Set loading state to false once logout is complete
  };

  return (
    <NextUINavbar isMenuOpen={navMenu} maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <img alt="logo" className="w-8" src="/p.png" />
            <p className="font-bold text-inherit">Prashant</p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map(
            (item) =>
              (item.label !== "Admin" || user?.isAdmin) && (
                <NavbarItem key={item.href}>
                  <NextLink
                    className={clsx(
                      linkStyles({
                        color:
                          pathname === item.href ? "primary" : "foreground",
                      }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium"
                    )}
                    color="foreground"
                    href={item.href}
                  >
                    {item.label}
                  </NextLink>
                </NavbarItem>
              )
          )}
        </div>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          {isAuthenticated ? (
            <Button
              isIconOnly
              aria-label="logout"
              color="danger"
              isLoading={isLoading} // Show loading spinner when logging out
              variant="faded"
              onClick={handleLogout}
            >
              <Logout />
            </Button>
          ) : (
            <NextLink href="/login">
              <Button className="w-full" color="primary" variant="shadow">
                Login
              </Button>
            </NextLink>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle onChange={() => setNavMenu(!navMenu)} />
      </NavbarContent>
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map(
            (item, index) =>
              (item.label !== "Admin" || user?.isAdmin) && (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    className={
                      pathname === item.href
                        ? "text-primary"
                        : "text-foreground"
                    }
                    href={item.href}
                    size="lg"
                    onClick={() => setNavMenu(false)}
                  >
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              )
          )}
          {!isAuthenticated ? (
            <Button
              as={Link}
              className="w-full"
              color="primary"
              href="/login"
              variant="shadow"
              onClick={() => setNavMenu(false)}
              onTouchStart={(e) => e.preventDefault()}
            >
              Login
            </Button>
          ) : (
            <Button
              className="cursor-pointer"
              color="danger"
              isLoading={isLoading} // Show loading spinner when logging out
              onClick={(e) => {
                handleLogout();
                e.preventDefault(); // Prevent default behavior when clicked
                e.stopPropagation(); // Stop the event from bubbling up
              }}
              onTouchStart={(e) => {
                e.preventDefault(); // Prevent default behavior on touch events
                handleLogout(); // Call logout on touch start
              }}
            >
              Logout
            </Button>
          )}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
