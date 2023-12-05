import React from 'react'
import Typewriter  from 'typewriter-effect'

function Text() {
  return (
    <div className="typewriter text-pink-500  text-xl md:text-3xl  font-bold font-serif">
      <Typewriter
        options={{
          strings: ["Coperate wellness Pakage", "Group Insureance", "Food,Fuel and Multi Ward Card"],
          autoStart: true,
          loop: true,
        }}

        delay={25} // Set the delay to 25 milliseconds (faster typing)
        deleteSpeed={50} // Set the delete speed to 50 milliseconds (faster deletion)
      />
    </div>

  )
}

export default Text