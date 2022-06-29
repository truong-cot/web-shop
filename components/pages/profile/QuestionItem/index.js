import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import styles from './QuestionItem.module.scss';

function QuestionItem({ data }) {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className={styles.container}>
            <div className={styles.question} onClick={handleShowAnswer}>
                <h4>{data.question}</h4>
                <div className={styles.icon}>{showAnswer ? <FiChevronUp /> : <FiChevronDown />}</div>
            </div>
            <div className={styles.answer}>{showAnswer ? <p>{data.answer}</p> : <div />}</div>
        </div>
    );
}

export default QuestionItem;
