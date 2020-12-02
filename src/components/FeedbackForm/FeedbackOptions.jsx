import s from './FeedbackOptions.module.css';

function FeedbackForm({ options, onLeaveFeedback }) {
  return (
    <>
      <h1>Please, leave your feedback</h1>
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

export default FeedbackForm;
