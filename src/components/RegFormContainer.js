import React, { useState, useEffect } from 'react';
import useValidation from '../hooks/useValidation';
import RegistrationForm from './RegistrationForm';

export default function RegFormContainer() {
  const [user, setUser] = useState({firstName: '', lastName: '', passport: '', birthplace: '', birthdate: {day: 0, month: 0, year: 0}});
  const [error, setError] = useState({firstName: false, lastName: false, passport: false, birthplace: false, birthdate: false});
  const { checkInputErrors } = useValidation(user, setError);
  const [sendForm, setSendForm] = useState(false);

  useEffect(() => {
    if (document.cookie) {
      const data = document.cookie.split('; ').filter(item => item.includes('user-form'))[0];
      if (data) {
        const userForm = data.split('=')[1];
        setUser(JSON.parse(userForm));
      }
    }
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser(prevUser => ({...prevUser, [name]: value}));
    setError(prevError => ({...prevError, [name]: false}));
    setSendForm(false);
  }

  const handleSelect = (event) => {
    const { name, value } = event.target;
    setUser(prevUser => ({...prevUser, birthdate: {...prevUser.birthdate, [name]: value}}));
    setError(prevError => ({...prevError, birthdate: false}));
    setSendForm(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (checkInputErrors()) {
      const userForm = JSON.stringify(user);
      document.cookie = "user-form=" + userForm;
      setUser({firstName: '', lastName: '', passport: '', birthplace: '', birthdate: {day: 0, month: 0, year: 0}});
      setSendForm(true);
    }
  }

  return (
    <>
      <RegistrationForm 
        user={user}
        error={error}
        sendForm={sendForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleSelect={handleSelect}
      />
    </>
  )
}
