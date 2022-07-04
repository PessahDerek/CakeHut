import React from 'react'

function apis() {
    const sendOrderApi = "http://localhost:4000/api/placeoder";
    const requestQuote = "http://localhost:4000/api/requestquote";
  return (
    {sendOrderApi, requestQuote}
  )
}

export default apis