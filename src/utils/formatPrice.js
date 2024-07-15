const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'inr',
});

const formatPrice = (number) => formatter.format(number);

export default formatPrice;
