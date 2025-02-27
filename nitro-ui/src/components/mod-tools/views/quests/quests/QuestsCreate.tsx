import { Button } from "react-bootstrap";
import { CreateLinkEvent } from "../../../../../api";
import { FaCaretLeft } from "react-icons/fa";
import { QuestEditor } from "./QuestEditor";
import { Text } from "../../../../../common";

export function QuestsCreate() {
  async function onCreate() {
    try {
    } catch (e: any) {}
  }

  return (
    <>
      <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between", width: "100%" }}>
        <Text bold fontSize={3}>
          Create Quest
        </Text>
        <Button variant="secondary" onClick={() => CreateLinkEvent("mod-tools/manage-quests/quests")}>
          <FaCaretLeft style={{ marginRight: 8 }} />
          Go Back
        </Button>
      </div>
      <QuestEditor onSave={onCreate} />
    </>
  );
}
