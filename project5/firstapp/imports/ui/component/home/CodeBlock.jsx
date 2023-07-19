import React, { useState } from 'react';

function CodeBlock() {
  const [showFullCode, setShowFullCode] = useState(false);
  const code = ["Lorem ipsum dolor sit amet consectetur adipisicing elit.","Iure incidunt eaque velit deserunt, eum fugit.","Eaque, rem. Earum officia illum ad doloremque unde voluptatem,","quae autem? Delectus debitis veniam ducimus.","quae autem? Delectus debitis veniam ducimus.","quae autem? Delectus debitis veniam ducimus.","quae autem? Delectus debitis veniam ducimus.","quae autem? Delectus debitis veniam ducimus.","quae autem? Delectus debitis veniam ducimus.","quae autem? Delectus debitis veniam ducimus.","quae autem? Delectus debitis veniam ducimus."];
  const toggleCodeDisplay = () => {
    setShowFullCode(!showFullCode);
  };

  const codeToShow = showFullCode ? code : code.slice(0, 5); // Display only the first 5 lines

  return (
    <div className="code-container">
      <div className="line-numbers">
        {codeToShow.map((_, index) => (
          <div className="line-number" key={index + 1}>
            {index + 1}
          </div>
        ))}
      </div>
      <pre className="code">
        <code>
          {codeToShow.map((line, index) => (
            <div className="line" key={index + 1}>
              {line}
            </div>
          ))}
        </code>
      </pre>
      {!showFullCode && (
        <button className="show-more-button" onClick={toggleCodeDisplay}>
          Show More
        </button>
      )}
      {showFullCode && (
        <div className="fullscreen-overlay">
          <div className="fullscreen-content">
            <pre className="fullscreen-code">
              <code>
                {code.map((line, index) => (
                  <div className="line" key={index + 1}>
                    {line}
                  </div>
                ))}
              </code>
            </pre>
            <button className="close-button" onClick={toggleCodeDisplay}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CodeBlock;
