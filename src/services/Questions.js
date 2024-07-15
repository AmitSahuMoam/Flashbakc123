import { supabase } from "../supabaseClient/supabaseClient";

import DB_TABLES from './dbTables';

export const createQuestionAnswer = async (values) => {
  try {
    const { data, error } = await supabase
      .from(DB_TABLES.QUESTIONSTABLE)
      .insert([
        {
          question: values.question,
          answer: values.answer,
        },
      ])
      .select();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    return null;
  }
};

export const getQuestionsAnswers = async () =>
  supabase.from(DB_TABLES.QUESTIONSTABLE).select("*");

export const fetchOneQuestionAnswer = (id) =>
  supabase.from(DB_TABLES.QUESTIONSTABLE).select().eq("id", id);

export const editQuestionAnswer = async (id, values) => {
  try {
    const { data, error } = await supabase
      .from(DB_TABLES.QUESTIONSTABLE)
      .update({ ...values })
      .eq("id", id)
      .select();
    if (error) {
      throw error;
    } else {
      return data;
    }
  } catch (error) {
    return null;
  }
};

export const deleteQuestionAnswer = async (id) => {
  try {
    const { data, error } = await supabase
      .from(DB_TABLES.QUESTIONSTABLE)
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

