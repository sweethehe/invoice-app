import { useState } from "react";

export const useInvoice = () => {
  const [invoice, setInvoice] = useState({
    sender: {
      name: "Enora",
      address: "Défense",
      email: "enora@gmail.com",
      siret: "1234",
    },
    client: { name: "Etam", address: "Paris", email: "etam@gmail.com" },
    details: { 
      number: `INV-${Math.floor(Math.random() * 10000)}`, 
      date: new Date().toLocaleDateString('fr-FR'), 
      dueDate: "" 
    },
    items: [
      { description: "Journée de travail", quantity: 8, unit: "h", price: 20 },
    ],
    notes: "Aucune remarque pour l'instant...",
    iban: "Pas d'iban ?!",
    logo: "",
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

  // update Note
  const updateNote = (newNote) => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      notes: newNote
    }));
  };

    // update Iban
  const updateIban = (newIban) => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      iban: newIban
    }));
  };

  // remove item
  const removeItem = (index) => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      items: prevInvoice.items.filter((item, i) => i !== index),
    }));
  };

  // update logo
  const updateLogo = (newLogo) => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      logo: newLogo
    }));
  };

  return { invoice, setInvoice, addItem, updateItem, updateField, updateIban, updateNote, updateLogo, removeItem };
};
