import React from 'react';

const CopyLinkButton = ({ title }) => {
  const handleCopyLink = () => {
    const url = window.location.href + '#' + encodeURIComponent(title);
    navigator.clipboard
      .writeText(url)
      .then(() => alert('คัดลอกลิงก์แล้ว!'))
      .catch(() => {
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('คัดลอกลิงก์แล้ว!');
      });
  };

  return (
    <button className="copy-btn" onClick={handleCopyLink} title="คัดลอกลิงก์">
      🔗
    </button>
  );
};

export default CopyLinkButton;


