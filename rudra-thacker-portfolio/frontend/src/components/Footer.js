export default function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Rudra Thacker. All rights reserved.</p>
            <div>
                <a href="https://github.com/rudrathacker" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/rudrathacker" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://twitter.com/rudrathacker" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
        </footer>
    );
}