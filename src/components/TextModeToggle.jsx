"use client";

const TextModeToggle = ({ isText, setIsText }) => {
  const toggleTextMode = () => {
    setIsText(!isText);
  };

  return (
    <div
      onClick={toggleTextMode}
      className="cursor-pointer dark:hover:text-white"
    >
      {`Text Mode (${isText ? "Y" : "N"})`}
    </div>
  );
};
export default TextModeToggle;
