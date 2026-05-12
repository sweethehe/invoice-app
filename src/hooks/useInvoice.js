import { useState } from "react";

const getInitialInvoice = () => ({
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

export const useInvoice = () => {
  const [invoiceList, setInvoiceList] = useState(() => {
    const saved = localStorage.getItem("melio-invoices");
    if (saved) {
      return JSON.parse(saved);
    }
    return {};
  });

  const [invoice, setInvoice] = useState(getInitialInvoice());

  // F O N C T I O N S   G L O B A L E S (Navigation & Sauvegarde)

  const saveInvoice = () => {
    setInvoiceList((prevList) => {
      const newList = {
        ...prevList,
        [invoice.details.number]: invoice
      };
      
      localStorage.setItem("melio-invoices", JSON.stringify(newList));
      return newList;
    });
  };

  const loadInvoice = (invoiceId) => {
    if (invoiceList[invoiceId]) {
      setInvoice(invoiceList[invoiceId]);
    }
  };

  const createNewInvoice = () => {
    setInvoice(getInitialInvoice());
  };

  // F O N C T I O N S   D ' E D I T I O N

  const addItem = () => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      items: [
        ...prevInvoice.items,
        { description: "", quantity: 1, unit: "h", price: 0 },
      ],
    }));
  };

  const updateField = (section, field, value) => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      [section]: {
        ...prevInvoice[section],
        [field]: value,
      },
    }));
  };

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

  const updateNote = (newNote) => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      notes: newNote
    }));
  };

  const updateIban = (newIban) => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      iban: newIban
    }));
  };

  const removeItem = (index) => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      items: prevInvoice.items.filter((item, i) => i !== index),
    }));
  };

  const updateLogo = (newLogo) => {
    setInvoice((prevInvoice) => ({
      ...prevInvoice,
      logo: newLogo
    }));
  };

  return { 
    invoice, 
    invoiceList, 
    setInvoice, 
    saveInvoice,
    loadInvoice,
    createNewInvoice,
    addItem, 
    updateItem, 
    updateField, 
    updateIban, 
    updateNote, 
    updateLogo, 
    removeItem 
  };
};
