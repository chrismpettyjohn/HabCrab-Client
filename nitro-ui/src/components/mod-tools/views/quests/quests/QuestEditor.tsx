import { SyntheticEvent } from "react";
import { Text } from "../../../../../common";

export interface QuestEditorProps {
  onSave(): void;
}

export function QuestEditor({ onSave }: QuestEditorProps) {
  function onSubmit(event: SyntheticEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <Text bold fontSize={5}>
          ID
        </Text>
        <input className="form-control" disabled style={{ width: "100%" }} readOnly value="#1" />
      </div>
      <br />
      <div>
        <Text bold fontSize={5}>
          Title
        </Text>
        <input className="form-control" style={{ width: "100%" }} />
      </div>
      <br />
      <div>
        <Text bold fontSize={5}>
          Description
        </Text>
        <textarea className="form-control" rows={4} style={{ width: "100%" }} />
      </div>
      <br />
      <div style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
        <button className="btn btn-success" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}
