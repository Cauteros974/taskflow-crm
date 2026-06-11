import { Listbox } from "@headlessui/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function HeadlessSelect({ value, onChange, options, label}) {
    return (
        <div className="select-wrapper">
            {label && <span className="select-label">{label}</span>}
            <Listbox value={value} onChange={onChange}>
                <div className="listbox">
                    <Listbox.Button className="listbox-button">
                        {value}
                        <KeyboardArrowDownIcon fontSize="small" />
                    </Listbox.Button>
                </div>
            </Listbox>
        </div>
    )
}