import React from 'react'
import Buddy from "./Buddy"


const List = ({birthday}) => {

  return (
    <section>
      {birthday.map((buddy) => {
        return <Buddy key={buddy.id} {...buddy}/>})}
    </section>
  )
}

export default List
