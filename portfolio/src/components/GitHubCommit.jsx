import { useState, useEffect } from "react";

function GitHubCommit ({githubUrl}) {
    const [commit, setCommit] = useState("");

    const urlParts = new URL(githubUrl).pathname.split("/").filter(Boolean);
    const [owner, repo] = urlParts;

    useEffect(() => {
        fetch(`https://api.github.com/repos/${owner}/${repo}/commits/main`)
            .then((response) => response.json())
            .then((data) => {
                if (data.commit) {
                    const message = data.commit.message;
                    const date = new Date(data.commit.committer.date).toLocaleString(); // Format date
                    setCommit({ message, date });
                }
            })
            .catch((error) => console.error("Error fetching commit:", error));
    }, []);

    return (
        <span>
            <h2>Last Commit:</h2>
            <p>{commit.message || ""} on {commit.date || ''}</p>
        </span>
    );
};
export default GitHubCommit;