import React from "react";
import { days, months, years } from '../data/date';

export default function RegistrationForm(props) {
  const { user, error, sendForm, handleChange, handleSelect, handleSubmit } = props;
  
  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h1 className="registration-form__title">Регистрация</h1>
      <div className="form-group">
        <label className="registration-form__hint" htmlFor="firstName">Имя</label>
        <input 
          className="registration-form__input" 
          id="firstName"
          name="firstName"
          type="text"
          placeholder="Имя"
          value={user.firstName}
          onChange={handleChange}
        />
        {
          error.firstName && <span className="error-message">Укажите имя</span>
        }
      </div>
      <div className="form-group">
        <label className="registration-form__hint" htmlFor="lastName">Фамилия</label>
        <input 
          className="registration-form__input" 
          id="lastName"
          name="lastName"
          type="text"
          placeholder="Фамилия"
          value={user.lastName}
          onChange={handleChange}
        />
        {
          error.lastName && <span className="error-message">Укажите фамилию</span>
        }
      </div>
      <div className="form-group">
        <label className="registration-form__hint" htmlFor="passport">Номер и серия паспорта</label>
        <input 
          className="registration-form__input" 
          id="passport"
          name="passport"
          type="text"
          placeholder="Укажите 10 цифр без пробелов"
          value={user.passport}
          onChange={handleChange}
        />
        {
          error.passport && <span className="error-message">Укажите серию и номер паспорта</span>
        }
      </div>
      <div className="form-group">
        <label className="registration-form__hint" htmlFor="birthplace">Место рождения</label>
        <input 
          className="registration-form__input" 
          id="birthplace"
          name="birthplace"
          type="text"
          placeholder="Место рождения"
          value={user.birthplace}
          onChange={handleChange}
        />
        {
          error.birthplace && <span className="error-message">Укажите место рождения</span>
        }
      </div>
      <div className="form-group birthdate">
        <span className="registration-form__hint">Дата рождения</span>
        <div className="selects-group">
          <div className="select-wrapper">
            <select 
              className="select select-day" 
              name="day" 
              value={user.birthdate.day} 
              onChange={handleSelect}
            >
              <option value="0">День</option>
              {
                days.map(day => <option key={day} value={day}>{day}</option>)
              }
            </select>
          </div>
          <div className="select-wrapper">
            <select 
              className="select select-month" 
              name="month" 
              value={user.birthdate.month} 
              onChange={handleSelect}
            >
              <option value="0">Месяц</option>
              {
                months.map(month => <option key={month} value={month}>{month}</option>)
              }
            </select>
          </div>
          <div className="select-wrapper">
            <select 
              className="select select-year" 
              name="year" 
              value={user.birthdate.year} 
              onChange={handleSelect}
            >
              <option value="0">Год</option>
              {
                years.map(year => <option key={year} value={year}>{year}</option>)
              }
            </select>
          </div>
        </div>
        {
          error.birthdate && <span className="error-message">Укажите полную дату рождения</span>
        }
      </div>
      <div className="button-wrapper">
        <button className="registration-form__button">Регистрация</button>
        {
          sendForm && <span className="send-form-message">Данные успешно отправлены!</span>
        }
      </div>
    </form>
  )
}