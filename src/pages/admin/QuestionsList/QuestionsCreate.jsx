import { useForm } from 'react-hook-form';
import { Button, Card, Label, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../../components/AdminLayout';
import { createQuestionAnswer } from '../../../services/Questions';

function QuestionCreate() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const { question, answer } = data;
      const response = await createQuestionAnswer({ question, answer });
      if (response.error) {
        console.error("Error creating question:", response.error);
      } else {
        navigate('/admin/questions')
        console.log("Question created successfully:", response.data);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  return (
    <AdminLayout>
      <div className="p-5 w-1/2 mx-auto pt-20">
        <Card>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center justify-end gap-5">
              <a href="/admin/questions">
                <Button color="gray">Back</Button>
              </a>
              <Button type="submit">Submit</Button>
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

export default QuestionCreate;
