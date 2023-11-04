import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Paginator from './components/Paginator'
import UserList from './components/UserList'

function App() {
    return (
    <>
        <Header />
        <main className="main">
            <UserList />
            <Paginator />
        </main>
        <Footer />
    </>
  )
}

export default App
