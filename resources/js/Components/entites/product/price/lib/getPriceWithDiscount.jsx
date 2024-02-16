export function getPriceWithDiscount(number, percent) {
    const percentageValue = (number * percent) / 100;
    return number - percentageValue;
}