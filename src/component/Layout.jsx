import React from 'react'
import MenuList from "./MenuList";
import MainRouter from './MainRouter';
import Styles from "./Layouts.module.scss";
import AppBar  from './Appbar';


const Layout = () => {
  return (
    <div className={Styles.MainLayout}>
     <AppBar/>
      <div className={Styles.MainWrapper}>
      <aside><MenuList/></aside>
      <main className={Styles.MainContainer}><MainRouter/></main>
      </div>
    </div>
  )
}

export default Layout
