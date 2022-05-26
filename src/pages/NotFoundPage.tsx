import React, {useContext, useEffect} from 'react';
import ThemeContext from '../context/ThemeContext';

export default function NotFoundPage() {
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    setTheme('white');

    return () => {
      setTheme('default');
    }
  }, [])

  return (
    <div>NotFoundPage</div>
  )
}
