import { useState, ChangeEvent, KeyboardEvent, useRef } from "react";

interface OTPInputProps {
  length: number;
}

const OTPInput: React.FC<OTPInputProps> = ({ length }) => {
  const inputClass =
    "border border-gray-400 rounded-lg w-[2.313rem] h-[2.688rem] text-center text-3xl text-gray-800";

  const [otp, setOTP] = useState<string[]>(Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    Array(length).fill(null)
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = e.target.value;

    // Move to the next input if available
    if (index < length - 1 && updatedOTP[index] !== "") {
      inputRefs.current[index + 1]?.focus();
    }

    setOTP(updatedOTP);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      // Move to the previous input on backspace when the current input is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex justify-around">
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(input) => (inputRefs.current[index] = input)}
          className={inputClass}
        />
      ))}
    </div>
  );
};

export default OTPInput;
