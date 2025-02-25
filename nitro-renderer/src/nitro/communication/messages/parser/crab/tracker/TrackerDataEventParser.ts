import { IMessageDataWrapper, IMessageParser } from "../../../../../../api";

export interface TrackerData {
  id: number;
  key: string;
  title: string;
  description: string;
  createdAt: number;
}

export class TrackerDataEventParser implements IMessageParser {
  private _id: number;
  private _key: string;
  private _title: string;
  private _description: string;
  private _createdAt: number;

  public flush(): boolean {
    this._id = 0;
    this._key = "";
    this._title = "";
    this._description = "";
    this._createdAt = 0;
    return true;
  }

  public parse(wrapper: IMessageDataWrapper): boolean {
    if (!wrapper) return false;

    this._id = wrapper.readInt();
    this._key = wrapper.readString();
    this._title = wrapper.readString();
    this._description = wrapper.readString();
    this._createdAt = wrapper.readInt();

    return true;
  }

  public get data(): TrackerData {
    return {
      id: this._id,
      key: this._key,
      title: this._title,
      description: this._description,
      createdAt: this._createdAt,
    };
  }
}
