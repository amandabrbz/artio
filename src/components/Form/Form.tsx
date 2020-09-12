import React from 'react';
import './Form.css';
import Label from '../Label/Label'
import Input from '../Input/Input'

function Forms() {
  return (
    <form className="Form">
      <fieldset>
        <Label htmlFor="example" name="this is an example"/>
        <Input disabled={true} placeholder="not available" id="example"/>
      </fieldset>
      <fieldset>
        <Label htmlFor="example" name="this is an example"/>
        <Input disabled={true} placeholder="not available" id="example"/>
      </fieldset>
      <fieldset>
        <Label htmlFor="phoneNumber" name="Phone Number"/>
        <Input disabled={false} placeholder="phone number" id="phoneNumber"/>
      </fieldset>
      <fieldset>
        <Label htmlFor="example" name="this is an example"/>
        <Input disabled={true} placeholder="not available" id="example"/>
      </fieldset>
      <fieldset>
        <Label htmlFor="example" name="this is an example"/>
        <Input disabled={true} placeholder="not available" id="example"/>
      </fieldset>
      <fieldset>
        <Label htmlFor="example" name="this is an example"/>
        <Input disabled={true} placeholder="not available" id="example"/>
      </fieldset>
    </form>
  );
}

export default Forms;
