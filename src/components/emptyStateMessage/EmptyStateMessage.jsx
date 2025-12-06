import React from "react";
import "./emptyStateMessage.css";

const EmptyStateMessage = ({ message }) => {
  return <p className="empty-state-message">{message}</p>;
};

export default EmptyStateMessage;