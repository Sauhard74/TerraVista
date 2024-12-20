import { supabase } from "./supabase";

// Register a new user
export const registerUser = async (email, password, role) => {
  try {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    // Insert user into the profiles table
    const { data, error: insertError } = await supabase
      .from("profiles")
      .insert({
        id: user.id,
        email,
        is_buyer: role === "buyer",
        is_seller: role === "seller",
      });

    if (insertError) throw insertError;

    return { success: true, user: data };
  } catch (error) {
    console.error("Registration Error:", error.message);
    return { success: false, error: error.message };
  }
};

// Login user
export const loginUser = async (email, password) => {
  try {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return { success: true, user };
  } catch (error) {
    console.error("Login Error:", error.message);
    return { success: false, error: error.message };
  }
};

// Logout user
export const logoutUser = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;

    return { success: true };
  } catch (error) {
    console.error("Logout Error:", error.message);
    return { success: false, error: error.message };
  }
};
