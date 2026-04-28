export default function CatchAll({ params }: any) {
  return (
    <div className="p-10">
      <h1>Catch-all route</h1>
      <p>{params.slug.join(" / ")}</p>
    </div>
  );
}