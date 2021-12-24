import loaderSpinner from './Spinner.svg';
const s = require('./HW10.module.css');

const Preloader = () => {
  return (
    <div>
      <img className={s.loaderSpinner} src={loaderSpinner} alt="Preloader"/>
    </div>
  )
}

export default Preloader;
