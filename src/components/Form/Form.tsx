import React from 'react';
import Label from './Label/Label'
import Input from './Input/AnyInput/Input'
import PhoneInput from './Input/PhoneInput/PhoneInput'
import Button  from "./Button/Button";

import './Form.css';

function Forms() {
  return (
    <form className="Form">
      <fieldset>
        <Label htmlFor="example" name="this is an example" className="disabled"/>
        <Input id="example"/>
      </fieldset>
      <fieldset>
        <Label htmlFor="example" name="this is an example" className="disabled"/>
        <Input id="example"/>
      </fieldset>
      <fieldset>
        <Label htmlFor="phoneNumber" name="Phone Number" className="default"/>
        <br/>
        <PhoneInput id="phoneNumber"/>
      </fieldset>
      <fieldset>
        <Label htmlFor="example" name="this is an example" className="disabled"/>
        <Input id="example"/>
      </fieldset>
      <fieldset>
        <Label htmlFor="example" name="this is an example" className="disabled"/>
        <Input id="example"/>
      </fieldset>
      <fieldset>
        <Button name="view"/>
      </fieldset>
    </form>
  );
}

export default Forms;
