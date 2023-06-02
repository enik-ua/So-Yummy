import css from './FormInput.module.css';
import switchStateImages from 'services/switchStateImages';
import warningValidation from 'services/warningValidation';
import { ReactComponent as ErorrIcon } from '../../assets/images/formInputIcons/erorr.svg';
import { forwardRef, useState } from 'react';

const FormInput = forwardRef(function FormInput(props, ref) {
  const {
    placeholder = '',
    type = '',
    switchImages = () => {},
    onBlur = () => {
      setModalOffset(false);
    },
    onChange = () => {},
    name = '',
    erorr,
    userInitName = '',
    value = '',
    formik,
    id,
    formInputArea = '',
    formInputUserMenu = '',
    formInputFooterForm = '',
    autoComplete,
    setModalOffset,
  } = props;
  const switchColor = (
    erorr,
    value,
    type,
    formInputUserMenu,
    formInputFooterForm,
    userInitName,
  ) => {
    if (!erorr && value && !warningValidation(value) && type === 'password') {
      return `${css.formInput} ${css.formInputInsecure}`;
    } else if (erorr && value) {
      return `${css.formInput} ${css.formInputInvalid} `;
    } else if (!erorr && value && value !== userInitName) {
      return `${css.formInput} ${css.formInputValid} `;
    } else if (formInputUserMenu) {
      return `${formInputUserMenu}`;
    } else if (formInputFooterForm) {
      return `${css.formInput} ${formInputFooterForm}`;
    } else {
      return `${css.formInput}`;
    }
  };
  const [visibility, setVisibility] = useState(true);
  const hendleClearClick = ref => {
    if (ref) return ref.current.focus(ref);
    else return;
  };
  const hendleButtonShown = () => {
    setVisibility(!visibility);
  };
  const onInputFocus = e => {
    e.stopPropagation();
    setModalOffset(true);
  };
  return (
    <div className={formInputArea}>
      <input
        className={switchColor(
          erorr,
          value,
          type,
          formInputUserMenu,
          formInputFooterForm,
          userInitName,
        )}
        ref={ref}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        id={id}
        onClick={onInputFocus}
      />
      <span className={css.formIcon}>{switchImages(name)}</span>
      <span className={css.formStateIcon}>
        {switchStateImages(erorr, value, formInputUserMenu, name, userInitName)}
      </span>
      {value && (
        <button
          type="button"
          onMouseEnter={hendleButtonShown}
          onMouseLeave={hendleButtonShown}
          onClick={e => {
            formik.setFieldValue(`${name}`, '');
            hendleClearClick(ref);
            hendleButtonShown();
          }}
          style={{ opacity: visibility ? '0' : '1' }}
          className={css.formClearButtonIcon}
        >
          <ErorrIcon />
        </button>
      )}
    </div>
  );
});

export default FormInput;
