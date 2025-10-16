export const Input = ({
  star,
  label,
  onChange,
  value,
  type,
  className,
  ref,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={label} className="font-medium">
        {label} {<span className="text-red-500">{star}</span>}
      </label>
      <input
        className={className}
        type={type}
        id={label}
        ref={ref}
        onChange={onChange}
        value={type === "file" ? undefined : value}
      />
    </div>
  );
};
