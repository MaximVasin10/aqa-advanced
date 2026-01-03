console.log("Filter the orders");

const orders = [
  {
    id: 1,
    price: 255,
    isPaid: true,
  },
  {
    id: 2,
    price: 1000,
    isPaid: false,
  },
  {
    id: 3,
    price: 100,
    isPaid: true,
  },
  {
    id: 4,
    price: 550,
    isPaid: true,
  },
];

function filterOrders(orders) {
  const paidOrdersIds = [];
  let totalSum = 0;
  let paidSum = 0;

  for (let order = 0; order < orders.length; order++) {
    if (orders[order].isPaid) {
      paidOrdersIds.push(orders[order].id);
      paidSum += orders[order].price;
    }
    totalSum += orders[order].price;
  }

  console.log("Paid order ids", paidOrdersIds);
  console.log("Total sum", totalSum);
  console.log("Paid sum", paidSum);
}

filterOrders(orders);
