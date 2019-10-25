import React from "react";

function FullScreenLoading() {
  return (
    <div
      style={{
        position: "center",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
      }}
    >
      Loading...
      <i class="fas fa-spinner fa-spin" />
    </div>
  );
}

export { FullScreenLoading };
