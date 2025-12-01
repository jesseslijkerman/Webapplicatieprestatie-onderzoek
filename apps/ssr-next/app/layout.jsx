export default function RootLayout({children}) {
    return (
        <html>
        <body style={{padding: 20}}>
        <nav style={{display: 'flex', gap: 20}}>
            <a href="/">Home</a>
            <a href="/items">Items</a>
        </nav>
        {children}
        </body>
        </html>
    );
}
