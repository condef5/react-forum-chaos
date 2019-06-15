import React from "react";

const DiscussionContext = React.createContext();

export function DiscussionProvider({ discussions, setDiscussions, children }) {
  return (
    <DiscussionContext.Provider value={{ discussions, setDiscussions }}>
      {children}
    </DiscussionContext.Provider>
  );
}

export function useDiscussion() {
  return React.useContext(DiscussionContext);
}
