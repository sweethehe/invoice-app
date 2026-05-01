export function FormSection({ title, sectionName, data, updateField }) {
  return (
    <div className="form-section">
      <h3>{title}</h3>

      <div className="form-group">
        <input
          type="text"
          placeholder="Nom"
          value={data.name}
          onChange={(e) => updateField(sectionName, "name", e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Adresse"
          value={data.address}
          onChange={(e) => updateField(sectionName, "address", e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => updateField(sectionName, "email", e.target.value)}
        />
      </div>
    </div>
  );
}
