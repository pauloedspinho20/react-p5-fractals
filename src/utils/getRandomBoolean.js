// GET RANDOM NUMBER BETWEEN 0 AND 1
const getRandomBoolean = () => {
  const rand = Math.random(0, 1);
  return (rand > 0.5);
};

export default getRandomBoolean;
