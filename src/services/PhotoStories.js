import { supabase } from "../supabaseClient/supabaseClient";
import DB_TABLES from "./dbTables";

export const uploadImageToStorage = async (file) => {
  const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.]/g, "_");
  const { data, error } = await supabase.storage
    .from("photostories-images")
    .upload(`public/${sanitizedFileName}`, file);

  if (error) {
    throw error;
  }

  const { data: publicData, error: publicError } = supabase.storage
    .from("photostories-images")
    .getPublicUrl(`public/${sanitizedFileName}`);

  if (publicError) {
    throw publicError;
  }

  return publicData.publicUrl;
};



export const createPhotoStory = async (values) => {
  try {
    // Upload image and get the URL
    const imageUrl = await uploadImageToStorage(values.image);

    // Insert new photo story with the image URL
    const { data, error } = await supabase
      .from(DB_TABLES.PHOTOSTORYTABLE)
      .insert([
        {
          firstPersonName: values.firstPersonName,
          secondPersonName: values.secondPersonName,
          state: values.state,
          // narrativeLink: values.narrativeLink,
          image: imageUrl,
        },
        // { returning: 'minimal' }
      ])
      .select();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error creating photo story:", error);
    return null;
  }
};


export const deletePhotoStory = async (id) => {
  try {
    const { data, error } = await supabase
      .from(DB_TABLES.PHOTOSTORYTABLE)
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

export const getPhotoStories = async () =>
  supabase.from(DB_TABLES.PHOTOSTORYTABLE).select("*");

export const fetchOnePhotoStory = (id) =>
  supabase.from(DB_TABLES.PHOTOSTORYTABLE).select().eq("id", id);

// eslint-disable-next-line consistent-return
export const editPhotoStory = async (id, values) => {
  try {
    const imageUrl = await uploadImageToStorage(values?.image);
    const { data, error } = await supabase
      .from(DB_TABLES.PHOTOSTORYTABLE)
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
