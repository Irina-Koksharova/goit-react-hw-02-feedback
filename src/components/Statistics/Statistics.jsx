import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  const props = [
    { good },
    { neutral },
    { bad },
    { total },
    { positivePercentage },
  ];
  return (
    <ul>
      {props.map(prop => (
        <li className={s.statisticsItem} key={Object.keys(prop)}>
          {Object.keys(prop)}: {Object.values(prop)}
        </li>
      ))}
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
