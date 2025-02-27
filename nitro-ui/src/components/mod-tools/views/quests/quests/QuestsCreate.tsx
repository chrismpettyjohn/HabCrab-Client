import { Button } from "react-bootstrap";
import { CreateLinkEvent, SendMessageComposer } from "../../../../../api";
import { FaCaretLeft } from "react-icons/fa";
import { QuestDTO, QuestEditor } from "./QuestEditor";
import { Text } from "../../../../../common";
import { QuestCreateComposer, QuestData, QuestDataEvent } from "@nitrots/nitro-renderer";
import { useMessageEvent } from "../../../../../hooks";
import { toast } from "react-toastify";

export function QuestsCreate() {
  async function onCreate(dto: QuestDTO) {
    SendMessageComposer(new QuestCreateComposer(dto.parentId, dto.title, dto.description));
  }

  useMessageEvent(QuestDataEvent, (event: QuestDataEvent) => {
    const eventData: QuestData = event.getParser().data;
    toast.success(`Created quest #${eventData.id} ${eventData.title}`);
    CreateLinkEvent(`mod-tools/manage-quests/quests/view/${eventData.id}`);
  });

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
