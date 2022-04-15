import React from 'react';
import { Button, Input } from '@material-ui/core';
import { InputTitle } from '../style';
import { useParams } from 'react-router-dom';
import GetQuestionsForm from './GetQuestionsForm'
const questionObjectList = []
function EditQuizForm () {
  const [question, setQuestion] = React.useState('');
  const quizId = useParams().quizId;
  const [Id, setId] = React.useState(1);
  const questionObject = {
    questionId: Id,
    questionItself: question,
    questionType: 'single',
    Limit: '0',
    Points: '0',
    Url: '',
    Answers: []
  }
  const [name, setName] = React.useState('');
  const [thumbnail, setThumbnail] = React.useState('');
  const token = localStorage.getItem('token');
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

  const editquizName = async () => {
    await fetch(`http://localhost:5005/admin/quiz/${quizId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name,
      })
    });
  }

  const editquizThumbnail = async () => {
    await fetch(`http://localhost:5005/admin/quiz/${quizId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        thumbnail,
      })
    });
  }

  const editquizQuestion = async () => {
    questionObjectList.push(questionObject);
    await fetch(`http://localhost:5005/admin/quiz/${quizId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        questions: questionObjectList,
      })
    });
  }

  return (
    <>
      <InputTitle>
        New Name: <Input
          type = "text"
          onChange={e => setName(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick = {() => editquizName}>Edit Name</Button>
        <br/>
      </InputTitle>

      <InputTitle>
        New Thumbnail: <Input
          type = "text"
          onChange={e => setThumbnail(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick = { () => editquizThumbnail}>Edit Thumbnail</Button>
        <br/>
      </InputTitle>

      <InputTitle>
        New Quesiton:<Input
          type = "text"
          onChange={e => setQuestion(e.target.value)}
        />
        <Button variant = 'contained' color = 'primary' onClick={ () => { editquizQuestion(); setId(Id + 1); } }>Add a new question</Button>
        <br/>
      </InputTitle>
      <GetQuestionsForm Id={Id}/>
    </>
  )
}

export default EditQuizForm;
