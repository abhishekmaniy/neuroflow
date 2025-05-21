'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Share, History } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

type ControlPanelProps = {
  onDownload: (format: string) => void;
  onShare: () => void;
  onViewHistory: () => void;
};

const ControlPanel: React.FC<ControlPanelProps> = ({
  onDownload,
  onShare,
  onViewHistory,
}) => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const handleShare = () => {
    const dummyLink = "https://neuroflow.app/shared/map-" + Math.random().toString(36).substr(2, 9);

    navigator.clipboard.writeText(dummyLink)
      .then(() => {
        toast.success("Shareable link copied to clipboard!");
        onShare();
      })
      .catch(() => {
        toast.error("Failed to copy link to clipboard");
      });
  };

  const toggleHistory = () => {
    setIsHistoryOpen(!isHistoryOpen);
    onViewHistory();
  };

  const historyItems = [
    { id: 1, timestamp: "Today, 2:30 PM", label: "Added new branch: Technology" },
    { id: 2, timestamp: "Today, 1:15 PM", label: "Initial mind map generation" },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl border border-muted shadow-md w-full max-w-md">
      <div className="flex flex-col gap-3">
        {/* Download */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full justify-start bg-neuro-soft text-neuro-primary hover:bg-neuro-light transition">
              <Download size={18} className="mr-2" />
              Download
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-44">
            <DropdownMenuLabel>Export Format</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onDownload("png")}>PNG Image</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDownload("pdf")}>PDF Document</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDownload("svg")}>SVG Vector</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDownload("json")}>JSON Data</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Share */}
        <Button
          variant="outline"
          className="w-full justify-start hover:border-neuro-light transition"
          onClick={handleShare}
        >
          <Share size={18} className="mr-2" />
          Share
        </Button>

        {/* History */}
        <Button
          variant="outline"
          className="w-full justify-start hover:border-neuro-light transition"
          onClick={toggleHistory}
        >
          <History size={18} className="mr-2" />
          History
        </Button>
      </div>

      {/* History Panel */}
      {isHistoryOpen && (
        <div className="mt-4 border-t pt-3 animate-fade-in">
          <h4 className="text-sm font-semibold text-foreground mb-2">Recent Changes</h4>
          <div className="space-y-2 max-h-40 overflow-y-auto text-sm">
            {historyItems.map((item) => (
              <div
                key={item.id}
                className="p-2 rounded-md hover:bg-muted cursor-pointer transition"
              >
                <div className="text-xs text-muted-foreground">{item.timestamp}</div>
                <div className="text-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
