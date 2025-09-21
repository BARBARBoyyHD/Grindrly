import { useState, useEffect } from "react";

interface TimePickerProps {
  value?: string; // e.g. "02:30 PM"
  onChange?: (time: string) => void;
}

interface SelectBoxProps<T extends string | number> {
  value: T;
  options: T[];
  onChange: (val: T) => void;
}

function SelectBox<T extends string | number>({
  value,
  options,
  onChange,
}: SelectBoxProps<T>) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as T)}
      className="
        w-full px-3 py-2 rounded-xl 
        bg-white/10 backdrop-blur-sm 
        border border-white/20 
        text-white placeholder-gray-300
        shadow-sm shadow-black/20
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-[#FE9A5D] focus:border-[#FE9A5D]
        hover:bg-white/20
      "
    >
      {options.map((opt) => (
        <option
          key={opt}
          value={opt}
          className="text-black bg-white hover:bg-gray-100"
        >
          {typeof opt === "number" ? String(opt).padStart(2, "0") : opt}
        </option>
      ))}
    </select>
  );
}

export default function TimePicker({ value, onChange }: TimePickerProps) {
  const [hour, setHour] = useState(
    value ? parseInt(value.split(":")[0]) : 12
  );
  const [minute, setMinute] = useState(
    value ? parseInt(value.split(":")[1].split(" ")[0]) : 0
  );
  const [period, setPeriod] = useState<"AM" | "PM">(
    value?.split(" ")[1] === "PM" ? "PM" : "AM"
  );

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  const periods: ("AM" | "PM")[] = ["AM", "PM"];

  const updateTime = (h: number, m: number, p: "AM" | "PM") => {
    const formatted = `${String(h).padStart(2, "0")}:${String(m).padStart(
      2,
      "0"
    )} ${p}`;
    onChange?.(formatted);
  };

  // ✅ trigger initial update if no value
  useEffect(() => {
    if (!value) {
      updateTime(hour, minute, period);
    }
  }, []); // run only once on mount

  return (
    <div className="flex gap-2 items-center">
      <SelectBox
        value={hour}
        options={hours}
        onChange={(newHour) => {
          setHour(Number(newHour));
          updateTime(Number(newHour), minute, period);
        }}
      />
      <SelectBox
        value={minute}
        options={minutes}
        onChange={(newMinute) => {
          setMinute(Number(newMinute));
          updateTime(hour, Number(newMinute), period);
        }}
      />
      <SelectBox
        value={period}
        options={periods}
        onChange={(newPeriod) => {
          setPeriod(newPeriod as "AM" | "PM");
          updateTime(hour, minute, newPeriod as "AM" | "PM");
        }}
      />
    </div>
  );
}
