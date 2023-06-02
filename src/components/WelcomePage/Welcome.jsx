import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';
import css from './Welcome.module.css';
import Logo from 'reusableComponents/Logo/Logo';

const Welcome = () => {
  return (
    <>
      <div className={css.backgroundImg}>
        <div className={css.welcomeContent}>
          <div className={css.welcomeIcon}>
            <Logo width={'100%'} height={'100%'} />
          </div>

          <div className={css.welcomeTextFormat}>
            <h1 className={css.welcomeTitle}>Welcome to the app!</h1>
            <p className={css.welcomeText}>
              Is not only a recipe app, it is, in fact, your cookbook. You can
              add your own recipes to save them for the future.
            </p>
          </div>
          <div className={css.btnGroup}>
            <div
              className={css.registrationBtn}
              style={{
                fontSize: 'inherit',
                lineHeight: '1.5',
              }}
            >
              <SuperBtn lnk title="Registration" to="/register" />
            </div>
            <div className={css.signinBtn}>
              <SuperBtn
                lnk
                to="/signin"
                otlnInv
                welcome
                title="Sign in"
              ></SuperBtn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
