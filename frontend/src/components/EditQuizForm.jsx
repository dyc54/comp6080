import React from 'react';
import { Button, Input } from '@material-ui/core';
import { InputTitle } from '../style';
import { useParams } from 'react-router-dom';

function EditQuizForm () {
  const quizId = useParams().quizId;
  const [question, setQuestion] = React.useState('');
  const questionObject = {
    questionId: '1',
    questionItself: question,
    questionType: 'single',
    Limit: '0',
    Points: '0',
  }
  const [name, setName] = React.useState('');
  const [thumbnail, setThumbnail] = React.useState('');
  const token = localStorage.getItem('token');
  console.log('quizid = ' + quizId)
  console.log('question = ' + question)
  console.log('question = ' + thumbnail)

  React.useEffect(() => {
    fetch(`http://localhost:5005/admin/quiz/${quizId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(response => response.json())
      .then(data => {
        console.log('data = ' + data.questions[0].question)
      });
  });

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
    await fetch(`http://localhost:5005/admin/quiz/${quizId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        questions: [
          questionObject
        ],
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
        <Button variant='contained' color='primary' onClick = {editquizName}>Edit Name</Button>
        <br/>
      </InputTitle>

      <InputTitle>
        New Thumbnail: <Input
          type = "text"
          onChange={e => setThumbnail(e.target.value)}
        />
        <Button variant='contained' color='primary' onClick = {editquizThumbnail}>Edit Thumbnail</Button>
        <br/>
      </InputTitle>

      <InputTitle>
        New Quesiton:<Input
          type = "text"
          onChange={e => setQuestion(e.target.value)}
        />
        <Button variant = 'contained' color = 'primary' onClick={ editquizQuestion }>Add a new question</Button>
        <br/>
      </InputTitle>

    </>
  )
}

export default EditQuizForm;
