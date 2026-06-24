'use client';

import posthog from 'posthog-js';

// Client island so the CSS-only Claude/Codex toggle can emit an event.
export function CustomizationToggle() {
  return (
    <input
      type="checkbox"
      name="customization-toggle"
      id="customization-toggle"
      defaultChecked
      onChange={(event) =>
        posthog.capture('cli_toolkit_toggled', {
          tool: event.target.checked ? 'claude' : 'codex',
        })
      }
      className="absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
    />
  );
}
