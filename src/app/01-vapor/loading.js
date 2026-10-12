import React from "react";

import { range } from "@/utils";
import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";
import ArticleWrapper from "./ArticleWrapper";

export const dynamic = "force-dynamic";

async function VaporLoading() {
  return (
    <ArticleWrapper>
      {range(1, 10).map((num) => (
        <LibraryGameCardSkeleton key={num} />
      ))}
    </ArticleWrapper>
    // <section className="max-width-wrapper">
    //   <header className="library-header">
    //     <h1>My games</h1>
    //     {/* <p>
    //       <span className="num-of-games">{games.length}</span> games in library
    //     </p> */}
    //   </header>
    //   <div className="game-grid">
    //     {range(1, 10).map((num) => (
    //       <LibraryGameCardSkeleton key={num} />
    //     ))}
    //   </div>
    // </section>
  );
}

export default VaporLoading;
