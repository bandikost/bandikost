export default function Preloader({className="flex items-center justify-center h-screen bg-gray-900"}) {
  return (
    <div className={className}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500" />
    </div>
  );
}
