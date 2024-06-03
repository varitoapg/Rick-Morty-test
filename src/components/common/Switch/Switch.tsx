type SwitchProps = {
  isChecked: boolean;
  onChange: () => void;
  values: string[];
};

export const Switch = ({ isChecked, onChange, values }: SwitchProps) => {
  return (
    <div className="flex justify-center mb-4">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value="viewMode"
          className="sr-only peer"
          checked={!isChecked}
          onChange={onChange}
        />
        <span className="mr-3 text-sm font-medium text-white-900 dark:text-gray-300">
          {values[0]}
        </span>
        <span className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></span>
        <span className="ms-3 text-sm font-medium text-white-900 dark:text-gray-300">
          {values[1]}
        </span>
      </label>
    </div>
  );
};
