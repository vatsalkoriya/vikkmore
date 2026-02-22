import { useState } from "react";
import { Key, ExternalLink } from "lucide-react";
import { getApiKey, setApiKey } from "@/lib/storage";

const SettingsView = () => {
  const [key, setKey] = useState(getApiKey());
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setApiKey(key);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-8 max-w-lg mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Settings</h1>

      <div className="bg-card rounded-lg p-6 space-y-4">
        <div className="flex items-center gap-3">
          <Key className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-card-foreground">YouTube Data API Key</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Enter your YouTube Data API v3 key to enable search and trending music.
        </p>
        <a
          href="https://console.cloud.google.com/apis/credentials"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
        >
          Get your API key <ExternalLink className="w-3 h-3" />
        </a>
        <input
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="AIza..."
          className="w-full px-4 py-2.5 bg-secondary text-secondary-foreground rounded-md text-sm outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
        />
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:scale-105 transition-transform"
        >
          {saved ? "✓ Saved!" : "Save"}
        </button>
      </div>
    </div>
  );
};

export default SettingsView;
