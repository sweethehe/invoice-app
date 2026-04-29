export function FormSection({ title, sectionName, data, updateField }) {
  return (
    <div>
        {/* L A B E L */}
      <h3>{title}</h3>

      {/* I N P U T */}
      <input
        type="text"
        placeholder="Nom"
        value={data.name}
        onChange={(e) => updateField(sectionName, "name", e.target.value)}
      />
      <input
        type="text"
        placeholder="Adresse"
        value={data.address}
        onChange={(e) => updateField(sectionName, "address", e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => updateField(sectionName, "email", e.target.value)}
      />
    </div>
  );
}

