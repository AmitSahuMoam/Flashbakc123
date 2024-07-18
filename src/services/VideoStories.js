import { supabase } from "../supabaseClient/supabaseClient";
import DB_TABLES from "./dbTables";

export const uploadImageToStorage = async (file) => {
  const { data, error } = await supabase.storage
    .from("videostories-images") // Ensure the bucket name is correct
    .upload(`public/${file.name}`, file);

  if (error) {
    throw error;
  }

  const publicURL = supabase.storage
    .from("videostories-images")
    .getPublicUrl(`public/${file.name}`);

  return publicURL.data.publicUrl;
};

export const createVideoStory = async (values) => {
  try {
    // Upload image and get the URL
    const imageUrl = await uploadImageToStorage(values.image);

    // Insert new video story with the image URL
    const { data, error } = await supabase
      .from(DB_TABLES.VIDEOSTORYTABLE)
      .insert([
        {
          firstPersonName: values.firstPersonName,
          secondPersonName: values.secondPersonName,
          state: values.state,
          // narrativeLink: values.narrativeLink,
          image: imageUrl,
        },
      ])
      .select();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error creating video story:", error);
    return null;
  }
};

export const deleteVideoStory = async (id) => {
  try {
    const { data, error } = await supabase
      .from(DB_TABLES.VIDEOSTORYTABLE)
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

export const getVideoStories = async () =>
  supabase.from(DB_TABLES.VIDEOSTORYTABLE).select("*");

export const fetchOneVideoStory = (id) =>
  supabase.from(DB_TABLES.VIDEOSTORYTABLE).select().eq("id", id);

// eslint-disable-next-line consistent-return
export const updateVideoStory = async (id, values) => {
  try {
    const imageUrl = await uploadImageToStorage(values.image);
    const { data, error } = await supabase
      .from(DB_TABLES.VIDEOSTORYTABLE)
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
