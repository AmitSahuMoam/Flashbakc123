import React, { useEffect } from "react";
import { Button, Card, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import AdminLayout from "../../../components/AdminLayout";
import useFetchData from "../../../customHooks/useFetchData";

import { deleteQuestionAnswer } from "../../../services/Questions";

function QuestionsList() {
  const { questionsData, loading, error, fetchQuestionsAnswersAdmin } = useFetchData();

  useEffect(() => {
    fetchQuestionsAnswersAdmin();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteQuestionAnswer(id);
      fetchQuestionsAnswersAdmin();
    } catch (err) {
      console.error("Error deleting question:", err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(questionsData);

  return (
    <div>
      <AdminLayout>
        <div className="p-5 w-full">
          <Card>
            <div className="ml-auto">
              <a href="/admin/questions/create">
                <Button>Create</Button>
              </a>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHead>
                  <TableHeadCell style={{ width: "15%" }}>ID</TableHeadCell>
                  <TableHeadCell style={{ width: "20%" }}>Question</TableHeadCell>
                  <TableHeadCell>Answer</TableHeadCell>
                  <TableHeadCell>
                    <span className="sr-only">Edit</span>
                  </TableHeadCell>
                  <TableHeadCell>
                    <span className="sr-only">Delete</span>
                  </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                  {questionsData?.map((data) => (
                    <TableRow
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      key={data?.id}
                    >
                      <TableCell>{data?.id}</TableCell>
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white overflow-hidden overflow-ellipsis max-w-xs">
                        {data?.question}
                      </TableCell>
                      <TableCell className="whitespace-nowrap overflow-hidden overflow-ellipsis max-w-xs">{data?.answer}</TableCell>
                      <TableCell>
                        <a
                          href={`/admin/questions/edit/${data?.id}`}
                          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                        >
                          Edit
                        </a>
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => handleDelete(data?.id)}>Delete</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </AdminLayout>
    </div>
  );
}

export default QuestionsList;
