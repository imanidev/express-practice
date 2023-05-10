const React = require("react");

function Template2(props) {
  return (
    <html>
      <head>
        <title>{props.title}</title>
      </head>
      <body>
        <h1>{props.header}</h1>
        <p>{props.message}</p>
      </body>
    </html>
  );
}

module.exports = Template2;
