import React from 'react';
import { Button, Input, Box } from '@material-ui/core';
import { InputTitle } from '../style';
import { useParams, Link } from 'react-router-dom';
import GetQuestionsForm from './GetQuestionsForm'

// Component
const questionObjectList = []
function EditQuizForm () {
  // constants
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

  // Getting Question List
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

  // Edit quiz Name
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

  // Edit Thumbnail
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

  // Add a question to the quiz
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
        Edit Name: <Input
          type = "text"
          onChange={e => setName(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick = {() => editquizName}>Edit</Button>
        <br/>
      </InputTitle>

      <InputTitle>
        Edit Thumbnail: <Input
          type = "text"
          onChange={e => setThumbnail(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick = { () => editquizThumbnail}>Edit</Button>
        <br/>
      </InputTitle>

      <InputTitle>
        New Question:<Input
          type = "text"
          onChange={e => setQuestion(e.target.value)}
        />
        <Button variant = 'contained' color = 'primary' onClick={ () => { editquizQuestion(); setId(Id + 1); } }>Add</Button>
        <br/>
      </InputTitle>
      <GetQuestionsForm Id={Id}/>
      <Box textAlign='right' margin={1}>
        <Link to='/dashboard'>
          <Button variant='contained' color='primary'>Back to Dashboard</Button>
        </Link>
      </Box><br />

    </>
  )
}

export default EditQuizForm;
