import { CreateLinkEvent } from "../../../../api";
import { DraggableWindowPosition, NitroCardContentView, NitroCardHeaderView, NitroCardView, Text } from "../../../../common";
import { useQuestList } from "../../../../hooks/crab/quests/useQuestList";
import { Button } from "react-bootstrap";

export function QuestTable() {
  const quests = useQuestList();

  return (
    <NitroCardView className="nitro-mod-tools-quest" theme="primary-slim" windowPosition={DraggableWindowPosition.TOP_LEFT} style={{ width: 600 }}>
      <NitroCardHeaderView headerText="Manage Quests" onCloseClick={() => CreateLinkEvent("mod-tools/quests/toggle")} />
      <NitroCardContentView className="h-100">
        <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
          <Button variant="secondary" onClick={() => CreateLinkEvent("mod-tools/quests/create")}>
            +&nbsp;Quest
          </Button>
        </div>
        <table className="table table-striped table-sm table-text-small text-black m-0">
          <tbody>
            <tr>
              <th>Parent ID</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
            {quests.map((_) => (
              <tr key={`quest_${_.id}`}>
                <td>{_.parentId}</td>
                <td>{_.title}</td>
                <td>{_.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </NitroCardContentView>
    </NitroCardView>
  );
}
