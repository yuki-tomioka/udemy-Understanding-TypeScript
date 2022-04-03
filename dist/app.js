"use strict";
var e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toLocaleString();
    }
    return a + b;
}
var result = add("Hello", "TypeScript");
result.split("");
//# sourceMappingURL=app.js.map