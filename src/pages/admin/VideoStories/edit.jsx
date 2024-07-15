import { Button, Card, FileInput, Label, TextInput } from "flowbite-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../../components/AdminLayout";
import {
  fetchOneVideoStory,
  updateVideoStory,
} from "../../../services/VideoStories";

function EditVideoStory() {
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
      await updateVideoStory(id, apiData);
      navigate("/admin/videostories");
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  };

  const fetchVideoStory = async () => {
    const { data, error } = await fetchOneVideoStory(id);
    if (error) {
      throw new Error("Error while fetching Testimonial");
    } else {
      Object.keys(data[0]).forEach((key) => setValue(key, data[0][key]));
    }
  };

  useEffect(() => {
    if (id) {
      fetchVideoStory();
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
                  <Label htmlFor="firstPersonName" value="First Name" />
                </div>
                <TextInput
                  id="firstPersonName"
                  name="firstPersonName"
                  type="text"
                  placeholder="First Name"
                  required
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  required={register("firstPersonName", { required: true })}
                />
                {errors.firstPersonName && (
                  <p className="text-red-500 text-sm">First Name is required</p>
                )}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="description" value="Second Name" />
                </div>
                <TextInput
                  id="secondPersonName"
                  name="secondPersonName"
                  type="text"
                  placeholder="Second Name"
                  required
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  required={register("secondPersonName", { required: true })}
                />
                {errors.secondPersonName && (
                  <p className="text-red-500 text-sm">
                    Second Name is required
                  </p>
                )}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="state" value="State" />
                </div>
                <TextInput
                  id="state"
                  name="state"
                  type="text"
                  placeholder="State"
                  required
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  required={register("state", { required: true })}
                />
                {errors.state && (
                  <p className="text-red-500 text-sm">State is required</p>
                )}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="narrativeLink" value="Narrative Link" />
                </div>
                <TextInput
                  id="narrativeLink"
                  name="narrativeLink"
                  type="text"
                  placeholder="Link"
                  required={register("narrativeLink")}
                />
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
export default EditVideoStory;
