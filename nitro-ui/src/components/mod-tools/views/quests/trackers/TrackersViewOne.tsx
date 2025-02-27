import { Button } from "react-bootstrap";
import { CreateLinkEvent } from "../../../../../api";
import { FaCaretLeft, FaSpinner } from "react-icons/fa";
import { TrackerEditor } from "./TrackerEditor";
import { Text } from "../../../../../common";
import { useTrackerById } from "../../../../../hooks/crab/tracker/useTrackerById";

export interface TrackersViewOneProps {
  trackerId: number;
}

export function TrackersViewOne({ trackerId }: TrackersViewOneProps) {
  const tracker = useTrackerById(trackerId);

  if (!tracker) {
    return <FaSpinner className="fa-spin" />;
  }

  async function onSave() {
    try {
    } catch (e: any) {}
  }

  return (
    <>
      <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between", width: "100%" }}>
        <Text bold fontSize={3}>
          Edit Tracker
        </Text>
        <Button variant="secondary" onClick={() => CreateLinkEvent("mod-tools/manage-quests/trackers")}>
          <FaCaretLeft style={{ marginRight: 8 }} />
          Go Back
        </Button>
      </div>
      <TrackerEditor onSave={onSave} />
    </>
  );
}
