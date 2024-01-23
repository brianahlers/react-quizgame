import React, { useState, useEffect } from 'react';
import questions from './Questions';

const Quiz = () => {
    const [selectedQuestions, setSelectedQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        const selectQuestions = () => {
            const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
            const selected = shuffledQuestions.slice(0, 10);
            setSelectedQuestions(selected);
        };

        selectQuestions();
    }, []);

    const handleAnswerSelection = (selectedAnswer) => {
        const correctAnswer = selectedQuestions[currentQuestionIndex].correctAnswer;
        if (selectedAnswer === correctAnswer) {
            setScore(score + 1);
        }

        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < selectedQuestions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            endQuiz();
        }
    };

    const endQuiz = () => {
        saveScoreAndDisplayLeaderboard();
    };

    const saveScoreAndDisplayLeaderboard = () => {
        console.log(`Your score is ${score}`)
    };

    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const questionText = currentQuestion ? currentQuestion.question : '';

    return (
        <div>
            <h1>Quiz</h1>
            <h2>{questionText}</h2>
            {currentQuestion && currentQuestion.options.map((option, index) => (
                <Question key={index} question={question} />
            ))}
        </div>
    );
};

export default Quiz;
