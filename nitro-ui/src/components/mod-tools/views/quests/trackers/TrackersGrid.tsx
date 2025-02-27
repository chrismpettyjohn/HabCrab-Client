import { Button } from "react-bootstrap";
import { useTrackerList } from "../../../../../hooks/crab/tracker/useTrackerList";
import { CreateLinkEvent } from "../../../../../api";
import { Text } from "../../../../../common";

export function TrackersGrid() {
  const trackers = useTrackerList();

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
        <Button variant="secondary" onClick={() => CreateLinkEvent("mod-tools/manage-quests/trackers/create")}>
          +&nbsp;Tracker
        </Button>
      </div>
      <div className="mod-tools-quests">
        <div className="quest-container">
          {trackers.map((_) => (
            <div className="quest" key={`Tracker_${_.id}`} onClick={() => CreateLinkEvent(`mod-tools/manage-quests/trackers/view/${_.id}`)}>
              <Text bold fontSize={4}>
                #{_.id} {_.title}
              </Text>
              <Text>{_.description}</Text>
            </div>
          ))}
          {trackers.map((_) => (
            <div className="quest" key={`Tracker_${_.id}`} onClick={() => CreateLinkEvent(`mod-tools/manage-quests/trackers/view/${_.id}`)}>
              <Text bold fontSize={4}>
                #{_.id} {_.title}
              </Text>
              <Text>{_.description}</Text>
            </div>
          ))}
          {trackers.map((_) => (
            <div className="quest" key={`Tracker_${_.id}`} onClick={() => CreateLinkEvent(`mod-tools/manage-quests/trackers/view/${_.id}`)}>
              <Text bold fontSize={4}>
                #{_.id} {_.title}
              </Text>
              <Text>{_.description}</Text>
            </div>
          ))}
          {trackers.map((_) => (
            <div className="quest" key={`Tracker_${_.id}`} onClick={() => CreateLinkEvent(`mod-tools/manage-quests/trackers/view/${_.id}`)}>
              <Text bold fontSize={4}>
                #{_.id} {_.title}
              </Text>
              <Text>{_.description}</Text>
            </div>
          ))}
          {trackers.map((_) => (
            <div className="quest" key={`Tracker_${_.id}`} onClick={() => CreateLinkEvent(`mod-tools/manage-quests/trackers/view/${_.id}`)}>
              <Text bold fontSize={4}>
                #{_.id} {_.title}
              </Text>
              <Text>{_.description}</Text>
            </div>
          ))}
          {trackers.map((_) => (
            <div className="quest" key={`Tracker_${_.id}`} onClick={() => CreateLinkEvent(`mod-tools/manage-quests/trackers/view/${_.id}`)}>
              <Text bold fontSize={4}>
                #{_.id} {_.title}
              </Text>
              <Text>{_.description}</Text>
            </div>
          ))}
          {trackers.map((_) => (
            <div className="quest" key={`Tracker_${_.id}`} onClick={() => CreateLinkEvent(`mod-tools/manage-quests/trackers/view/${_.id}`)}>
              <Text bold fontSize={4}>
                #{_.id} {_.title}
              </Text>
              <Text>{_.description}</Text>
            </div>
          ))}
          {trackers.map((_) => (
            <div className="quest" key={`Tracker_${_.id}`} onClick={() => CreateLinkEvent(`mod-tools/manage-quests/trackers/view/${_.id}`)}>
              <Text bold fontSize={4}>
                #{_.id} {_.title}
              </Text>
              <Text>{_.description}</Text>
            </div>
          ))}
          {trackers.map((_) => (
            <div className="quest" key={`Tracker_${_.id}`} onClick={() => CreateLinkEvent(`mod-tools/manage-quests/trackers/view/${_.id}`)}>
              <Text bold fontSize={4}>
                #{_.id} {_.title}
              </Text>
              <Text>{_.description}</Text>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
