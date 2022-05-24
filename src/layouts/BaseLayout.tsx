import React, {useEffect} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';

export default function BaseLayout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(location)
  }, [location])

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
