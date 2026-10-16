import React from 'react'
import Section1 from './Component/Section1/Section1'
import Section2 from './Component/Section2/Section2'

const App = () => {
  const users = [
             {
              img:'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
               ,paragraph:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, doloremque illo. Eaque voluptate praesentium dolores!'
               ,tag:'Satisfied',
               bgcolour:'blue'
             },
             {
              img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPbHtYplUhdpzdUB0Nh07SXpVmce787Bx7La1-agBXzA&s=10'
               ,paragraph:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, doloremque illo. Eaque voluptate praesentium dolores!'
               ,tag:'Underserved',
                bgcolour:'lightseagreen'
             },
             {
               img:'https://images.pexels.com/photos/8134173/pexels-photo-8134173.jpeg?cs=tinysrgb&dpr=1&w=500'
               ,paragraph:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, doloremque illo. Eaque voluptate praesentium dolores!'
               ,tag:'Underbanked',
                bgcolour:'pink'
             }

             , {
               img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxKTaUXjdGOuiSKQuctHbtQA2VT8SpqH0u3xf2qABHSSaGSVrF8N1sPT4q&s=10'
               ,paragraph:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, doloremque illo. Eaque voluptate praesentium dolores!'
               ,tag:'Underbanked',
                bgcolour:'red'
             }
             , {
               img:'https://images.unsplash.com/photo-1555421689-43cad7100750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
               ,paragraph:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, doloremque illo. Eaque voluptate praesentium dolores!'
               ,tag:'Underbanked',
                bgcolour:'darkgray'
             }
  ]
  return (
    <div >
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
