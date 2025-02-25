import { TrackerData, TrackerDataEvent, TrackerGetByIdComposer } from "@nitrots/nitro-renderer";
import { useEffect, useState } from "react";
import { SendMessageComposer } from "../../../api";
import { useMessageEvent } from "../../events";

export function useTrackerById(trackerId: number): TrackerData | null {
  const [data, setData] = useState<TrackerData>(null);

  useEffect(() => {
    SendMessageComposer(new TrackerGetByIdComposer(trackerId));
  }, []);

  useMessageEvent(TrackerDataEvent, (event: TrackerDataEvent) => {
    setData(event.getParser().data);
  });

  return data;
}
