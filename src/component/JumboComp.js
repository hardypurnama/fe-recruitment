import React from "react";
import "./JumboComp.css";
import SearchCard from "./SearchCard";

function JumboComp(props) {
  return (
    <div>
      <div class="mb-4 rounded-3">
        <div style={{ backgroundColor: "white" }}
        class="container-fluid py-5">
          <h1
            class="display-5 fw-bold"
            style={{ color: "white", backgroundColor: "" }}
          >
            Inilah LOKER
          </h1>
          <h2 style={{ color: "green", backgroundColor: "" }}>Temukan Pekerjaan Impianmu</h2>
          <SearchCard search={props.search}/>
        </div>
      </div>
    </div>
  );
}

export default JumboComp;
