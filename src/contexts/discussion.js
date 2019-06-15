import { createContext } from "react";

const DiscussionContext = createContext();

export const Provider = DiscussionContext.Provider;
export const Consumer = DiscussionContext.Consumer;
export default DiscussionContext;
