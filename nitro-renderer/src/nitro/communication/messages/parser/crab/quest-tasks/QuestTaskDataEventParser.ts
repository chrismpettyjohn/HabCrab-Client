import { IMessageDataWrapper, IMessageParser } from "../../../../../../api";

export interface QuestTaskData {
  id: number;
  parentId: number;
  title: string;
  description: string;
  createdAt: number;
}

export class QuestTaskDataEventParser implements IMessageParser {
  private _id: number;
  private _parentId: number;
  private _title: string;
  private _description: string;
  private _createdAt: number;

  public flush(): boolean {
    this._id = 0;
    this._parentId = 0;
    this._title = "";
    this._description = "";
    this._createdAt = 0;
    return true;
  }

  public parse(wrapper: IMessageDataWrapper): boolean {
    if (!wrapper) return false;

    this._id = wrapper.readInt();
    this._parentId = wrapper.readInt();
    this._title = wrapper.readString();
    this._description = wrapper.readString();
    this._createdAt = wrapper.readInt();

    return true;
  }

  public get data(): QuestTaskData {
    return {
      id: this._id,
      parentId: this._parentId,
      title: this._title,
      description: this._description,
      createdAt: this._createdAt,
    };
  }
}
