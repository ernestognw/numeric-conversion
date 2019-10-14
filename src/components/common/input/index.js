import React, { Component, Fragment } from 'react';
import {
  Container,
  PseudoInput,
  PseudoSelect,
  Label,
  Message,
  LeftIconContainer,
  OptionsButton,
  InputGroup,
  Prefix
} from './elements';

class Input extends Component {
  state = {
    active: false
  };

  toggleActive = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  render() {
    const { ...props } = this.props;
    const { active } = this.state;
    return (
      <Container
        className={props.className}
        marginT={props.marginT}
        marginB={props.marginB}
        marginL={props.marginL}
        marginR={props.marginR}
        onFocus={this.toggleActive}
        onBlur={this.toggleActive}
      >
        {props.label && (
          <Label font="light" htmlFor={props.id}>
            {props.label}
            {props.required && '*'}
          </Label>
        )}
        {props.leftIcon && (
          <LeftIconContainer
            success={props.success}
            warning={props.warning}
            error={props.error}
            message={props.message}
            active={active}
          >
            {props.leftIcon}
          </LeftIconContainer>
        )}
        {props.select ? (
          <Fragment>
            <PseudoSelect
              id={props.id}
              required={props.required}
              value={props.value}
              onChange={props.onChange}
              success={props.success}
              warning={props.warning}
              error={props.error}
              name={props.name}
              leftIcon={props.leftIcon}
              placeholderColor={props.placeholderColor}
            >
              {props.children}
            </PseudoSelect>
            {props.selectIcon || <OptionsButton label={props.label} message={props.message} />}
          </Fragment>
        ) : (
          <InputGroup>
            {props.prefix && (
              <Prefix
                leftIcon={props.leftIcon}
                success={props.success}
                warning={props.warning}
                error={props.error}
              >
                {props.prefix}
              </Prefix>
            )}
            <PseudoInput
              id={props.id}
              type={props.type}
              required={props.required}
              value={props.value}
              onChange={props.onChange}
              onKeyPress={props.onKeyPress}
              success={props.success}
              warning={props.warning}
              error={props.error}
              name={props.name}
              className={props.className}
              leftIcon={!props.prefix && props.leftIcon}
              placeholder={props.placeholder}
              readOnly={props.readOnly}
              disabled={props.disabled}
              pattern={props.pattern}
              prefix={props.prefix}
              align={props.align}
              onFocus={props.onFocus}
              onBlur={props.onBlur}
              min={props.min}
              max={props.max}
              maxLength={props.maxLength}
              onInvalid={props.onInvalid}
            />
          </InputGroup>
        )}
        {props.message && (
          <Message success={props.success} warning={props.warning} error={props.error}>
            {props.message}
          </Message>
        )}
      </Container>
    );
  }
}

export default Input;
