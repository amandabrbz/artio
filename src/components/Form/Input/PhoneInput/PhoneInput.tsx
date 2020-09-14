import React, { Component, FormEvent } from 'react';
import './PhoneInput.css';
import IntlTelInput from 'react-intl-tel-input';
export interface PhoneProps {
  id: string;
}
export interface PhoneState {
  value: any;
  phone: any;
}
class PhoneInput extends Component<PhoneProps, PhoneState> {
  constructor(props: PhoneProps) {
    super(props);
    this.state = {
      phone: '',
      value: '',
    };
    this.changePhone = this.changePhone.bind(this);
  }

  public changePhone(event: FormEvent<HTMLInputElement>): void {
    let phone = event.currentTarget.value;
    const re = /^[0-9\b]+$/;

    if (phone === '' || re.test(phone)) {
      this.setState({ value: phone })
    }
  }

  public render(): JSX.Element {
    return (
      <IntlTelInput id={this.props.id} preferredCountries={['br']} style={{ width: "100%" }}  onChange={this.changePhone} />
    );
  }
}

export default PhoneInput;
