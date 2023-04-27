import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuBars } from "../icons";
import { menu_list, social_list } from "@/constants";
import {
  HeaderWrap,
  Logo,
  Menu,
  MenuButton,
  MenuList,
  MenuFooter,
} from "./header.styles";
import gsap from "gsap";

export const Header = () => {
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const animateHamburger = () => {
    if (!menuOpen) {
      gsap
        .timeline()
        .to(
          "button svg .line-1",
          {
            transform: "rotate(45deg)",
          },
          0
        )
        .to(
          "button svg .line-2",
          {
            x: "100%",
            opacity: 0,
          },
          0
        )
        .to(
          "button svg .line-3",
          {
            transform: "rotate(-45deg)",
          },
          0
        );
    } else {
      gsap
        .timeline()
        .to("button svg .line-1", {
          transform: "rotate(0)",
        })
        .to(
          "button svg .line-2",
          {
            opacity: 1,
            x: "0%",
          },
          0
        )
        .to(
          "button svg .line-3",
          {
            transform: "rotate(0)",
          },
          0
        );
    }
  };

  const animateMenu = () => {
    if (!menuOpen) {
      gsap
        .timeline({
          defaults: {
            ease: "ease",
          },
        })
        .to(menuRef.current, {
          y: "0%",
        })
        .from(
          "a .num",
          {
            y: 20,
            opacity: 0,
            stagger: {
              amount: 0.5,
            },
          },
          0.5
        )
        .from(
          "a .text span",
          {
            y: "100%",
            opacity: 0,
            stagger: {
              amount: 0.5,
            },
          },
          0.7
        )
        .from(
          ".social_list li",
          {
            y: "100%",
            opacity: 0,
            stagger: {
              amount: 0.5,
            },
          },
          0.7
        )
        .from(
          ".credits",
          {
            y: "100%",
            opacity: 0,
          },
          0.7
        );
      setMenuOpen(true);
    } else {
      gsap.to(menuRef.current, {
        y: "-100vh",
        ease: "ease",
      });
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    animateHamburger();
    animateMenu();
  };

  return (
    <HeaderWrap>
      <Logo href="/">Jacob Grønberg</Logo>
      <MenuButton ref={hamburgerRef} onClick={toggleMenu}>
        <MenuBars />
      </MenuButton>
      <Menu ref={menuRef}>
        <MenuList>
          {menu_list.map(({ id, title, link }) => (
            <li key={id}>
              <Link
                href={link}
                className={router.asPath === link ? "active" : ""}
              >
                <span className="num">0{id}</span>
                <span className="text">
                  <span>{title}</span>
                  <span>{title}</span>
                </span>
              </Link>
            </li>
          ))}
        </MenuList>

        <MenuFooter>
          <ul className="social_list">
            {social_list.map(({ id, title, link }) => (
              <li key={id}>
                <Link href={link}>
                  <span className="text">{title}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="credits">
            <p>
              © Design by{" "}
              <Link href="http://www.gola.io" target="_blank">
                Pawel Gola
              </Link>{" "}
              -- Developed by{" "}
              <Link href="https://devubong.com/" target="_blank">
                Ubong Sylvester
              </Link>
            </p>
          </div>
        </MenuFooter>
      </Menu>
    </HeaderWrap>
  );
};
