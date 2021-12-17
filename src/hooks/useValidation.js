import React from "react";

export default function useValidation(user, setError) {
  const checkInputErrors = () => {
    if (!user.firstName.trim()) {
      setError(prevError => ({...prevError, firstName: true}));
    }
    
    if (!user.lastName.trim()) {
      setError(prevError => ({...prevError, lastName: true}));
    }

    if (!user.passport.trim() || user.passport.length !== 10) {
      setError(prevError => ({...prevError, passport: true}));
    }

    if (!user.birthplace.trim()) {
      setError(prevError => ({...prevError, birthplace: true}));
    }

    if (+user.birthdate.day === 0 || +user.birthdate.month === 0 || +user.birthdate.year === 0) {
      setError(prevError => ({...prevError, birthdate: true}));
    }

    const formValid = user.firstName.trim() && user.lastName.trim() && user.passport.trim() && user.passport.length === 10 && user.birthplace.trim() && +user.birthdate.day !== 0 && +user.birthdate.month !== 0 && +user.birthdate.year !== 0;

    return formValid;
  }

  return { checkInputErrors };
}
