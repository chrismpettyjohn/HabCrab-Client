import { Button } from "react-bootstrap";
import { CreateLinkEvent } from "../../../../../api";
import { FaCaretLeft } from "react-icons/fa";
import { TrackerEditor } from "./TrackerEditor";
import { Text } from "../../../../../common";

export function TrackersCreate() {
  async function onCreate() {
    try {
    } catch (e: any) {}
  }

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
