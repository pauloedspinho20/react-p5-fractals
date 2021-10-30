// GET RANDOM COLOR FROM PALETTE
const getRandomFromPalette = palette => {
  const rand = Math.floor(Math.random() * (palette.length - 0));
  return palette[rand];
};

export default getRandomFromPalette;
