import { supabase } from "../supabase";

// Get loading tasks for a seller
export const getLoadingTasks = async (sellerId) => {
  try {
    const { data, error } = await supabase
      .from("loading_tasks")
      .select("*")
      .eq("seller_id", sellerId);

    if (error) throw error;
    return { success: true, tasks: data };
  } catch (error) {
    console.error("Get Loading Tasks Error:", error.message);
    return { success: false, error: error.message };
  }
};
