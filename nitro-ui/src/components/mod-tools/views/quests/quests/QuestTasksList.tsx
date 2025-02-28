import { QuestData } from "@nitrots/nitro-renderer";
import { useQuestTaskList } from "../../../../../hooks/crab/quest-tasks/useQuestTaskList";
import { Button } from "react-bootstrap";
import { CreateLinkEvent } from "../../../../../api";
import { Text } from "../../../../../common";
import { FaPlus } from "react-icons/fa";

export interface QuestTasksListProps {
  quest: QuestData;
}

export function QuestTasksList({ quest }: QuestTasksListProps) {
  const questTasks = useQuestTaskList();

  return (
    <>
      <div className="mod-tools-quests">
        <div className="quest-container">
          {questTasks.map((_) => (
            <div className="quest" key={`quest_${_.id}`} onClick={() => CreateLinkEvent(`mod-tools/manage-quests/quest-tasks/view/${_.id}`)}>
              <Text bold fontSize={4}>
                #{_.id} {_.title}
              </Text>
              <Text>{_.description}</Text>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <Button variant="light" onClick={() => CreateLinkEvent("mod-tools/manage-quests/quest-tasks/create")} style={{ width: "100%" }}>
          <FaPlus style={{ marginRight: 8 }} />
          Add Task
        </Button>
      </div>
    </>
  );
}
