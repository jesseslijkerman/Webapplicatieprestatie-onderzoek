export default async function ItemsPage() {
    const res = await fetch('http://localhost:3001/api/items', {
        cache: 'no-cache'
    });
    const items = await res.json();


    return (
        <div>
            <h1>Items (SSR)</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.title} – €{item.price}</li>
                ))}
            </ul>
        </div>
    );
}
