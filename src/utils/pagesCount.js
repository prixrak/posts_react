// here are functions to do some operations 

export const getPagesCount = (totalPages, limit) => {
  return Math.ceil(totalPages/limit);
}