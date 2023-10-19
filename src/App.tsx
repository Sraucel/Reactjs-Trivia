
import styles from './App.module.scss';
import StatBar from './components/StatBar';
import questions from "./questions.json";
import { Questions } from './types';
import { useState } from 'react';

function App() {
    const allQuestions = questions as unknown as Questions;

    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const[correctAnswers, setCorrectAnswers] = useState(0);
    const[incorrectAnswers, setIncorrectAnswers] = useState(0);

    return <div>
        <StatBar currentQuestion={currentQuestionIdx + 1} 
        totalQuestions={allQuestions.questions.length}
        correct={correctAnswers}
        incorrect={incorrectAnswers}

        />
    </div>;
}

export default App;
