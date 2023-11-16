import React from 'react'
import Headbar from './component/Headbar'
import Card from './component/Card'
import Categories from './component/Categories'
import Sidebar from './component/Sidebar'

const App = () => {

  return (
    <main>
      
      <header>
        <Headbar />
      </header>

      <aside>
        <Sidebar />
      </aside>
      
      <section>
        <Categories />
      </section>

      <div>
        <Card />
      </div>

    </main>
  )
}

export default App