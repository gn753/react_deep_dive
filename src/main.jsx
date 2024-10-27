import React from "./main-react";

const App = (
  <div id="app">
    <ul>
      <li>
        <input type="checkbox" class="toggle" />
        todo list item 1<button class="remove">삭제</button>
      </li>
      <li class="completed">
        <input type="checkbox" class="toggle" checked />
        todo list item 2<button class="remove">삭제</button>
      </li>
    </ul>
    <form>
      <input type="text" />
      <button type="submit">추가</button>
    </form>
  </div>
);

// eslint-disable-next-line react/no-deprecated
React.render(App, document.getElementById("root"));
