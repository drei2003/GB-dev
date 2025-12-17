# View Essay Page Component

This directory contains the React component for the "View Essay" page.

## Dark Mode Toggle

The component includes a button to toggle between light and dark themes.

### Code Snippet

```typescriptreact
          <button
            className="rounded border px-2 py-1"
            onClick={() => setIsDark((d) => !d)}
          >
            {isDark ? "Light" : "Dark"}
          </button>
```

### Functionality

- **`onClick`**: Toggles the `isDark` state variable.
- **Text**: Displays "Light" when in dark mode, and "Dark" when in light mode.
- **Styling**: The button has basic styling with rounded corners and a border.
