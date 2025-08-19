const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
});

const dateFormatter = (date) =>
  new Intl.DateTimeFormat("pt-BR").format(new Date(date));

export { currencyFormatter, dateFormatter };
