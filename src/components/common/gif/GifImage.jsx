export default function GifImage({item}) {
    return (
        <img
            key={item.id}
            src={item["images"]["original"]["url"]}
            alt="gif"
            style={{
                width: "100%",
                display: "flex",
            }}
        />
    );
}