import React, { createContext, useState, useEffect } from "react";
import supabase from "./supabase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const register = async (name, email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;

    const { user } = data;
    await supabase.from("profiles").insert([{ id: user.id, name }]);
    setCurrentUser({ id: user.id, name, email });
    setIsLoggedIn(true);
    return { success: true };
  };

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;

    const { user } = data;
    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    setCurrentUser({ id: user.id, name: profile.name, email: user.email });
    setIsLoggedIn(true);
    return { success: true };
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;

    setCurrentUser(null);
    setIsLoggedIn(false);
    return { success: true };
  };

  useEffect(() => {
    const session = supabase.auth.getSession();
    if (session?.user) {
      setIsLoggedIn(true);
      setCurrentUser(session.user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, isLoggedIn, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
