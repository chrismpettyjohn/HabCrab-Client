import { SyntheticEvent, useState } from "react";
import { Text } from "../../../../../common";
import { TrackerData } from "@nitrots/nitro-renderer";
import { toast } from "react-toastify";

export type TrackerDTO = Omit<TrackerData, "id" | "createdAt">;

export interface TrackerEditorProps {
  defaultDTO?: TrackerDTO;
  onDelete?(): void;
  onSave(dto: TrackerDTO): void;
}

export function TrackerEditor({ defaultDTO, onDelete, onSave }: TrackerEditorProps) {
  const [dto, setDTO] = useState<TrackerDTO>({
    key: defaultDTO?.title ?? "",
    title: defaultDTO?.title ?? "",
    description: defaultDTO?.description ?? "",
  });

  const isValid = !!dto.title && !!dto.description;

  function onChange(changes: Partial<TrackerDTO>) {
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
          Key
        </Text>
        <input className="form-control" name="key" value={dto.key} onChange={(e) => onChange({ key: e.currentTarget.value })} style={{ width: "100%" }} />
      </div>
      <br />
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
          rows={4}
          name="description"
          value={dto.description}
          onChange={(e) => onChange({ description: e.currentTarget.value })}
          style={{ width: "100%" }}
        />
      </div>
      <br />
      <div style={{ display: "flex", flex: 1, justifyContent: "space-between" }}>
        <div>
          {onDelete && (
            <button className="btn btn-danger" type="button" onClick={onDelete}>
              Delete
            </button>
          )}
        </div>
        <button className="btn btn-success" type="submit" disabled={!isValid}>
          Save
        </button>
      </div>
    </form>
  );
}
