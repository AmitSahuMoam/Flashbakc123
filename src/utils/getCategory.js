const getCategory = (string) => {
  let type;

  if (string === 'sunnies') type = 'white';
  if (string === 'clothes') type = 'black';

  return type;
};

export default getCategory;
