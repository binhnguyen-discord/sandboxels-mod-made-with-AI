elements.code = {
    color: "#00aaff",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 1200,
    reactions: {
        "bug": { elem1: "broken_code", chance: 0.5 },
        "compiler": { elem1: "program", elem2: null },
    },
};

elements.bug = {
    color: "#aa0000",
    behavior: behaviors.POWDER,
    category: "powders",
    state: "solid",
    density: 800,
    reactions: {
        "code": { elem2: "broken_code" },
        "debugger": { elem1: null }
    },
};

elements.broken_code = {
    color: "#555555",
    behavior: behaviors.STURDYPOWDER,
    category: "solids",
    state: "solid",
    density: 1500,
};

elements.compiler = {
    color: "#ffaa00",
    behavior: behaviors.WALL,
    category: "machines",
    state: "solid",
    density: 2000,
    reactions: {
        "code": { elem2: "program" }
    },
    tick: function(pixel) {
        // occasional spark effect
        if (Math.random() < 0.01) {
            createPixel("spark", pixel.x+offset(-1,1), pixel.y+offset(-1,1));
        }
    }
};

elements.program = {
    color: ["#00ff00","#00dd00","#00bb00"],
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1000,
    reactions: {
        "bug": { elem1: "crash" }
    },
    tick: function(pixel) {
        // shimmer effect
        pixel.color = ["#00ff00","#00dd00","#00bb00"].random();
    }
};

elements.crash = {
    color: ["#000000","#444444","#880000"],
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    density: 10,
    reactions: {
        "debugger": { elem1: null }
    },
    tick: function(pixel) {
        // flicker effect
        pixel.color = ["#000000","#444444","#880000"].random();
    }
};

elements.debugger = {
    color: "#44ff44",
    behavior: behaviors.POWDER,
    category: "machines",
    state: "solid",
    density: 1200,
    reactions: {
        "bug": { elem2: null },
        "broken_code": { elem2: "code" }
    },
    tick: function(pixel) {
        // glow effect when active
        if (Math.random() < 0.02) {
            pixel.color = "#66ff66";
        } else {
            pixel.color = "#44ff44";
        }
    }
};
