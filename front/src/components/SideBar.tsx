import React from 'react'
import { Link } from 'react-router-dom';


const SideBar = ({ items }: { items: { id: number; path: string; element: string }[] }) => {
  return (
    <nav>
      <div>
        <ul>
          {Array.isArray(items) && items.map((item) => (
            <li key={item.id}><Link to={`${item.path}`}>{item.path}</Link></li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default SideBar;