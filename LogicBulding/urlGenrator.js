function generateSlug(title) {
    const slug = title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    return slug+ ".com";
}
console.log(generateSlug("Hello World!"));
console.log(generateSlug("AlmaBetter Web Dev"));