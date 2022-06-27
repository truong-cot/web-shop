export const convertCoin = (coin) => {
    return coin ? coin.toLocaleString('en-GB', { maximumFractionDigits: 4 }) : 0;
};
