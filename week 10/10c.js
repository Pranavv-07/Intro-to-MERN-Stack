const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const technologies = [
        "HTML",
        "Python",
        "CSS",
        "JavaScript",
        "TypeScript",
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js"
    ];

    // Write the list of technologies to src.txt
    fs.writeFile("src.txt", technologies.join("\n"), (err) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error writing to file.");
            return;
        }

        // Send success message after writing to the file
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Technologies written to src.txt");
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});
