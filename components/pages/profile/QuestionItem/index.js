import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

import styles from './QuestionItem.module.scss';

function QuestionItem() {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className={styles.container}>
            <div className={styles.question} onClick={handleShowAnswer}>
                <h4>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in</h4>
                <div className={styles.icon}>{showAnswer ? <FiChevronUp /> : <FiChevronDown />}</div>
            </div>
            <div className={styles.answer}>
                {showAnswer ? (
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </p>
                ) : (
                    <div />
                )}
            </div>
        </div>
    );
}

export default QuestionItem;
