interface RadioGroupProps {
  name: string;
  options: any;
  value?: string; // For controlled component
  onChange?: (value: any) => void; // For controlled component
  errorText?: string;
  className?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  options,
  value,
  onChange,
  errorText,
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = e.target.value;
    const selectedOption = options.find(
      (opt: any) => opt.value === selectedValue
    );

    if (onChange) {
      // Pass both value and label1 if it exists
      onChange({
        value: selectedValue,
        ...(selectedOption?.label1 && { label1: selectedOption.label1 }),
      });
    }
  };

  return (
    <div className={`${className ? className : "flex flex-col"}`}>
      {options.map((option: any, index: number) => (
        <label
          key={index}
          htmlFor={`${name}-${option.value}`}
          className={`
            flex items-center mb-2 border rounded-lg px-2 py-1 cursor-pointer
            ${
              value === option.value
                ? "bg-green-50 border-green-500"
                : "bg-gray-100 border-gray-300"
            }
            hover:border-green-300 transition-colors duration-200
          `}
        >
          <input
            type="radio"
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={handleChange}
            className="
              mr-2 h-4 w-4
              appearance-none
              rounded-full
              border-2
              border-gray-300
              checked:border-green-500
              checked:bg-white
              checked:ring-2
              checked:ring-green-200
              focus:outline-none
              transition-all
              duration-200
              relative
              after:content-['']
              after:absolute
              after:top-1/2
              after:left-1/2
              after:-translate-x-1/2
              after:-translate-y-1/2
              after:w-2
              after:h-2
              after:rounded-full
              after:bg-green-500
              after:opacity-0
              checked:after:opacity-100
            "
          />
          <div className="ps-3 flex items-center justify-between w-full">
            <div>
              <p className="text-base font-semibold">{option.label}</p>
            </div>
            <div>
              {option.label1 && (
                <p className="mt-1 text-base font-bold">৳{option.label1}</p>
              )}
            </div>
          </div>
        </label>
      ))}
      {errorText && <p className="text-red-500 text-sm mt-1">{errorText}</p>}
    </div>
  );
};

export default RadioGroup;
