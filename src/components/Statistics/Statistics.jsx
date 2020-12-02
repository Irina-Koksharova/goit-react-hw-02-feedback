import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <h2>Statistics</h2>
      <ul>
        <li className={s.statisticsItem}>Good: {good}</li>
        <li className={s.statisticsItem}>Neutral: {neutral}</li>
        <li className={s.statisticsItem}>Bad: {bad}</li>
      </ul>

      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}</p>
    </>
  );
}

export default Statistics;
