import { IMessageDataWrapper, IMessageParser } from "../../../../../../api";
import { QuestTaskData } from "../quests/QuestTaskDataEventParser";

export class QuestTaskListEventParser implements IMessageParser {
  private _quests: QuestTaskData[];

  public flush(): boolean {
    this._quests = [];
    return true;
  }

  public parse(wrapper: IMessageDataWrapper): boolean {
    if (!wrapper) return false;

    const questCount = wrapper.readInt();

    for (let i = 0; i < questCount; i++) {
      const [id, parentId, title, description, createdAt] = wrapper.readString().split(";");
      this._quests.push({
        id: Number(id),
        parentId: Number(parentId),
        title,
        description,
        createdAt: Number(createdAt),
      });
    }

    return true;
  }

  public get data(): QuestTaskData[] {
    return this._quests;
  }
}
