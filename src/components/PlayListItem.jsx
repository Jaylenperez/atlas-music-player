export default function PlayListItem({ title, artist, length }) {
  return (
    <div className="flex items-center justify-between rounded-md border-b border-gray-200 px-4 py-2 hover:bg-gray-50">
      <div>
        <h3 className="text-lg font-medium text-sky-400">{title}</h3>
        <p className="text-sm text-gray-500">{artist}</p>
      </div>
      <span className="text-sm text-gray-400">{length}</span>
    </div>
  );
}
