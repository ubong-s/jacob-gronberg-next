import { mediaQueries } from "@/styles";
import styled from "styled-components";

export const SingleExhibitionWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 10rem 1fr;
  gap: 3rem;
  padding: 5rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.muted};
  border-bottom: 1px solid ${(props) => props.theme.colors.muted};

  &:last-of-type {
    border-bottom: none;
  }

  .date {
    position: absolute;
    top: calc(50% + 5rem);
    left: 0;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colors.primary};

    .month {
      font-size: 2.4rem;
    }

    .day {
      font-size: 6.4rem;
    }
  }

  ${mediaQueries.tablet} {
    grid-template-columns: auto 1fr 80px;
    align-items: center;

    .date {
      position: relative;
      top: unset;
      left: unset;
      transform: unset;
    }
  }

  ${mediaQueries.desktop} {
    gap: 6rem;

    .date {
      text-align: right;
      justify-self: flex-end;

      .month {
        font-size: 3rem;
      }

      .day {
        font-size: 10rem;
      }
    }
  }
`;

export const SingleExhibitionTicketInfo = styled.div`
  flex: 1;

  .location {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  h3 {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.default};
    font-size: 3.2rem;
    margin: 2rem 0;

    span {
      display: inline-block;
      color: ${(props) => props.theme.colors.primary};
      text-transform: capitalize;
      margin-left: 1rem;
    }
  }

  .description {
    margin-bottom: 2rem;
  }

  .ticket__link {
    white-space: nowrap;
    color: ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  ${mediaQueries.desktop} {
    display: flex;
    align-items: center;
    gap: 10rem;

    .content {
      flex: 1;
    }

    .ticket__link {
      flex: 0.2;
    }

    h3 {
      font-size: 4rem;
    }
  }
`;
