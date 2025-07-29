import Editor from "@monaco-editor/react";

const CodeEditor = ({ code, setCode }) => {
  // Function to disable Monaco validation
  const handleEditorWillMount = (monaco) => {
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: true,
      noSyntaxValidation: true,
    });
  };

  return (
    <div className="rounded-lg overflow-hidden h-full border border-gray-700 shadow bg-white/10 backdrop-blur-md">
      <Editor
        height="100%"
        language="javascript"
        theme="vs-dark"
        value={code}
        beforeMount={handleEditorWillMount} // disables validation
        onChange={(value) => setCode(value)}
        options={{
          fontSize: 16,
          minimap: { enabled: false },
          wordWrap: "on",
          padding: { top: 10 },
        }}
      />
    </div>
  );
};

export default CodeEditor;
