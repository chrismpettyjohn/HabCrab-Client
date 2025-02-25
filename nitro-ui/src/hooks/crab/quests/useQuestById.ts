import { QuestData, QuestDataEvent, QuestGetByIdComposer } from "@nitrots/nitro-renderer";
import { useEffect, useState } from "react";
import { SendMessageComposer } from "../../../api";
import { useMessageEvent } from "../../events";

export function useQuestById(questId: number): QuestData | null {
  const [data, setData] = useState<QuestData>(null);

  useEffect(() => {
    SendMessageComposer(new QuestGetByIdComposer(questId));
  }, []);

  useMessageEvent(QuestDataEvent, (event: QuestDataEvent) => {
    setData(event.getParser().data);
  });

  return data;
}
