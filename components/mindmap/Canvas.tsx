'use client'


import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

type CanvasProps = {
  mindMapData: any;
};

const Canvas: React.FC<CanvasProps> = ({ mindMapData }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);

  // Placeholder rendering function - in a real implementation, this would use 
  // a proper mindmap visualization library like react-d3-tree or custom SVG
  const renderNode = (node: any, level = 0, parentId = "") => {
    const nodeId = parentId ? `${parentId}-${node.id || Math.random().toString(36).substr(2, 9)}` : (node.id || Math.random().toString(36).substr(2, 9));
    
    return (
      <div 
        key={nodeId}
        className={`relative text-black ${level === 0 ? "mb-8" : "mt-4"}`}
      >
        <div 
          className={`p-4 rounded-lg shadow-md bg-white border-2 ${level === 0 ? "border-neuro-primary" : "border-neuro-light"} max-w-sm`}
        >
          <div className="font-semibold">{node.text || node.name || "Node"}</div>
          {node.description && <div className="text-sm text-gray-600 mt-1">{node.description}</div>}
        </div>
        
        {node.children && node.children.length > 0 && (
          <div className="pl-8 mt-2 border-l-2 border-neuro-light">
            {node.children.map((child: any) => renderNode(child, level + 1, nodeId))}
          </div>
        )}
      </div>
    );
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button === 0) { // Left mouse button
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      setPosition({
        x: position.x + dx,
        y: position.y + dy
      });
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.1, 0.5));
  };

  useEffect(() => {
    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [canvasRef]);

  // Sample placeholder data structure for development
  const placeholderData = mindMapData || {
    text: "Main Concept",
    children: [
      {
        text: "Sub Topic 1",
        description: "Description for Sub Topic 1",
        children: [
          { text: "Detail 1.1" },
          { text: "Detail 1.2" }
        ]
      },
      {
        text: "Sub Topic 2",
        children: [
          { text: "Detail 2.1" },
          { text: "Detail 2.2", 
            children: [
              { text: "Sub-detail 2.2.1" }
            ] 
          }
        ]
      },
      {
        text: "Sub Topic 3"
      }
    ]
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-neuro-gradient-soft rounded-lg">
      <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
        <Button 
          size="icon"
          variant="secondary" 
          onClick={handleZoomIn} 
          className="bg-white"
        >
          <ZoomIn size={18} />
        </Button>
        <Button 
          size="icon"
          variant="secondary" 
          onClick={handleZoomOut} 
          className="bg-white"
        >
          <ZoomOut size={18} />
        </Button>
      </div>
      
      <div 
        ref={canvasRef}
        className={`absolute inset-0 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div 
          className="absolute p-8"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: 'center',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out'
          }}
        >
          <div className="flex justify-center">
            {renderNode(placeholderData)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
