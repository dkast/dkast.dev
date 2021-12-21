const Markdown = ({ children, className }) => {
  return (
    <div
      className={`prose lg:prose-lg prose-a:underline prose-a:decoration-red-400 prose-a:decoration-2 prose-pre:bg-gray-800  
      prose-code:text-red-500 dark:prose-invert dark:prose-p:text-gray-400 ${className}`}
    >
      {children}
    </div>
  );
};

export default Markdown;
