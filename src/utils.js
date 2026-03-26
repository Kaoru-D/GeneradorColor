/**
 * Determina si el texto sobre un color de fondo debe ser negro o blanco,
 * usando la fórmula de luminancia percibida del estándar W3C.
 * Cada canal RGB tiene un peso distinto porque el ojo humano no percibe
 * todos los colores con la misma intensidad (el verde se percibe más brillante).
 * Si el brillo calculado supera 128 (sobre 255), el fondo es claro → texto negro.
 * De lo contrario, el fondo es oscuro → texto blanco.
 *
 * @param {string} hex - Color en formato hex con o sin '#' (ej: '#ff0000' o 'ff0000')
 * @returns {string} '#000000' o '#ffffff'
 */
export const getTextColor = (hex) => {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? '#000000' : '#ffffff';
};
