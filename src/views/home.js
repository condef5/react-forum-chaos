/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import DiscussionList from "../components/discussion-list";
import DiscussionForm from "../components/discussion-form";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";

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
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  React.useEffect(() => {
    localStorage.setItem("discussions", JSON.stringify(discussions));
  }, [discussions]);

  function handleOpenModal(event) {
    setIsDialogOpen(true);
  }

  function handleCloseModal(event) {
    setIsDialogOpen(false);
  }

  function handleCreateDisccusion(discussion) {
    setDiscussions(state => [...new Set(state.concat(discussion))]);
  }

  return (
    <div>
      <DiscussionList
        discussions={discussions}
        handleCreateDisccusion={handleCreateDisccusion}
      />
      <button
        css={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          border: "none",
          borderRadius: "50%",
          backgroundColor: "#f60",
          color: "#fff",
          height: "55px",
          width: "55px",
          fontSize: "35px"
        }}
        onClick={handleOpenModal}
      >
        +
      </button>
      <DialogOverlay
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center"
        }}
        isOpen={isDialogOpen}
        onDismiss={handleCloseModal}
      >
        <DialogContent
          style={{
            maxWidth: "450px"
          }}
        >
          <DiscussionForm
            handleCloseModal={handleCloseModal}
            handleCreateDisccusion={handleCreateDisccusion}
          />
        </DialogContent>
      </DialogOverlay>
    </div>
  );
}

export default Home;
