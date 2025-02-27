import { Button } from "react-bootstrap";
import { CreateLinkEvent } from "../../../../../api";
import { useQuestById } from "../../../../../hooks/crab/quests/useQuestById";
import { FaCaretLeft, FaSpinner } from "react-icons/fa";
import { QuestEditor } from "./QuestEditor";
import { Text } from "../../../../../common";

export interface QuestsViewOneProps {
  questId: number;
}

export function QuestsViewOne({ questId }: QuestsViewOneProps) {
  const quest = useQuestById(questId);

  if (!quest) {
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
          Edit Quest
        </Text>
        <Button variant="secondary" onClick={() => CreateLinkEvent("mod-tools/manage-quests/quests")}>
          <FaCaretLeft style={{ marginRight: 8 }} />
          Go Back
        </Button>
      </div>
      <QuestEditor onSave={onSave} />
    </>
  );
}
