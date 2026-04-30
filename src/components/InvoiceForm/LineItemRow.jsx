export function LineItemRow({type, value, onChange}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}
