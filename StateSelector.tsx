import React from 'react';

export interface StateSelectorProps {
  selectedState: string | null;
  onStateChange: (state: string | null) => void;
  className?: string;
}

export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh"
];

export const StateSelector: React.FC<StateSelectorProps> = ({
  selectedState,
  onStateChange,
  className = ""
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-sm font-medium text-slate-200">
        Select State / Territory
      </label>
      <div className="relative">
        <select
          value={selectedState || ""}
          onChange={(e) => onStateChange(e.target.value === "" ? null : e.target.value)}
          className="w-full bg-[#0B132B]/90 border border-amber-500/30 text-white rounded-xl px-4 py-3 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/50 appearance-none shadow-lg backdrop-blur-md cursor-pointer transition-all hover:border-amber-500/60"
        >
          <option value="" className="bg-[#0B132B] text-slate-400">
            Select a state
          </option>
          {INDIAN_STATES.map((state) => (
            <option key={state} value={state} className="bg-[#0B132B] text-white">
              {state}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-amber-400">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StateSelector;
