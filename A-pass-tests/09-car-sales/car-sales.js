function sales(carsSold) {
    let total = 0;
    for (let i = 0; i < carsSold.length; i++) {
        total += carsSold[i];
    }
    return total;
}

module.exports = sales;
