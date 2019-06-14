/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import DiscussionList from "../components/discussion-list";

const initialDiscussion = JSON.parse(
  localStorage.getItem("discussions") ||
    JSON.stringify([
      {
        id: new Date("2019-06-13T21:50:18.315Z").getTime(),
        title: "How kill to Christopher",
        body: "Some body in the sky",
        author: "condef5",
        date: "2019-06-13T21:50:18.315Z"
      },
      {
        id: new Date("2019-06-13T22:50:18.315Z").getTime(),
        title: "How to build the future today",
        body: "Some body in the sky",
        author: "condef5",
        date: "2019-06-13T22:50:18.315Z"
      },
      {
        id: new Date("2019-06-13T23:50:18.315Z").getTime(),
        title: "Learn react like a professional",
        body: "Some body in the sky",
        author: "condef5",
        date: "2019-06-13T23:50:18.315Z"
      },
      {
        id: new Date("2019-06-13T13:50:18.315Z").getTime(),
        title: "The best reply in the history",
        body: "Some body in the sky",
        author: "condef5",
        date: "2019-06-13T13:50:18.315Z"
      }
    ])
);

function Home() {
  const [discussions, setDiscussions] = React.useState(initialDiscussion);

  React.useEffect(() => {
    localStorage.setItem("discussions", JSON.stringify(discussions));
  }, [discussions]);

  function handleCreateDisccusion(discussion) {
    setDiscussions(state => [...new Set(state.concat(discussion))]);
  }

  return (
    <div>
      <DiscussionList
        discussions={discussions}
        handleCreateDisccusion={handleCreateDisccusion}
      />
    </div>
  );
}

export default Home;
