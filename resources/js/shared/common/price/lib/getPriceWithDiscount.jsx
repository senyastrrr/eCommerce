export function getPriceWithDiscount(number, percent) {
    const percentageValue = (number * percent) / 100;
    return parseFloat(number - percentageValue).toFixed(2);
}