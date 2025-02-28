import { Button } from "react-bootstrap";
import { CreateLinkEvent, SendMessageComposer } from "../../../../../api";
import { useQuestById } from "../../../../../hooks/crab/quests/useQuestById";
import { FaCaretLeft, FaSpinner } from "react-icons/fa";
import { QuestDTO, QuestEditor } from "./QuestEditor";
import { Text } from "../../../../../common";
import { QuestData, QuestDataEvent, QuestDeleteComposer, QuestListEvent, QuestUpdateComposer } from "@nitrots/nitro-renderer";
import { useMessageEvent } from "../../../../../hooks";
import { toast } from "react-toastify";
import { QuestTasksList } from "./QuestTasksList";

export interface QuestsViewOneProps {
  questId: number;
}

export function QuestsViewOne({ questId }: QuestsViewOneProps) {
  const quest = useQuestById(questId);

  useMessageEvent(QuestDataEvent, (event: QuestDataEvent) => {
    const eventData: QuestData = event.getParser().data;
    if (!quest) return;
    if (eventData.id !== questId) return;
    toast.success(`Updated quest #${eventData.id} ${eventData.title}`);
    CreateLinkEvent(`mod-tools/manage-quests/quests/view/${eventData.id}`);
  });

  useMessageEvent(QuestListEvent, () => {
    toast.success(`Deleted quest #${questId}`);
    CreateLinkEvent(`mod-tools/manage-quests/quests`);
  });

  if (!quest) {
    return <FaSpinner className="fa-spin" />;
  }

  function onSave(dto: QuestDTO) {
    SendMessageComposer(new QuestUpdateComposer(questId, dto.parentId, dto.title, dto.description));
  }

  function onDelete() {
    SendMessageComposer(new QuestDeleteComposer(questId));
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
      <QuestEditor defaultDTO={quest} onDelete={onDelete} onSave={onSave} />
      <QuestTasksList quest={quest} />
    </>
  );
}
