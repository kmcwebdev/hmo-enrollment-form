import { format } from "date-fns";
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-date-picker/dist/entry.nostyle";
import { useFormContext } from "react-hook-form";
import { BsCalendar4Week } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

interface DatepickerProps {
  label: string;
  name: string;
  onChange?: (date: Date) => void;
  minDate?: Date;
  className?: string;
}

const TDatepicker: React.FC<DatepickerProps> = ({
  label,
  name,
  minDate,
  onChange,
  ...rest
}) => {
  const [state, setState] = useState<Date | null>(null);

  const isActive = useRef(false);

  useEffect(() => {
    isActive.current = true;
    return () => {
      isActive.current = false;
    };
  }, []);

  const {
    setValue,
    formState: { errors },
    getValues,
  } = useFormContext();

  useEffect(() => {
    if (isActive.current) {
      setState(getValues(name));
    }
  }, [name, getValues]);

  const handleChange = (e: Date) => {
    onChange && onChange(e);
    setState(e);
    setValue(name, e);
  };

  return (
    <div {...rest}>
      <label
        htmlFor={name}
        className="block mb-2.5 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <DatePicker
        className="w-full bg-white shadow-sm"
        onChange={handleChange}
        value={state}
        calendarIcon={<BsCalendar4Week className="text-gray-600" />}
        clearIcon={<GrClose className="text-gray-600" />}
        minDate={minDate}
      />
      {false && (
        <input
          className="w-full shadow-sm react-date-picker__wrapper"
          value={format(state || new Date(), "yyyy-MM-dd")}
          onChange={(foo) => console.log(foo.target.valueAsDate)}
          type="date"
        />
      )}
      {errors[name] && (
        <p className="mt-2 text-sm text-rose-600" id="email-error">
          {errors[name]?.message || "Something wen't wrong"}
        </p>
      )}
    </div>
  );
};

export default TDatepicker;
