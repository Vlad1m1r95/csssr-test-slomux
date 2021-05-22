import React, { useState } from "react";
import { Counter } from "./components/Counter";

import { Step } from "./components/Step/Step";
import { createStore, SlomuxProvider } from "./lib/slomux";
import { rootReducer } from "./reducers";

const store = createStore(rootReducer);

const profillerCallback = (
  id,
  phase,
  actualTime,
  baseTime,
  startTime,
  commitTime
) => {
  console.log(`${id}'s ${phase} phase:`);
  console.log(`Actual time: ${actualTime}`);
  console.log(`Base time: ${baseTime}`);
  console.log(`Start time: ${startTime}`);
  console.log(`Commit time: ${commitTime}`);
};
export const App = () => {
  const [isVisible, setIsvisible] = useState(true);
  return (
    // <SlomuxProvider store={store}>
    //   <Profiler id="StepComponent" onRender={profillerCallback}>
    //     <Step />
    //   </Profiler>
    //   <Profiler id="CounterComponent" onRender={profillerCallback}>
    //     <Counter />
    //   </Profiler>
    // </SlomuxProvider>

    <SlomuxProvider store={store}>
      <button onClick={() => setIsvisible(!isVisible)}>
        show/hide counter
      </button>
      <Step />
      {isVisible && <Counter />}

      <br />
    </SlomuxProvider>
  );
};
