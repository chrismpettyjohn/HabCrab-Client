import { Button } from "react-bootstrap";
import { CreateLinkEvent, SendMessageComposer } from "../../../../../api";
import { FaCaretLeft, FaSpinner } from "react-icons/fa";
import { TrackerDTO, TrackerEditor } from "./TrackerEditor";
import { Text } from "../../../../../common";
import { useTrackerById } from "../../../../../hooks/crab/tracker/useTrackerById";
import { useMessageEvent } from "../../../../../hooks";
import { TrackerData, TrackerDataEvent, TrackerDeleteComposer, TrackerListEvent, TrackerUpdateComposer } from "@nitrots/nitro-renderer";
import { toast } from "react-toastify";

export interface TrackersViewOneProps {
  trackerId: number;
}

export function TrackersViewOne({ trackerId }: TrackersViewOneProps) {
  const tracker = useTrackerById(trackerId);

  if (!tracker) {
    return <FaSpinner className="fa-spin" />;
  }

  function onSave(dto: TrackerDTO) {
    SendMessageComposer(new TrackerUpdateComposer(trackerId, dto.key, dto.title, dto.description));
  }

  function onDelete() {
    SendMessageComposer(new TrackerDeleteComposer(trackerId));
  }

  useMessageEvent(TrackerDataEvent, (event: TrackerDataEvent) => {
    const eventData: TrackerData = event.getParser().data;
    if (!tracker) return;
    if (eventData.id !== trackerId) return;
    toast.success(`Updated tracker #${eventData.id} ${eventData.title}`);
    CreateLinkEvent(`mod-tools/manage-quests/trackers/view/${eventData.id}`);
  });

  useMessageEvent(TrackerListEvent, () => {
    toast.success(`Deleted tracker #${trackerId}`);
    CreateLinkEvent(`mod-tools/manage-quests/trackers`);
  });

  return (
    <>
      <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between", width: "100%" }}>
        <Text bold fontSize={3}>
          Edit Tracker
        </Text>
        <Button variant="secondary" onClick={() => CreateLinkEvent("mod-tools/manage-trackers/trackers")}>
          <FaCaretLeft style={{ marginRight: 8 }} />
          Go Back
        </Button>
      </div>
      <TrackerEditor defaultDTO={tracker} onSave={onSave} onDelete={onDelete} />
    </>
  );
}
