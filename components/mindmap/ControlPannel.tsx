

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Download,
  Share,
  History
} from "lucide-react";
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
    // In a real implementation, this would generate a shareable link
    const dummyLink = "https://neuroflow.app/shared/map-" + Math.random().toString(36).substr(2, 9);
    
    // Copy to clipboard
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

  // Sample history data
  const historyItems = [
    { id: 1, timestamp: "Today, 2:30 PM", label: "Added new branch: Technology" },
    { id: 2, timestamp: "Today, 1:15 PM", label: "Initial mind map generation" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
      <div className="flex flex-col gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="w-full justify-start bg-neuro-soft text-neuro-primary hover:bg-neuro-light">
              <Download className="mr-2" size={18} />
              Download
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuLabel>Export Format</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onDownload("png")}>PNG Image</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDownload("pdf")}>PDF Document</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDownload("svg")}>SVG Vector</DropdownMenuItem>
            <DropdownMenuItem onClick={() => onDownload("json")}>JSON Data</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Button variant="outline" className="w-full justify-start" onClick={handleShare}>
          <Share className="mr-2" size={18} />
          Share
        </Button>
        
        <Button variant="outline" className="w-full justify-start" onClick={toggleHistory}>
          <History className="mr-2" size={18} />
          History
        </Button>
      </div>
      
      {isHistoryOpen && (
        <div className="mt-4 border-t pt-3">
          <h4 className="text-sm font-medium mb-2">Recent Changes</h4>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {historyItems.map((item) => (
              <div key={item.id} className="text-sm p-2 rounded hover:bg-gray-50 cursor-pointer">
                <div className="text-xs text-gray-500">{item.timestamp}</div>
                <div>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ControlPanel;
