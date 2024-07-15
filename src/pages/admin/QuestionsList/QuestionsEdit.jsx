import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Label, TextInput } from 'flowbite-react';
import AdminLayout from '../../../components/AdminLayout';
import { editQuestionAnswer, fetchOneQuestionAnswer } from '../../../services/Questions';

function QuestionEdit() {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  const onSubmit = async (data) => {
    try {
      const response = await editQuestionAnswer(id, data);
      if (response) {
        navigate('/admin/questions');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  const fetchQuestionAnswer = async () => {
    const { data, error } = await fetchOneQuestionAnswer(id);
    if (error) {
      throw new Error('Error while fetching question and answer');
    } else {
      Object.keys(data[0]).forEach((key) => setValue(key, data[0][key]));
    }
  };

  useEffect(() => {
    if (id) {
      fetchQuestionAnswer();
    }
  }, [id]);

  return (
    <AdminLayout>
      <div className="p-5 w-1/2 mx-auto pt-20">
        <Card>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center justify-end gap-5">
              <a href="/admin/questions">
                <Button color="gray">Back</Button>
              </a>
              <Button type="submit">Edit</Button>
            </div>
            <div>
              <Label htmlFor="question" value="Question" className="mb-2 block" />
              <TextInput
                id="question"
                name="question"
                type="text"
                placeholder="Question"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('question', { required: true })}
              />
              {errors.question && <p className="text-red-500 text-sm">Question is required</p>}
            </div>
            <div>
              <Label htmlFor="answer" value="Answer" className="mb-2 block" />
              <TextInput
                id="answer"
                name="answer"
                type="text"
                placeholder="Answer"
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...register('answer', { required: true })}
              />
              {errors.answer && <p className="text-red-500 text-sm">Answer is required</p>}
            </div>
          </form>
        </Card>
      </div>
    </AdminLayout>
  );
}

export default QuestionEdit;
