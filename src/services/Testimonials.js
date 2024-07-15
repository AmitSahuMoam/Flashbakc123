import { supabase } from "../supabaseClient/supabaseClient";
import DB_TABLES from "./dbTables";

export const uploadImageToStorage = async (file) => {
  const { data, error } = await supabase.storage
    .from("testimonial-images") // Ensure the bucket name is correct
    .upload(`public/${file.name}`, file);

  if (error) {
    throw error;
  }

  const publicURL = supabase.storage
    .from("testimonial-images")
    .getPublicUrl(`public/${file.name}`);

  return publicURL.data.publicUrl;
};

// eslint-disable-next-line consistent-return
export const createTemonial = async (values) => {
  try {
    const imageUrl = await uploadImageToStorage(values.image);

    const { data, error } = await supabase
      .from(DB_TABLES.TESTIMONIALTABLE)
      .insert([
        {
          title: values.title,
          description: values.description,
          image: imageUrl,
          firstPersonName: values.firstPersonName,
          secondPersonName: values.secondPersonName,
        },
      ])
      .select();
    if (error) {
      throw error;
    } else {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteTestimonial = async (id) => {
  try {
    const { data, error } = await supabase
      .from(DB_TABLES.TESTIMONIALTABLE)
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

export const getTestimonials = async () =>
  supabase.from(DB_TABLES.TESTIMONIALTABLE).select("*");

export const fetchOneTestimonial = (id) =>
  supabase.from(DB_TABLES.TESTIMONIALTABLE).select().eq("id", id);

// eslint-disable-next-line consistent-return
export const editTestimonial = async (id, values) => {
  try {
    const imageUrl = await uploadImageToStorage(values.image);

    const { data, error } = await supabase
      .from(DB_TABLES.TESTIMONIALTABLE)
      .update({ ...values, image: imageUrl })
      .eq("id", id)
      .select();
    if (error) {
      throw error;
    } else {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
