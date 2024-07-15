// /* eslint-disable no-unused-expressions */
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
import { useEffect, useState } from "react";
import AdminLayout from "../../../components/AdminLayout";
import { getPhotoStories, deletePhotoStory } from "../../../services/PhotoStories";
import useFetchData from "../../../customHooks/useFetchData";

function PhotoStories() {
  const { photoStoriesData, fetchPhotoStories } = useFetchData();

  useEffect(() => {
    fetchPhotoStories();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletePhotoStory(id);
      fetchPhotoStories();
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
              <a href="/admin/photostories/create">
                <Button>Create</Button>
              </a>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHead>
                  <TableHeadCell>ID</TableHeadCell>
                  <TableHeadCell>First Name</TableHeadCell>
                  <TableHeadCell>Second Name</TableHeadCell>
                  <TableHeadCell>State</TableHeadCell>
                  <TableHeadCell>Image</TableHeadCell>
                  <TableHeadCell>
                    <span className="sr-only">Edit</span>
                  </TableHeadCell>
                </TableHead>
                <TableBody className="divide-y">
                  {photoStoriesData?.map((data) => (
                    <TableRow
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      key={data?.id}
                    >
                      <TableCell>{data?.id}</TableCell>
                      <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {data?.firstPersonName}
                      </TableCell>
                      <TableCell> {data?.secondPersonName}</TableCell>
                      <TableCell>{data?.state}</TableCell>
                      <TableCell>
                        <img
                          src={data?.image}
                          alt="image"
                          style={{ height: "20px", width: "20px" }}
                        />
                      </TableCell>
                      <TableCell>
                        <a
                          href={`/admin/photostories/edit/${data?.id}`}
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

export default PhotoStories;
