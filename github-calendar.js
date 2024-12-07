const { createElement } = React;
const { render } = ReactDOM;
const GitHubCalendar = window["react-github-calendar"];

function Github() {
  return createElement(
    "div",
    { style: { textAlign: "center", paddingBottom: "20px" } },
    createElement("h1", { className: "project-heading" }, "Days I Code"),
    createElement(GitHubCalendar, {
      username: "vaungsophal",
      blockSize: 15,
      blockMargin: 5,
      color: "#c084f5",
      fontSize: 16,
    })
  );
}

// Render the GitHub calendar inside the #github-calendar div
render(createElement(Github), document.getElementById("github-calendar"));
