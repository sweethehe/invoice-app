import { useState } from "react";

export const useInvoice = () => {
  const [invoice, setInvoice] = useState({
    sender: { name: "", address: "", email: "", siret: "" },
    client: { name: "", address: "", email: "" },
    details: { number: "", date: "", dueDate: "" },
    items: [{ description: "", quantity: 1, unit: "h", price: 0 }],
    notes: "",
    taxRate: 20,
  });

  // F O N C T T I O N S

  // add item
  const addItem = () => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      items: [
        ...prevInvoice.items,
        { description: "", quantity: 1, unit: "h", price: 0 },
      ],
    }));
  };

  // update item
  const updateItem = (index, field, value) => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      items: prevInvoice.items.map((item, i) => {
        if (i === index) {
          return { ...item, [field]: value };
        }
        return item;
      })
    }));
  };

  // remove item
  const removeItem = (index) => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      items: prevInvoice.items.filter((item, i) => i !== index)
    }));
  };

  return { invoice, setInvoice, addItem, updateItem, removeItem };
};
