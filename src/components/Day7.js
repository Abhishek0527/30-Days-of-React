import React, { useState, useEffect } from "react";

export default function Day7() {
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const [results, setResults] = useState([]);

    // Custom debounce effect
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedQuery(query), 500);
        return () => clearTimeout(handler);
    }, [query]);

    // Fetch on debouncedQuery change
    useEffect(() => {
        if (!debouncedQuery.trim()) {
            setResults([]);
            return;
        }

        const fetchData = async () => {
            try {
                const res = await fetch(`https://dummyjson.com/products/search?q=${debouncedQuery}`);
                const data = await res.json();
                setResults(data.products || []);
            } catch (error) {
                console.error("Error fetching data:", error);
                setResults([]);
            }
        };

        fetchData();
    }, [debouncedQuery]);

    return (
        <div style={{ maxWidth: 500, margin: "40px auto", fontFamily: "Arial" }}>
            <h2>🛒 Product Search</h2>
            <input
                type="text"
                placeholder="Type to search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                    padding: 10,
                    width: "100%",
                    boxSizing: "border-box",
                    marginBottom: 20,
                    fontSize: 16,
                }}
            />
            <ul style={{ listStyle: "none", padding: 0 }}>
                {results.map((item) => (
                    <li
                        key={item.id}
                        style={{
                            padding: "10px 15px",
                            marginBottom: 8,
                            background: "#f1f1f1",
                            borderRadius: 6,
                        }}
                    >
                        {item.title}
                    </li>
                ))}
                {debouncedQuery && results.length === 0 && (
                    <li style={{ padding: 10 }}>No results found.</li>
                )}
            </ul>
        </div>
    );
}
