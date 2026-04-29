// F O N C T I O N S

// calculer le total hors taxe de la facture
export const calculateSubtotal = (items) => {
  return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
};

// calculer le taux de la TVA sur le cout total
export const calculateTaxAmount = (subtotal, taxRate) => {
    return subtotal * taxRate / 100;
}

// calculer le total TTC
export const calculateTotal = (subtotal, taxAmount) => {
  return subtotal + taxAmount;
};
