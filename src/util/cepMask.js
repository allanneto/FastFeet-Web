const formatCep = string => {
  const a = string.substring(0, 5);
  const b = string.substring(5, 8);

  return `${a}-${b}`;
};

export default formatCep;
