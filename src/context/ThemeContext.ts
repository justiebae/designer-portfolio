import React from "react";

const ThemeContext = React.createContext<any>({
  theme: '',
  toggleTheme: () => {}
})

export default ThemeContext;