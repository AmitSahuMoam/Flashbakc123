import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import AdminLayout from "../../../components/AdminLayout";
import { getBlogs, deleteBlog } from "../../../services/Blogs";
import useFetchData from "../../../customHooks/useFetchData";

function AdminBlogs() {
  const { blogsData, fetchBlogs } = useFetchData();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id);
      fetchBlogs();
    } catch (err) {
      console.error("Error deleting question:", err.message);
    }
  };

  return (
    <div>
      <AdminLayout>
        <div className="p-5 w-full">
          <Card>
            <div className="ml-auto">
              <a href="/admin/blogs/create">
                <Button>Create</Button>
              </a>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHead>
                  <TableHeadCell>ID</TableHeadCell>
                  <TableHeadCell>Title</TableHeadCell>
                  <TableHeadCell>Description</TableHeadCell>
                  <TableHeadCell>Tags</TableHeadCell>
                  <TableHeadCell>Reading Time</TableHeadCell>
                  <TableHeadCell>State</TableHeadCell>
                  <TableHeadCell>Cover Image</TableHeadCell>
                  <TableHeadCell>
                    <span className="sr-only">Edit</span>
                  </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                  {blogsData?.map((data) => (
                    <TableRow
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      key={data?.id}
                    >
                      <TableCell>{data?.id}</TableCell>
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {data?.title}
                      </TableCell>
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {data?.description}
                      </TableCell>
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {data?.tags}
                      </TableCell>
                      <TableCell> {data?.readingTime}</TableCell>
                      <TableCell> {data?.state}</TableCell>
                      <TableCell className="flex justify-center">
                        <img src={data?.coverImage} width={20} height={20} />
                      </TableCell>
                      <TableCell>
                        <a
                          href={`/admin/blogs/edit/${data?.id}`}
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

export default AdminBlogs;
