//import Spinner from '../Shared/Spinner';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  return (
    <>
      <form className={classes.form} onSubmit={() => {}}>
        <div className={classes.control}>
          <label htmlFor='store-name'>Store Name</label>
          <input type='text' id='store-name' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='store-email'>Store Email</label>
          <input type='text' id='store-email' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='store-location'>Store Location</label>
          <input type='text' id='store-location' required />
        </div>
        <div className={classes.control}>
          <label htmlFor='store-contact'>Store Contact</label>
          <input type='text' id='store-contact' required />
        </div>
        <div className={classes.action}>
          <button>Add Store</button>
        </div>
      </form>
    </>
  );
};

export default ProfileForm;
