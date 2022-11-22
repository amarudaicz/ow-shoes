function convertNumber(number) {
    let convert = new Intl.NumberFormat('en-AR', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(number);
  
    return convert;
}