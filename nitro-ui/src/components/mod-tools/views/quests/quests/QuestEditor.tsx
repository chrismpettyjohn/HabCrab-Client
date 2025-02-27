import { SyntheticEvent, useState } from "react";
import { Text } from "../../../../../common";
import { QuestData } from "@nitrots/nitro-renderer";
import { toast } from "react-toastify";

export type QuestDTO = Omit<QuestData, "id" | "createdAt">;

export interface QuestEditorProps {
  defaultDTO?: QuestDTO;
  onSave(dto: QuestDTO): void;
}

export function QuestEditor({ defaultDTO, onSave }: QuestEditorProps) {
  const [dto, setDTO] = useState<QuestDTO>({
    parentId: defaultDTO?.parentId ?? -1,
    title: defaultDTO?.title ?? "",
    description: defaultDTO?.description ?? "",
  });

  const isValid = !!dto.title && !!dto.description;

  function onChange(changes: Partial<QuestDTO>) {
    setDTO((_) => ({
      ..._,
      ...changes,
    }));
  }

  function onSubmit(event: SyntheticEvent) {
    event.preventDefault();
    if (!isValid) {
      toast.error(`Ensure all fields are valid and try again`);
      return;
    }

    onSave(dto);
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <Text bold fontSize={5}>
          Title
        </Text>
        <input className="form-control" name="title" value={dto.title} onChange={(e) => onChange({ title: e.currentTarget.value })} style={{ width: "100%" }} />
      </div>
      <br />
      <div>
        <Text bold fontSize={5}>
          Description
        </Text>
        <textarea
          className="form-control"
          name="description"
          value={dto.description}
          onChange={(e) => onChange({ description: e.currentTarget.value })}
          rows={4}
          style={{ width: "100%" }}
        />
      </div>
      <br />
      <div style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
        <button className="btn btn-success" disabled={!isValid} type="submit">
          Save
        </button>
      </div>
    </form>
  );
}
