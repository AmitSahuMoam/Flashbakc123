import { supabase } from "../supabaseClient/supabaseClient";
import DB_TABLES from './dbTables';

const submitContactRequest = async (values) => {
  try {
    const { data, error } = await supabase
      .from(DB_TABLES.CONTACTREQUESTS)
      .insert([
        {
          mediaOption: values.mediaOption,
          name: values.name,
          email: values.email,
          phone: values.phone,
          guestCount: values.guestCount,
          details: values.details,
          location: values.location,
          eventDates: values.eventDates,
        },
      ])
      .select();

    if (error) {
      throw error;
    }

    // Optionally, you can trigger an email here or through a Supabase Function

    return data;
  } catch (error) {
    return null;
  }
};

export default submitContactRequest;
