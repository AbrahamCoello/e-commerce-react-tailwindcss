/**
 * The numberFormat function formats a number into a currency string using the specified locales and
 * options.
 * @param number - The number parameter is the number that you want to format.
 * @param [locales=en-US] - The `locales` parameter is a string that specifies the language or locale
 * to be used for formatting the number. It can be a BCP 47 language tag or an array of such tags. If
 * no value is provided, it defaults to 'en-US' (English language with US formatting).
 * @param [options] - The `options` parameter is an object that contains the formatting options for the
 * number. It has two properties:
 * @returns The function `numberFormat` returns a formatted string representation of the `number`
 * parameter, using the specified `locales` and `options`. The formatting is done according to the
 * `style` and `currency` options, which default to 'currency' and 'USD' respectively.
 */
const numberFormat = (
  number,
  locales = 'en-US',
  options = {
    style: 'currency',
    currency: 'USD',
  }
) => {
  return Intl.NumberFormat(locales, { ...options }).format(number);
};

export default numberFormat;
