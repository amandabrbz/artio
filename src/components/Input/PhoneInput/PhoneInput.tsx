import React from 'react';
import './PhoneInput.css';
import IntlTelInput from 'react-intl-tel-input';

const PhoneInput = (props: { id: string }) => {
  return (
    <IntlTelInput id={props.id} style={{ width: "100%", height: "32px" }}
      preferredCountries={['br']}
    />
  )
}

export default PhoneInput;
