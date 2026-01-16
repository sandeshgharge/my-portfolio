export default function Footer() {
    return (
        <footer className="footer-clean">
            <div className="container mx-auto px-4 footer-content">

                {/* Left */}
                <div className="footer-left">
                    <div className="footer-name">-s&y </div>
                    <div className="footer-meta">
                        Version <span className="footer-version">v1.0.0</span>
                    </div>
                        
                    <div className="footer-meta">
                        Tech <span className="footer-version">NextJS - Page Router</span> 
                    </div>
                </div>

                <div className="footer-bottom">
                    © 2026 Sandesh Gharge
                </div>

                {/* Right */}
                <div className="footer-right">
                    <a
                        href="https://www.linkedin.com/in/sandesh-gharge-753182b6/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/sandeshgharge"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                </div>

            </div>
        </footer>
    )
}
