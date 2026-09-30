import React from "react";
import Blog from "./Components/Blog";
import Data from "./Components/Data";

const App = () => {
  return (
    <div>
      <Blog
        title="voluptate et itaque vero tempora molestiae"
        content="eveniet quo quis nlaborum totam consequatur non dolor nut et est nrepudiandae nest voluptatem vel debitis et magnam"
        author="Leanne Graham"
      />
      <Blog title="Title 2" content="Content 2" author="Leanne Graham" />
      <Blog title="Title 3" content="Content 3" author="Leanne Graham" />

      {/* <Data data={{ name: "hari", age: 20 }} />
      <Data data={[1, 2, 3]} /> */}
    </div>
  );
};

export default App;
