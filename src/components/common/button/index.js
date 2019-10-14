import styled from "styled-components";

const Button = styled.button`
  position: relative;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  width: ${props => (props.width ? props.width : "max-content")};
  text-transform: ${props => (props.textNormal ? "initial" : "uppercase")};
  letter-spacing: 1px;
  font-family: ${props => props.theme.font.medium};

  &:focus {
    outline: none;
  }
  &:before {
    margin-left: 10px;
    display: flex;
    flex: 1;
  }

  ${props =>
    props.beforeContent &&
    `
      &:before {
        content: '${props.beforeContent}';
        position: 'absolute';
      };
    `};

  ${props =>
    props.afterContent &&
    `
      &:after {
        content: '${props.afterContent}';
        margin-right: 10px;
        display: flex;
        flex: 1;
        font-size: 10px;
        text-transform: capitalize;
      };
    `};

  ${props => {
    switch (props.size) {
      case "small":
        return "padding: .425rem .5rem; font-size: 10px;";
      case "large":
        return "padding: .875rem 1rem";
      default:
        return "padding: .625rem 1.25rem";
    }
  }};
  ${props =>
    props.marginT &&
    `
      margin-top: ${props.marginT}px;
    `};
  ${props =>
    props.marginL &&
    `
      margin-left: ${props.marginL}px;
    `};
  ${props =>
    props.marginR &&
    `
      margin-right: ${props.marginR}px;
    `};
  ${props =>
    props.marginB &&
    `
      margin-bottom: ${props.marginB}px;
    `};
  ${props =>
    props.fullWidth &&
    `
        width: 100%;
    `};
  ${props => {
    switch (props.variant) {
      case "outlined":
        return `border: 1px solid ${
          props.theme.color[props.color || "default"]
        };
                    color: ${props.theme.color[props.color || "default"]};
                    background-color: transparent;
                    &:hover {
                      background: ${
                        props.theme.color[props.color || "default"]
                      };
                      color: #fff;
                      transition: 0.2s all;
                    }`;
      case "soft":
        return `background: ${props.theme.color[props.color || "default"]}24;
                    color: ${props.theme.color[props.color || "default"]};
                    &:hover {
                      box-shadow: 0 2px 1px -1px ${
                        props.theme.color[props.color || "default"]
                      }33,
                                  0 1px 1px 0 ${
                                    props.theme.color[props.color || "default"]
                                  }26,
                                  0 1px 3px 0 ${
                                    props.theme.color[props.color || "default"]
                                  }1A;
                    }`;
      case "link":
        return `background: transparent;
                    padding: 0;
                    color: ${props.theme.color[props.color || "default"]};`;
      default:
        return `background: ${props.theme.color[props.color || "default"]};
                    color: #fff;
                    &:hover {
                      box-shadow: 0 2px 1px -1px ${
                        props.theme.color[props.color || "default"]
                      }33,
                                  0 1px 1px 0 ${
                                    props.theme.color[props.color || "default"]
                                  }26,
                                  0 1px 3px 0 ${
                                    props.theme.color[props.color || "default"]
                                  }1A;
                    }`;
    }
  }};
  ${props =>
    props.disabled &&
    `
        color: ${props.theme.grey.dark};
        background: ${props.theme.grey.veryLightGrey};
        cursor: initial;
        &:hover {
          box-shadow: none;
        }
    `};

  ${props =>
    props.alignSelf &&
    `
			align-self: ${props.alignSelf};
		`};
`;

export default Button;
