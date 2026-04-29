import { useState } from "react";

export const useInvoice = () => {
  const [invoice, setInvoice] = useState({
    sender: {
      name: "Etam",
      address: "Paris",
      email: "etem@gmail.com",
      siret: "1234",
    },
    client: { name: "Enora", address: "Saint Ouen", email: "enora@gmail.com" },
    details: { 
      number: `INV-${Math.floor(Math.random() * 10000)}`, 
      date: new Date().toLocaleDateString('fr-FR'), 
      dueDate: "" 
    },
    items: [
      { description: "Journée de travail", quantity: 8, unit: "h", price: 20 },
    ],
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

  // update field
  const updateField = (section, field, value) => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      [section]: {
        ...prevInvoice[section],
        [field]: value,
      },
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
      }),
    }));
  };

  // remove item
  const removeItem = (index) => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      items: prevInvoice.items.filter((item, i) => i !== index),
    }));
  };

  return { invoice, setInvoice, addItem, updateItem, updateField, removeItem };
};
