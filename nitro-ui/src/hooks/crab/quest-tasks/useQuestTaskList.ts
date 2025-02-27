import { QuestTaskData, QuestTaskGetAllComposer, QuestTaskListEvent } from "@nitrots/nitro-renderer";
import { useEffect, useState } from "react";
import { SendMessageComposer } from "../../../api";
import { useMessageEvent } from "../../events";

export function useQuestTaskList(): QuestTaskData[] {
  const [data, setData] = useState<QuestTaskData[]>([]);

  useEffect(() => {
    SendMessageComposer(new QuestTaskGetAllComposer());
  }, []);

  useMessageEvent(QuestTaskListEvent, (event: QuestTaskListEvent) => {
    setData(event.getParser().data);
  });

  return data;
}
