import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

const AppContext = createContext();

const initialState = {
  loading: false,
  page: 0,
  query: "",
  photos: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    dispatch({ type: "QUERY_EVENT", query: e.target.value });
  };

  const handleSubmit = (e) => {
    dispatch({ type: "HANDLE_SUBMIT" });
    e.preventDefault();
    // Set page equal one
    dispatch({ type: "RESET_PAGE" });
    // fetchImages();
  };

  const fetchImages = async () => {
    dispatch({ type: "LOADING" });
    let url;
    const urlPage = `&page=${state.page}`;
    const urlQuery = `&query=${state.query}`;

    if (state.query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (state.query && state.page === 1) {
        return dispatch({ type: "DISPLAY_QUERY", payload: data.results });
      } else if (state.query) {
        dispatch({ type: "DISPLAY_PHOTOS", payload: data.results });
      } else {
        dispatch({ type: "DISPLAY_PHOTOS", payload: data });
      }
    } catch (error) {
      dispatch({ type: "ERROR" });
      console.log(error);
    }
  };

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        !state.loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        dispatch({ type: "CHANGE_PAGE" });
      }
    });

    return () => window.removeEventListener("scroll", event);
  }, []);

  useEffect(() => {
    fetchImages();
  }, [state.page]);

  return (
    <AppContext.Provider value={{ ...state, handleSubmit, handleInputChange }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
