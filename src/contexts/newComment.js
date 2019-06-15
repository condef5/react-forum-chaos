import { createContext } from "react";

const NewCommentContext = createContext();

export const Provider = NewCommentContext.Provider;
export const Consumer = NewCommentContext.Consumer;
export default NewCommentContext;
