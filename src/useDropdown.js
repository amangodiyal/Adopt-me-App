import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const x = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => {
    return (
      <label htmlFor={x}>
        {label}
        <select
          id={label}
          value={state}
          onChange={e => updateState(e.target.value)}
          onBlur={e => updateState(e.target.value)}
          disabled={!options.length}
        >
          <option value="all">all</option>
          {options.map(item => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    );
  };
  return [state, Dropdown, updateState];
};
export default useDropdown;
