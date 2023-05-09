import { useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { PageLoader } from "../layout/pageloader.component";
import { useIsomorphicLayoutEffect } from "@/utils/helpers";
import { gsap } from "gsap";

const MainComponent = styled.div<{ routingPageOffset: number }>`
  &.page-enter-active,
  &.page-exit-active {
    height: 100vh;
    overflow: hidden;
    background-color: ${(props) => props.theme.colors.body};
    opacity: 0;
  }

  &.page-exit {
    opacity: 0;
  }

  &.page-enter {
    opacity: 1;
  }

  &.page-exit-active {
    main {
      transform: translateY(-${(props) => props.routingPageOffset}px);
    }
  }
`;

export const PageTransition = ({
  children,
  route,
  routingPageOffset,
}: {
  children: React.ReactNode;
  route: string;
  routingPageOffset: number;
}) => {
  const pageLoaderRef = useRef<any>();
  const [pageLoading, setPageLoading] = useState(false);
  let tl = useRef();

  const playTransition = () => {
    if (!pageLoading) {
      //@ts-ignore
      tl.current.play(0);
      setPageLoading(true);
    }
  };

  const stopTransition = () => {
    setPageLoading(false);
  };

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (!pageLoaderRef.current) {
        return;
      }

      //@ts-ignore
      tl.current = gsap
        .timeline({ repeat: 1, repeatDelay: 0.5, yoyo: true, paused: true })
        .fromTo(
          pageLoaderRef.current,
          {
            yPercent: -100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
          }
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <TransitionGroup>
        <CSSTransition
          key={route}
          classNames="page"
          timeout={1000}
          onEntering={playTransition}
          onExit={stopTransition}
        >
          <MainComponent routingPageOffset={routingPageOffset}>
            {children}
          </MainComponent>
        </CSSTransition>
      </TransitionGroup>
      {/* <PageLoader refEl={pageLoaderRef} /> */}
    </>
  );
};
