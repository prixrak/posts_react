import { useMemo } from 'react';

export const usePagination = (totalPages) => {
  const pagesArray = useMemo(() => {
    let pagesArr = [];
    for (let index = 0; index < totalPages; index++) pagesArr.push(index + 1);
    return pagesArr;
  }, [totalPages]);
  return pagesArray;
}