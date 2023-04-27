import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MenuBars } from "../icons";
import { menu_list, social_list } from "@/constants";
import { HeaderWrap, Logo, Menu, MenuButton, MenuList } from "./header.styles";
import gsap from "gsap";
import { FooterCredits } from "../_shared";

export const Header = () => {
  const menuRef = useRef(null);
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
          " .text span",
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
          ".footer-wrap .social__list li",
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
          ".footer-wrap .credits",
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
      <MenuButton onClick={toggleMenu}>
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
        <div className="footer-wrap">
          <FooterCredits />
        </div>
      </Menu>
    </HeaderWrap>
  );
};
