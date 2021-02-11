import React from "react";
import { usePost } from "../customHooks/usePost";
import { useComments } from "../customHooks/useComments";

const SinglePostPage = () => {
  // We split logic into multiple hooks to avoid poluting
  // the component and follow SoC principle, also having
  // separate hooks allows to reuse them somewhere else
  const { renderPost } = usePost();
  const { renderComments } = useComments();

  return (
    <section>
      {renderPost()}
      {renderComments()}
    </section>
  );
};

export default SinglePostPage;
