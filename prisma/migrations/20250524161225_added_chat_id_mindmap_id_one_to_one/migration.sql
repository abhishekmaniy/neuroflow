/*
  Warnings:

  - A unique constraint covering the columns `[mindMapId]` on the table `Chat` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[chatId]` on the table `MindMap` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "MindMap" ADD COLUMN     "chatId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Chat_mindMapId_key" ON "Chat"("mindMapId");

-- CreateIndex
CREATE UNIQUE INDEX "MindMap_chatId_key" ON "MindMap"("chatId");
