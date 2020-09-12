import React from 'react';
import './Select.css';
import IntlTelInput from 'react-intl-tel-input';

const Select = (props: { id: string } ) => {
  return (
    <>
    <IntlTelInput id={props.id} style={{width: "100%", height: "32px"}}
      preferredCountries={['br']}
      // onPhoneNumberChange={onChange()}
      // onPhoneNumberBlur={onBlur()}
    />
    </>
  )
}

export default Select;
