import { Listbox } from "@headlessui/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function HeadlessSelect({ value, onChange, options, label }) {
  return (
    <div className="select-wrapper">
      {label && <span className="select-label">{label}</span>}

      <Listbox value={value} onChange={onChange}>
        <div className="listbox">
          <Listbox.Button className="listbox-button">
            {value}
            <KeyboardArrowDownIcon fontSize="small" />
          </Listbox.Button>

          <Listbox.Options className="listbox-options">
            {options.map((option) => (
              <Listbox.Option key={option} value={option}>
                {({ focus, selected }) => (
                  <div
                    className={`listbox-option ${
                      focus ? "focused" : ""
                    } ${selected ? "selected" : ""}`}
                  >
                    {option}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}