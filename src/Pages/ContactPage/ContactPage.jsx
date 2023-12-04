import React, { useEffect } from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import { useLocation } from 'react-router-dom';

const ContactPage = () => {
  const location = useLocation();

  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });

  }, [location]);
  return (
    <div>
      <ContactForm />
    </div>
  )
}

export default ContactPage
