import React from 'react';

import listQuestion from '../../api/question';
import NavProfile from './../../components/pages/profile/NavProfile';
import QuestionItem from './../../components/pages/profile/QuestionItem';
import ContentProfile from './../../components/pages/profile/ContentProfile';
import styles from './Question.module.scss';

function Question() {
    return (
        <div className={styles.container}>
            <div className="container">
                <div className={styles.main}>
                    <NavProfile />
                    <ContentProfile>
                        <div>
                            {listQuestion.map((item) => (
                                <QuestionItem key={item.id} data={item} />
                            ))}
                        </div>
                    </ContentProfile>
                </div>
            </div>
        </div>
    );
}

export default Question;
