import { ReturnLinkProps } from "@/types";
import Link from "next/link";
import styled from "styled-components";
import { ArrowLeft } from "../icons";

const ReturnLinkWrap = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ReturnLink = ({ returnLink, returnText }: ReturnLinkProps) => {
  return (
    <>
      {returnLink && returnText ? (
        <ReturnLinkWrap href={returnLink}>
          <ArrowLeft />
          Back to {returnText}
        </ReturnLinkWrap>
      ) : null}
    </>
  );
};
