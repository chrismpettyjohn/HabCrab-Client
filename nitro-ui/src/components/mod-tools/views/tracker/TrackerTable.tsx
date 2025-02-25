import { CreateLinkEvent } from "../../../../api";
import { DraggableWindowPosition, NitroCardContentView, NitroCardHeaderView, NitroCardView, Text } from "../../../../common";
import { useTrackerList } from "../../../../hooks/crab/tracker/useTrackerList";
import { Button } from "react-bootstrap";
export function TrackerList() {
  const trackers = useTrackerList();

  return (
    <NitroCardView className="nitro-mod-tools-tracker" theme="primary-slim" windowPosition={DraggableWindowPosition.TOP_LEFT} style={{ width: 600 }}>
      <NitroCardHeaderView headerText="Manage Trackers" onCloseClick={() => CreateLinkEvent("mod-tools/trackers/toggle")} />
      <NitroCardContentView className="h-100">
        <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
          <Button variant="secondary" onClick={() => CreateLinkEvent("mod-tools/trackers/create")}>
            +&nbsp;Tracker
          </Button>
        </div>
        <table className="table table-striped table-sm table-text-small text-black m-0">
          <tbody>
            <tr>
              <th>Key</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
            {trackers.map((_) => (
              <tr key={`tracker_${_.id}`}>
                <td>{_.key}</td>
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
