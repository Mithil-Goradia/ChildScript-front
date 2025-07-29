const OutputPane = ({ output }) => {
  return (
    <div className="bg-black flex-1 rounded-lg p-4 text-sm text-green-400 font-mono overflow-y-auto border border-gray-700 shadow">
      <h2 className="text-white mb-2 font-semibold">🔽 Output Console</h2>
      <pre>{output}</pre>
    </div>
  );
};

export default OutputPane;
