import { useEffect, useState } from "react";
import { Button, Card, FileInput, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../../components/AdminLayout";
import {
  createTemonial,
  editTestimonial,
  fetchOneTestimonial,
} from "../../../services/Testimonials";

function TestimonialEdit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();

  const { id } = useParams();

  const onSubmit = async (data) => {
    const file = data.image[0];
    const apiData = {
      ...data,
      image: file,
    };
    try {
      const { data: responseData, error } = await editTestimonial(id, apiData);
      if (error) {
        console.error("Error editting testimonial", error);
      } else {
        navigate("/admin/testimonials");
        // Optionally, redirect or show a success message
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  const fetchTestimonial = async () => {
    const { data, error } = await fetchOneTestimonial(id);
    if (error) {
      throw new Error("Error while fetching Testimonial");
    } else {
      Object.keys(data[0]).forEach((key) => setValue(key, data[0][key]));
    }
  };

  useEffect(() => {
    if (id) {
      fetchTestimonial();
    }
  }, [id]);

  return (
    <div>
      <AdminLayout>
        <div className="p-5 w-1/2 mx-auto pt-20">
          <Card>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex items-center justify-end gap-5">
                <a href="/admin/testimonials">
                  <Button color="gray">Back</Button>
                </a>
                <Button type="submit">Submit</Button>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="title" value="Title" />
                </div>
                <TextInput
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Title"
                  required
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  required={register("title", { required: true })}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">Title is required</p>
                )}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Description" />
                </div>
                <TextInput
                  id="description"
                  name="description"
                  type="text"
                  placeholder="Description"
                  required
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  required={register("description", { required: true })}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">
                    Description is required
                  </p>
                )}
              </div>
              <div>
                <div>
                  <Label
                    htmlFor="file-upload-helper-text"
                    value="Upload file"
                  />
                </div>
                <FileInput
                  id="file-upload-helper-text"
                  helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)."
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  required={register("image", { required: true })}
                />
                {errors.image && (
                  <p className="text-red-500 text-sm">Image is required</p>
                )}
              </div>
            </form>
          </Card>
        </div>
      </AdminLayout>
    </div>
  );
}

export default TestimonialEdit;
