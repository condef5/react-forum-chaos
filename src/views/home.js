/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import DiscussionList from "../components/discussion-list";
import DiscussionForm from "../components/discussion-form";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { useDiscussion } from "../contexts/discussions";
import "@reach/dialog/styles.css";

function Home() {
  const { discussions, setDiscussions } = useDiscussion();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

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
        aria-label={"Add new discussion"}
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
