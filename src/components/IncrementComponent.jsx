import React from 'react'

export const IncrementComponent = React.memo(({increment}) => {

    console.log('Estoy redibjuando')
    
  return (
    <button className='btn btn-success' onClick={() => increment(5)}>Incrementar + 1</button>
  )
}
)