"use strict";
window.alert('Check the file "popup/popup.ts"');
function textTypeChange(event) {
    const target = event.target;
    if (!target)
        return;
    const selectedValue = target.value.toLowerCase();
    // TODO: make a speed variable changeable
    // see the variable "readingTime". 150 or Complex text, 250 for simple text
    // maybe storage API is suitable
    switch (selectedValue) {
        case "complex":
            break;
        case "simple":
            break;
        default:
            break;
    }
}
const textDifficultyElement = document.getElementById("text-difficulty");
if (textDifficultyElement) {
    textDifficultyElement.addEventListener("change", (e) => textTypeChange(e));
}
//# sourceMappingURL=popup.js.map