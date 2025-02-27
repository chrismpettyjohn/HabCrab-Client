import { Button } from "react-bootstrap";
import { useQuestList } from "../../../../../hooks/crab/quests/useQuestList";
import { CreateLinkEvent } from "../../../../../api";
import { Text } from "../../../../../common";

export function QuestsGrid() {
  const quests = useQuestList();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <Button variant="secondary" onClick={() => CreateLinkEvent("mod-tools/manage-quests/quests/create")}>
          +&nbsp;Quest
        </Button>
      </div>
      <div className="mod-tools-quests">
        {quests.map((_) => (
          <div className="quest" key={`quest_${_.id}`}>
            <Text bold fontSize={4}>
              #{_.id} {_.title}
            </Text>
            <Text>{_.description}</Text>
          </div>
        ))}
        {quests.map((_) => (
          <div className="quest" key={`quest_${_.id}`} onClick={() => CreateLinkEvent(`mod-tools/manage-quests/quests/view/${_.id}`)}>
            <Text bold fontSize={4}>
              #{_.id} {_.title}
            </Text>
            <Text>{_.description}</Text>
          </div>
        ))}
      </div>
    </>
  );
}
