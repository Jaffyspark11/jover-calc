import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    const [pressed, setPressed] = useState(false);

    return (
        <div className="bg-zinc-900 h-screen p-24 flex justify-center items-center">
            {!pressed && (
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-slate-50 font-thin text-9xl">
                        Is It Jover?
                    </h1>
                    <form>
                        <h3 className="text-slate-50 font-thin text-3xl">
                            What are the odds?
                        </h3>
                        <div className="flex items-center">
                            <label
                                htmlFor="range"
                                className="text-slate-50 font-thin text-xl"
                            >
                                0
                            </label>
                            <input
                                id="range"
                                type="range"
                                min={0}
                                max={100}
                            ></input>
                            <label
                                htmlFor="range"
                                className="text-slate-50 font-thin text-xl"
                            >
                                100
                            </label>
                        </div>
                    </form>
                    <div className="border-white">
                        <button
                            className="text-slate-50 font-thin text-xl"
                            onClick={() => setPressed(true)}
                        >
                            Find Out
                        </button>
                    </div>
                </div>
            )}

            {pressed && (
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-slate-50 font-thin text-9xl">
                        It's Never Jover
                    </h2>
                    <button
                        onClick={() => setPressed(false)}
                        className="text-slate-50 font-thin text-xl"
                    >
                        Calculate Another
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;
