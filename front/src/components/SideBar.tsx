import React from 'react'

const SideBar = (items : any ) => {
  return (
    <nav>
      <div>
        <ul>
          { items.map((item : any) => (
            <li key={item.id}>{item.path}</li>
          ))}
        </ul>
      </div>

      <div>
        
      </div>
    </nav>
  )
}

export default SideBar