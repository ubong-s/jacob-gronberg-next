import { useEffect, useLayoutEffect } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const formatHeadline = (headline: string) => {
  let words = headline.split(" ");
  let headlineWordCount = words.length;

  if (headlineWordCount === 1) {
    return `${headline}`;
  }

  let firstPart = words.slice(0, words.length - 1).join(" ");
  let lastPart = words[words.length - 1];
  return `${firstPart} <span>${lastPart}</span>`;
};

export const formatDate = (date: Date) => {
  let arr = new Date(date).toString().substring(0, 15).split(" ");

  return {
    weekday: arr[0],
    month: arr[1],
    day: arr[2],
    year: arr[3],
  };
};
