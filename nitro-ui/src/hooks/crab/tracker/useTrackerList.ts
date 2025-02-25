import { TrackerData, TrackerGetAllComposer, TrackerListEvent } from "@nitrots/nitro-renderer";
import { useEffect, useState } from "react";
import { SendMessageComposer } from "../../../api";
import { useMessageEvent } from "../../events";

export function useTrackerList(): TrackerData[] {
  const [data, setData] = useState<TrackerData[]>([]);

  useEffect(() => {
    SendMessageComposer(new TrackerGetAllComposer());
  }, []);

  useMessageEvent(TrackerListEvent, (event: TrackerListEvent) => {
    setData(event.getParser().data);
  });

  return data;
}
