import { IMessageDataWrapper, IMessageParser } from "../../../../../../api";
import { TrackerData } from "./TrackerDataEventParser";

export class TrackerListEventParser implements IMessageParser {
  private _trackers: TrackerData[];

  public flush(): boolean {
    this._trackers = [];
    return true;
  }

  public parse(wrapper: IMessageDataWrapper): boolean {
    if (!wrapper) return false;

    const trackerCount = wrapper.readInt();

    for (let i = 0; i < trackerCount; i++) {
      const [id, key, title, description, createdAt] = wrapper.readString().split(";");
      this._trackers.push({
        id: Number(id),
        key,
        title,
        description,
        createdAt: Number(createdAt),
      });
    }

    return true;
  }

  public get data(): TrackerData[] {
    return this._trackers;
  }
}
