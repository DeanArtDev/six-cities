const ONE_STAR_PRESENTS = 20;

const getRatingStars = (value: number): number | 0 => {
  if (value === 0 || value === undefined || isNaN(value)) {
    return 0;
  }

  return Math.ceil(value) * ONE_STAR_PRESENTS;
};

export default getRatingStars;
