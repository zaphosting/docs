import React from 'react';
import DropdownNavbarItem from '@theme-original/NavbarItem/DropdownNavbarItem';
import CustomDropdown from './CustomDropdown';
import { dropdowns } from './dropdowns';

export default function DropdownNavbarItemWrapper(props) {
  const match = props.className?.match(/custom-dropdown-(\w+)/);
  const configKey = match?.[1];
  const config = configKey ? dropdowns[configKey] : null;

  if (config) {
    return (
      <CustomDropdown
        config={config}
        configKey={configKey}
        label={props.label}
        mobile={props.mobile}
        onClick={props.onClick}
      />
    );
  }

  return <DropdownNavbarItem {...props} />;
}
