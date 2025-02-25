import { QuestData, QuestGetAllComposer, QuestListEvent } from "@nitrots/nitro-renderer";
import { useEffect, useState } from "react";
import { SendMessageComposer } from "../../../api";
import { useMessageEvent } from "../../events";

export function useQuestList(): QuestData[] {
  const [data, setData] = useState<QuestData[]>([]);

  useEffect(() => {
    SendMessageComposer(new QuestGetAllComposer());
  }, []);

  useMessageEvent(QuestListEvent, (event: QuestListEvent) => {
    setData(event.getParser().data);
  });

  return data;
}
