function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

console.log(toTitleCase("convert this string to title case"));  // Output: "Convert This String To Title Case"
