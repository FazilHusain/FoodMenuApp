import React from 'react'

export default function CatMenu({filterItem,catItems}) {
  return (
    <>
       <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
            {
                catItems.map((elem,index)=>{
                  return  <button
                      className="btn btn-warning"
                          onClick={() => filterItem(elem)}
                 key={index} >
                  {elem}
                </button>
                })
            }
          {/* <button className="btn btn-warning" onClick={() => setItems(Menu)}>
            All
          </button> */}
        </div>
      </div>
       
    </>
  )
}
