import React from 'react';
import { Button, Input, Select, MenuItem, Checkbox } from '@material-ui/core';
import { InputTitle } from '../style';
import { useParams } from 'react-router-dom';

function EditQuestionForm () {
  const token = localStorage.getItem('token');
  const [question, setQuestion] = React.useState('');
  const [limit, setLimit] = React.useState('');
  const [points, setPoint] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const [answer2, setAnswer2] = React.useState('');
  const [answer3, setAnswer3] = React.useState('');
  const [answer4, setAnswer4] = React.useState('');
  const quizId = useParams().quizId;
  const qId = parseInt(useParams().questionId);

  const questions = async () => {
    const response = await fetch(`http://localhost:5005/admin/quiz/${quizId}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: undefined,
    });
    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem('questions', JSON.stringify(data));
    }
  }
  questions();

  const questionList = localStorage.getItem('questions');
  const questionArray = JSON.parse(questionList).questions
  // Answer 1
  const EditQuestionAnswer1 = async () => {
    for (let n = 0; n < questionArray.length; n++) {
      if (questionArray[n].questionId === qId) {
      // Answer 1 exist
        let flag = 0
        for (let i = 0; i < questionArray[n].Answers.length; i++) {
          if (questionArray[n].Answers[i].AnswerId === '1') {
            questionArray[n].Answers[i] = ({
              AnswerId: '1',
              AnswerContent: answer,
              Correctness: document.getElementById('ckb1').checked,
            })
            flag = 1
          }
        }
        // Answer 1 not exist
        if (flag === 0) {
          questionArray[n].Answers.push({
            AnswerId: '1',
            AnswerContent: answer,
            Correctness: document.getElementById('ckb1').checked,
          })
        }
      }
    }
    await fetch(`http://localhost:5005/admin/quiz/${quizId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        questions: questionArray
      })
    });
    alert('Successfully saved')
  }

  // Answer 2
  const EditQuestionAnswer2 = async () => {
    for (let n = 0; n < questionArray.length; n++) {
      if (questionArray[n].questionId === qId) {
      // Answer 2 exist
        let flag = 0
        for (let i = 0; i < questionArray[n].Answers.length; i++) {
          if (questionArray[n].Answers[i].AnswerId === '2') {
            questionArray[n].Answers[i] = ({
              AnswerId: '2',
              AnswerContent: answer2,
              Correctness: document.getElementById('ckb2').checked,
            })
            flag = 1
          }
        }
        // Answer 2 not exist
        if (flag === 0) {
          questionArray[n].Answers.push({
            AnswerId: '2',
            AnswerContent: answer2,
            Correctness: document.getElementById('ckb2').checked,
          })
        }
      }
    }
    await fetch(`http://localhost:5005/admin/quiz/${quizId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        questions: questionArray
      })
    });
    alert('Successfully saved')
  }
  // Answer 3
  const EditQuestionAnswer3 = async () => {
    for (let n = 0; n < questionArray.length; n++) {
      if (questionArray[n].questionId === qId) {
      // Answer 3 exist
        let flag = 0
        for (let i = 0; i < questionArray[n].Answers.length; i++) {
          if (questionArray[n].Answers[i].AnswerId === '3') {
            questionArray[n].Answers[i] = ({
              AnswerId: '3',
              AnswerContent: answer3,
              Correctness: document.getElementById('ckb3').checked,
            })
            flag = 1
          }
        }
        // Answer 3 not exist
        if (flag === 0) {
          questionArray[n].Answers.push({
            AnswerId: '3',
            AnswerContent: answer3,
            Correctness: document.getElementById('ckb3').checked,
          })
        }
      }
    }
    await fetch(`http://localhost:5005/admin/quiz/${quizId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        questions: questionArray
      })
    });
    alert('Successfully saved')
  }
  // Answer 4
  const EditQuestionAnswer4 = async () => {
    for (let n = 0; n < questionArray.length; n++) {
      if (questionArray[n].questionId === qId) {
      // Answer 4 exist
        let flag = 0
        for (let i = 0; i < questionArray[n].Answers.length; i++) {
          if (questionArray[n].Answers[i].AnswerId === '4') {
            questionArray[n].Answers[i] = ({
              AnswerId: '4',
              AnswerContent: answer4,
              Correctness: document.getElementById('ckb4').checked,
            })
            flag = 1
          }
        }
        // Answer 4 not exist
        if (flag === 0) {
          questionArray[n].Answers.push({
            AnswerId: '4',
            AnswerContent: answer4,
            Correctness: document.getElementById('ckb4').checked,
          })
        }
      }
    }
    await fetch(`http://localhost:5005/admin/quiz/${quizId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        questions: questionArray
      })
    });
    alert('Successfully saved')
  }
  const EditQuestionUrl = async () => {
    for (let n = 0; n < questionArray.length; n++) {
      if (questionArray[n].questionId === qId) {
        questionArray[n].questionType = url
      }
    }
    await fetch(`http://localhost:5005/admin/quiz/${quizId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        questions: questionArray
      })
    });
    alert('Successfully attached')
  }

  const EditQuestionTypeSingle = async () => {
    for (let n = 0; n < questionArray.length; n++) {
      if (questionArray[n].questionId === qId) {
        questionArray[n].questionType = 'Single'
      }
    }
    await fetch(`http://localhost:5005/admin/quiz/${quizId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        questions: questionArray
      })
    });
  }

  const EditQuestionTypeMultiple = async () => {
    for (let n = 0; n < questionArray.length; n++) {
      if (questionArray[n].questionId === qId) {
        questionArray[n].questionType = 'Multiple'
      }
    }
    await fetch(`http://localhost:5005/admin/quiz/${quizId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        questions: questionArray
      })
    });
  }

  const EditQuestionPoint = async () => {
    for (let n = 0; n < questionArray.length; n++) {
      if (questionArray[n].questionId === qId) {
        questionArray[n].Points = points
      }
    }
    console.log(questionArray, qId)
    await fetch(`http://localhost:5005/admin/quiz/${quizId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        questions: questionArray
      })
    });
    alert('Successfully edited!')
  }

  const EditQuestionLimit = async () => {
    for (let n = 0; n < questionArray.length; n++) {
      if (questionArray[n].questionId === qId) {
        questionArray[n].Limit = limit
      }
    }
    await fetch(`http://localhost:5005/admin/quiz/${quizId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        questions: questionArray
      })
    });
    alert('Successfully edited!')
  }

  const EditQuestionName = async () => {
    for (let n = 0; n < questionArray.length; n++) {
      if (questionArray[n].questionId === qId) {
        questionArray[n].questionItself = question
      }
    }
    await fetch(`http://localhost:5005/admin/quiz/${quizId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        questions: questionArray
      })
    });
    alert('Successfully edited!')
  }

  return (
    <>
      <InputTitle>
        Edit question Content: <Input
          type = "text"
          onChange={e => setQuestion(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick = {EditQuestionName}>Edit</Button>
        <br/>
      </InputTitle>
      <InputTitle>
        Edit question TimeLimit: <Input
          type = "text"
          onChange={e => setLimit(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick = {EditQuestionLimit}>Edit</Button>
        <br/>
      </InputTitle>
      <InputTitle>
        Edit question Points: <Input
          type = "text"
          onChange={e => setPoint(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick = {EditQuestionPoint}>Edit</Button>
        <br/>
      </InputTitle>
      <InputTitle>
        Edit question Type :
        <Select defaultValue={'Single'}>
          <MenuItem value = {'Single'} selected onClick = {EditQuestionTypeSingle}> Single Choice </MenuItem>
          <MenuItem value = {'Multiple'} onClick = {EditQuestionTypeMultiple}> Multiple Choice </MenuItem>
        </Select>
        <br/>
      </InputTitle>
      <InputTitle>
        Attach a Youtube video Url or Photo Url: <Input
          type = "text"
          onChange={e => setUrl(e.target.value)}
        />
        <Button variant='contained' color='secondary' onClick = {EditQuestionUrl}>Attach</Button>
        <br/>
      </InputTitle>
      <InputTitle>
        Answer 1: <Input
          type = "text"
          onChange={e => setAnswer(e.target.value)}
        /> Correctness <Checkbox id = "ckb1"/>
        <Button variant='contained' color='inherit' onClick = {EditQuestionAnswer1}>Save</Button>
        <br/>
      </InputTitle>
      <InputTitle>
        Answer 2: <Input
          type = "text"
          onChange={e => setAnswer2(e.target.value)}
        /> Correctness <Checkbox id = "ckb2"/>
        <Button variant='contained' color='inherit' onClick = {EditQuestionAnswer2}>Save</Button>
        <br/>
      </InputTitle>
      <InputTitle>
        Answer 3: <Input
          type = "text"
          onChange={e => setAnswer3(e.target.value)}
        /> Correctness <Checkbox id = "ckb3"/>
        <Button variant='contained' color='inherit' onClick = {EditQuestionAnswer3}>Save</Button>
        <br/>
      </InputTitle>
      <InputTitle>
        Answer 4: <Input
          type = "text"
          onChange={e => setAnswer4(e.target.value)}
        /> Correctness <Checkbox id = "ckb4"/>
        <Button variant='contained' color='inherit' onClick = {EditQuestionAnswer4}>Save</Button>
        <br/>
      </InputTitle>
    </>
  )
}

export default EditQuestionForm;
