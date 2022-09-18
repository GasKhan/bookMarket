import { useMemo } from 'react';

export const DOTS = 'DOTS';

export const usePagination = (
  total: number,
  currentPage: number,
  siblingsCount: number = 1
) => {
  const pagination = useMemo(() => {
    if (total < 2) return null;

    const pagesCount = Math.ceil(total / 10);
    const pagesNumber = siblingsCount * 2 + 5;

    if (pagesCount <= pagesNumber) {
      return range(1, pagesCount);
    }

    const leftSibling = Math.max(currentPage - siblingsCount, 1);
    const rightSibling = Math.min(currentPage + siblingsCount, pagesCount);

    const shouldShowLeftDots = leftSibling > 2;
    const shouldShowRightDots = rightSibling < pagesCount - 2;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftSiblingsCount = 3 + 2 * siblingsCount;
      const leftRange = range(1, leftSiblingsCount);

      return [...leftRange, DOTS, pagesCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingsCount;
      const rightRange = range(pagesCount - rightItemCount + 1, pagesCount);

      return [1, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const centralRange = range(leftSibling, rightSibling);

      return [1, DOTS, ...centralRange, DOTS, pagesCount];
    }
  }, [total, currentPage, siblingsCount]);

  return pagination;
};

function range(start: number, end: number) {
  const length = end - start + 1;

  return Array.from({ length }, (_, ind) => ind + start);
}
