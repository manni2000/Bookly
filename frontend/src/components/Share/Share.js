import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Share.css";

function Share({ showShare, closeShare, userEmail }) {
  const [textCopied, setTextCopied] = useState(false);

  const handleCopyText = () => {
    setTextCopied(true);
    setTimeout(() => {
      setTextCopied(false);
    }, 2000); // Reset after 2 seconds
  };

  const url = `https://calendlyclone.netlify.app/user=${userEmail}/15`;

  return (
    <div className="share-modal">
      <div className="share-container">
        <button className="share-close-btn" onClick={() => closeShare(false)}>
          Close
        </button>
        <div className="share-content">
          <h4 className="share-title">15 Minute Meeting</h4>
          <p className="share-time">🕒 15 min</p>
          <div className="share-divider"></div>
          <p className="share-link-label">Share a link</p>

          <div className="share-url-section">
            <p className="share-instructions">
              Copy and paste your scheduling link into a message:
            </p>
            <div className="url-display">{url}</div>

            <div className="share-actions">
              <CopyToClipboard text={url}>
                <button className="share-copy-btn" onClick={handleCopyText}>
                  {textCopied ? "Copied!" : "Copy Link"}
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
