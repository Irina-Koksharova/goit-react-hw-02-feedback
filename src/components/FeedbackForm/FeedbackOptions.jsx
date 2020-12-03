import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

function FeedbackForm({ options, onLeaveFeedback }) {
  return (
    <>
      <ul className={s.buttonList}>
        <li className={s.buttonItem}>
          <button className={s.button} type="button" onClick={onLeaveFeedback}>
            Good
          </button>
        </li>
        <li className={s.buttonItem}>
          <button className={s.button} type="button" onClick={onLeaveFeedback}>
            Neutral
          </button>
        </li>
        <li className={s.buttonItem}>
          <button className={s.button} type="button" onClick={onLeaveFeedback}>
            Bad
          </button>
        </li>
      </ul>
    </>
  );
}

FeedbackForm.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackForm;
