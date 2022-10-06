import React, { useState, useEffect } from 'react';
import Term from './components/Term.js'
import FloatingWhatsApp from 'react-floating-whatsapp'

export default function App() {
  return (
    <div className='container'>
      <Term />
      <FloatingWhatsApp
      phoneNumber='35699910969'
      accountName='Abel Rogers'
      chatMessage='Hello there! 🤝 How can I help?'
      avatar='https://en.gravatar.com/userimage/182249634/9805a640c49f6391641fe4c2b123f73c.png?size=200'
      notification
      notificationDelay={30000}
      darkMode
      defaultMessage='Hello, I came across your site and want to get in touch' 
      />
    </div>
  )
}


