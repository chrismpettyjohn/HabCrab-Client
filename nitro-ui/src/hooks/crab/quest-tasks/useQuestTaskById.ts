import { useEffect, useState } from "react";
import { SendMessageComposer } from "../../../api";
import { useMessageEvent } from "../../events";
import { QuestTaskData, QuestTaskDataEvent, QuestTaskGetByIdComposer } from "@nitrots/nitro-renderer";

export function useQuestTaskById(questId: number): QuestTaskData | null {
  const [data, setData] = useState<QuestTaskData>(null);

  useEffect(() => {
    SendMessageComposer(new QuestTaskGetByIdComposer(questId));
  }, []);

  useMessageEvent(QuestTaskDataEvent, (event: QuestTaskDataEvent) => {
    setData(event.getParser().data);
  });

  return data;
}
