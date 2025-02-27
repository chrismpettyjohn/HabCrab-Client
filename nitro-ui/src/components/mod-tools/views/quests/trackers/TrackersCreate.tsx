import { Button } from "react-bootstrap";
import { CreateLinkEvent, SendMessageComposer } from "../../../../../api";
import { FaCaretLeft } from "react-icons/fa";
import { TrackerDTO, TrackerEditor } from "./TrackerEditor";
import { Text } from "../../../../../common";
import { TrackerCreateComposer, TrackerData, TrackerDataEvent } from "@nitrots/nitro-renderer";
import { useMessageEvent } from "../../../../../hooks";
import { toast } from "react-toastify";

export function TrackersCreate() {
  async function onCreate(dto: TrackerDTO) {
    SendMessageComposer(new TrackerCreateComposer(dto.key, dto.title, dto.description));
  }

  useMessageEvent(TrackerDataEvent, (event: TrackerDataEvent) => {
    const eventData: TrackerData = event.getParser().data;
    toast.success(`Created tracker #${eventData.id} ${eventData.title}`);
    CreateLinkEvent(`mod-tools/manage-quests/trackers/view/${eventData.id}`);
  });

  return (
    <>
      <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between", width: "100%" }}>
        <Text bold fontSize={3}>
          Create Tracker
        </Text>
        <Button variant="secondary" onClick={() => CreateLinkEvent("mod-tools/manage-quests/trackers")}>
          <FaCaretLeft style={{ marginRight: 8 }} />
          Go Back
        </Button>
      </div>
      <TrackerEditor onSave={onCreate} />
    </>
  );
}
