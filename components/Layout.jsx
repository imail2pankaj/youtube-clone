import React from 'react'
import { Navbar, Sidebar } from './';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Sidebar />
    {children}
  </>
)

export default Layout