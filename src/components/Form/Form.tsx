import React from 'react';
import Label from '../Label/Label'
import Input from '../Input/Input'
import Select from '../Select/Select'

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
        <Select id="phoneNumber"/>
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
        <Label htmlFor="example" name="this is an example" className="disabled"/>
        <Input id="example"/>
      </fieldset>
    </form>
  );
}

export default Forms;
