import { supabase } from "../supabaseClient/supabaseClient";
import DB_TABLES from "./dbTables";

export const uploadImageToStorage = async (file) => {
  if (file) {
    const { data, error } = await supabase.storage
      .from("blogs-images") // Ensure the bucket name is correct
      .upload(`public/${file.name}`, file);

    console.log("Data", data);

    if (error) {
      throw error;
    }

    const publicURL = supabase.storage
      .from("blogs-images")
      .getPublicUrl(`public/${file.name}`);

    return publicURL.data.publicUrl;
  }
  return null;
};

export const deleteBlog = async (id) => {
  try {
    const { data, error } = await supabase
      .from(DB_TABLES.BLOGSTABLE)
      .delete()
      .eq("id", id);
    if (error) {
      throw error;
    } else {
      return data;
    }
  } catch (error) {
    return null;
  }
};

export const getBlogs = async () =>
  supabase.from(DB_TABLES.BLOGSTABLE).select("*");

export const fetchOneBlog = async (id) =>
  supabase.from(DB_TABLES.BLOGSTABLE).select().eq("id", id);

// eslint-disable-next-line consistent-return
export const editBlog = async (id, values) => {
  try {
    const coverImage = await uploadImageToStorage(values.coverImage);
    const imageOne = await uploadImageToStorage(values?.imageOne);
    const imageTwo = await uploadImageToStorage(values?.imageTwo);
    const imageThree = await uploadImageToStorage(values?.imageThree);
    const imageFour = await uploadImageToStorage(values?.imageFour);
    const imageFive = await uploadImageToStorage(values?.imageFive);
    const imageSix = await uploadImageToStorage(values?.imageSix);

    const { data, error } = await supabase
      .from(DB_TABLES.BLOGSTABLE)
      .update({
        ...values,
        coverImage,
        imageOne,
        imageTwo,
        imageThree,
        imageFive,
        imageFour,
        imageSix,
      })
      .eq("id", id)
      .select();
    if (error) {
      throw error;
    } else {
      return { data };
    }
  } catch (error) {
    console.error(error);
  }
};

// eslint-disable-next-line consistent-return
export const createBlog = async (values) => {
  try {
    const coverImage = await uploadImageToStorage(values.coverImage);
    console.log("Image 1 Uploaded");
    const imageOne = await uploadImageToStorage(values?.imageOne);
    const imageTwo = await uploadImageToStorage(values?.imageTwo);
    const imageThree = await uploadImageToStorage(values?.imageThree);
    const imageFour = await uploadImageToStorage(values?.imageFour);
    const imageFive = await uploadImageToStorage(values?.imageFive);
    const imageSix = await uploadImageToStorage(values?.imageSix);

    const { data, error } = await supabase
      .from(DB_TABLES.BLOGSTABLE)
      .insert([
        {
          ...values,
          coverImage,
          imageOne,
          imageTwo,
          imageThree,
          imageFive,
          imageFour,
          imageSix,
        },
      ])
      .select();
    if (error) {
      alert(error?.message);
    } else {
      return { data };
    }
  } catch (error) {
    console.error(error);
  }
};
