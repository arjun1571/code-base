import React from "react";

interface TermsCheckboxProps {
  name: string;
  registerProperty?: any;
  errorText?: any;
  className?: string;
  label?: string;
  rightLabel?: string;
  labelClassName?: string;
}

const TermsCheckbox: React.FC<TermsCheckboxProps> = ({
  name,
  registerProperty,
  errorText,
  className = "",
  label,
  rightLabel,
  labelClassName,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center">
        <input
          id={name}
          type="checkbox"
          {...registerProperty}
          className="mr-2 w-4.5 h-4.5 border-gray-300"
        />
        <div
          className={`${labelClassName} text-sm  text-gray-600 font-normal cursor-pointer dark:text-gray-300`}
        >
          <label
            // htmlFor={name}
            className="text-base"
          >
            {label}
          </label>
          {rightLabel && (
            <p className="text-gray-400  ms-2 text-base">{rightLabel}</p>
          )}
        </div>
      </div>
      {errorText && <p className="text-red-500 text-sm mt-1">{errorText}</p>}
    </div>
  );
};

export default TermsCheckbox;
