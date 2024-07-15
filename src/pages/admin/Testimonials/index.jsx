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
import { useEffect } from "react";
import AdminLayout from "../../../components/AdminLayout";
import useFetchData from "../../../customHooks/useFetchData";
import { deleteBlog } from "../../../services/Blogs";

function TestimonialsAdmin() {
  const { testimonialsData, fetchTestimonials } = useFetchData();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteBlog(id);
      fetchTestimonials();
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
              <a href="/admin/testimonials/create">
                <Button>Create</Button>
              </a>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHead>
                  <TableHeadCell>ID</TableHeadCell>
                  <TableHeadCell>Title</TableHeadCell>
                  <TableHeadCell>Description</TableHeadCell>
                  <TableHeadCell>Image</TableHeadCell>
                  <TableHeadCell>
                    <span className="sr-only">Edit</span>
                  </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                  {testimonialsData?.map((data) => (
                    <TableRow
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      key={data?.id}
                    >
                      <TableCell>{data?.id}</TableCell>
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {data?.title}
                      </TableCell>
                      <TableCell> {data?.description}</TableCell>
                      <TableCell>
                        <img src={data?.image} width={20} height={20} />
                      </TableCell>
                      <TableCell>
                        <a
                          href={`/admin/testimonials/edit/${data?.id}`}
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

export default TestimonialsAdmin;
