import React from 'react';
import DropdownNavbarItem from '@theme-original/NavbarItem/DropdownNavbarItem';
import CustomDropdown from './CustomDropdown';
import { dropdowns } from './dropdowns';

/**
 * Swizzle wrapper for DropdownNavbarItem.
 *
 * If the navbar item carries a className matching "custom-dropdown-<key>",
 * the matching config from dropdowns.js is used to render a CustomDropdown.
 * Otherwise the standard Docusaurus dropdown renders as usual.
 *
 * Usage in docusaurus.config.js:
 *   {
 *     type: 'dropdown',
 *     label: 'VPS',
 *     className: 'custom-dropdown-vps',
 *     items: [{ type: 'docSidebar', sidebarId: 'vpsrootSidebar' }],
 *   }
 */
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
